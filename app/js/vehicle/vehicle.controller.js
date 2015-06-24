;(function (){

  'use strict';

  angular.module('Vehicles')

  .controller('Vehicle', ['$scope', function ($scope) {

    // List of Vehicle
    $scope.vehicleList = [];

    // Vehicle Constructor
    var Vehicle = function (options) {
      this.make = options.make;
      this.model = options.model;
      this.year = options.year;
    };

    // Add Vehicle Method
    $scope.addVehicle = function (x) {
      var y = new Vehicle(x);
      $scope.vehicleList.push(y);
      $scope.car = {};
    };

  }])

}());
