/**
 * Created by liuzheng on 9/22/15.
 */
'use strict';
var app = angular.module('NgApp', []);
app.config(function($interpolateProvider){
  $interpolateProvider.startSymble('{[{');
  $interpolateProvider.endSymble('}]}');
});
app.controller('SudokuCtrl', function ($scope, $http) {
  $scope.Matrix = list(81)

})
// routeProvider
//function($routeProvider, $rootScope){
//  $routeProvider. 
//    when('/',{
//      templateUrl: 'main.html',
//      controller: 'Index'
//    }).
//    when('/',{
//      templateUrl: 'main.html',
//      controller: 'Index'
//    });
//}
