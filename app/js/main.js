;(function() {

    'use strict';

    angular.module('Vehicles', ['ngRoute'])

    .constant('PARSE', {
        URL: 'https://api.parse.com/1/',
        CONFIG: {
            headers: {
                'X-Parse-Application-Id': '51oFLEEItAP9ihbKa8XBwSxANYlXvQ4zIxy6yn37',
                'X-Parse-REST-API-Key': 'rWt3x0WF1PuU2fyMsrGeisEaoyIJ75O0S0bq22mw'

            }
        }
    })

    .config(['$routeProvider',
        function($routeProvider) {

            $routeProvider.when('/', {

                controller: 'VehicleList',
                templateUrl: 'js/vehicle/home.tpl.html'

            })

            .when('/add', {

                controller: 'Vehicle',
                templateUrl: 'js/vehicle/add.tpl.html'

            })

            .when('/about', {

                controller: 'Vehicle',
                templateUrl: 'js/vehicle/about.tpl.html'

            });


        }
    ]);

}());
