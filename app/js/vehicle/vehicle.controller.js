;(function() {

        'use strict';

        angular.module('Vehicles')

        .controller('Vehicle', ['$scope', '$http', 'PARSE', '$location',

                function($scope, $http, PARSE, $location) {

                    $scope.title2 = 'About Vehicle Tracker';

                    // Vehicle Constructor
                    var Vehicle = function(options) {
                        this.make = options.make;
                        this.model = options.model;
                        this.year = options.year;
                    };


      // Add Vehicle Method
      $scope.addVehicle = function (x) {
        var y = new Vehicle(x);

        $http.post(PARSE.URL + 'classes/Vehicle', y, PARSE.CONFIG)

        .success( function () {

          // Route Home
          $location.path('/');

          $scope.car = {};

        });


      };

    }
  ])

}());
