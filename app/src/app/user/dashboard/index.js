import angular from 'angular';
import uirouter from 'angular-ui-router';

import api from '../../../api';

import routes from './dashboard.routes';
import DashboardController from './dashboard.controller';
import userStatsChart from './userStatsChart.directive';


export default angular.module('app.user.dashboard', [
  uirouter,
  api
]).config(routes)
  .controller('DashboardController', DashboardController)
  .directive('userStatsChart', userStatsChart)
  .name;
