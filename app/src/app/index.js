import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';
import ngTouch from 'angular-touch';
import uirouter from 'angular-ui-router';

/**
 * Modules
 */
import routing from './app.routes';
import error404 from './error404';
import home from './home';
import user from './user';
import admin from './admin';
import api from '../api';

/**
 * Local imports
 */
import AppController from './app.controller';


export default angular.module('app', [
  ngCookies,
  ngSanitize,
  ngTouch,
  uirouter,
  error404,
  home,
  admin,
  api,
  user
]).config(routing)
  .controller('AppController', AppController)
  .name;