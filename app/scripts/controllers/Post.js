'use strict';

function jsonp_callback(data) {
  // returning from async callbacks is (generally) meaningless
  console.log(data.found);
}
angular.module('angularDemo1App')
  .controller('PostCtrl', function ($scope, $http) {
    var url = 'http://jsonplaceholder.typicode.com/posts';
    $http.get(url).success(function(data, status, headers, config) {
        console.table(data.found)
        $scope.posts = data;
    })
});
