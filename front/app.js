/**
 * Created by Seth on 5/22/2017.
 */
angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: './views/home.html',
            controller: 'mainCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: './views/login.html',
            controller: 'loginCtrl'
        })
        .state('profile', {
                url: '/profile',
                templateUrl: './views/profile.html',
                controller: 'profileCtrl'
            }
        )
        .state('adventures', {
            url: '/home/adventures',
            templateUrl: './views/adventure.html',
            controller: 'adventureCtrl'
        })

});