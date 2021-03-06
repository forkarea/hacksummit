export default ngInject(function DialogController($scope, $mdDialog, skills) {
  $scope.newRole = {
    name: '',
    Skills: []
  };

  $scope.skills = skills;

  $scope.close = () => {
    $mdDialog.cancel();
  };
  $scope.submit = () => {
    $mdDialog.hide($scope.newRole);
  };
});
