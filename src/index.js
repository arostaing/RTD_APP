var angular = require('angular');

var hello = require('./app/main/hello');
var questions = require('./app/questions/questions');
var technologies = require('./app/technologies/technologies');
var messages = require('./app/messages/messages');

require('angular-ui-router');
var routesConfig = require('./routes');

require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello)
  .component('questions', questions)
  .component('technologies', technologies)
  .component('messages', messages);

