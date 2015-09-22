/**
 * Created by liuzheng on 9/22/15.
 */
'use strict';
'use strict';
var NgApp = angular.module('NgApp', ['ngRoute', 'ngCookies']);
NgApp.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});
NgApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);
NgApp.controller('SudokuCtrl', function ($scope, $http) {
  $scope.Matrix = Array(81)

});
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
