export default ngInject(function DashboardController($q, $state, $scope, $mdSidenav, Stats, Evaluation, Project, Skill, User, Notification) {
  $scope.filters = {
    project: [],
    skill: [],
    user: []
  };
  let skillsPromise;

  let fetchStats = (filters, oldFilters) => {
    if (_.isEqual(filters, oldFilters)) {
      return;
    }

    Stats.getList(filters).then((_stats) => {
      let stats = _stats.plain();
      stats.skills = _.map(stats.skills, (skill) => {
        skill.scores = skill.scores[0].scores;
        return skill;
      });

      skillsPromise.then(() => {
        this.softSkillStats = stats.global.filter(s => this.skills.find(sk => sk.id === s.skillId).isSoft);
        this.hardSkillStats = stats.skills.filter(s => !this.skills.find(sk => sk.id === s.skillId).isSoft);
      });
    });
  };

  let activeUserPromise = User.getProfile().then(res => {
    this.activeUser = res.plain();
    return this.activeUser;
  });

  Stats.getContributors().then((contributors) => {
    this.contributorsList = {
      list: contributors
        .sort(c => -c.score)
        .map(c => {
          return c.User;
        })
    };
  });

  Project.getList().then((projects) => {
    this.projects = projects;
  });

  skillsPromise = Skill.getList().then((skills) => {
    this.skills = skills.plain();
    return this.skills;
  });

  $q.all([
    activeUserPromise,
    skillsPromise
  ]).then(([activeUser, skills]) => {
    $scope.filters.user = [activeUser.id];
    $scope.filters.skill = _.take(skills, 3);
  });

  this.skillpointSelected = (date) => {
    Evaluation.getList(date.format('x')).then((evaluations) => {
      this.evaluations = evaluations;
      $mdSidenav('commentSidebar').toggle();
    });
  };

  Notification.scheduleNotfication();

  $scope.$watch('filters', fetchStats, true);
  $scope.$on('$destroy', () => {
    Notification.cancelScheduled();
  });
});
