var myApp = angular.module('myApp');

var dependencies = ['$stateProvider','$urlRouterProvider'];
var config = function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  var homeState = {
    name: 'home',
    url: '/home',
    component: 'homeComp'
  };

  $stateProvider.state(homeState);
};

config.$inject = dependencies;
myApp.config(config);
