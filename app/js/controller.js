'use strict';

angular.module('weatherApp.controllers', [])

	.controller('weatherCtrl',
		['$scope', 'weatherMap', 'exampleLocations', 'stormLocations', 'ISO3166',
			function($scope, weatherMap, exampleLocations, stormLocations, ISO3166) {

		$scope.message = '';
		$scope.hasState = '';
		$scope.exampleLocations = exampleLocations;
		$scope.stormLocations = stormLocations;
    $scope.iconBaseUrl = 'http://google.com/img';

		// When opens, loads data for first example
		$scope.forecast = weatherMap.queryForecastDaily({
			location: exampleLocations[0]
		});

		$scope.getForecastByLocation = function() {
			if ($scope.location == '' || $scope.location == undefined) {
				$scope.hasState = 'has-warning';
				$scope.message = 'Please provide a location';
				return;
			}

			$scope.hasState = 'has-success';

			scope.forecast = weatherMap.queryForecastDaily({
				location: $scope.location
			});
		};

		$scope.setLocation = function(loc) {
			$scope.location = loc;
			$scope.getForecastByLocation();
		};

    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };
	}])