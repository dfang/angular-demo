'use strict';

angular.module('angularDemo1App', [])
  /* the following did enable AngularJS to send its requests with the appropriate CORS headers globally for the whole app
  * Just setting useXDomain to true is not enough. AJAX request are also send with the X-Requested-With header,
  * which indicate them as being AJAX. Removing the header is necessary, so the server is not rejecting the incoming request.
  * http://stackoverflow.com/questions/19554414/angularjs-disabling-cors
  */
  .config(['$httpProvider', function($httpProvider) {
        // $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];}])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/posts', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


