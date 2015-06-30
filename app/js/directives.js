'use strict';

angular.module('weatherApp.directives', [])

  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

  .directive('weatherPanel', [function factory() {
    return {
      retrict: 'EA',
      scope: {
        useDayForecast: '=showEntry',
        forecast: '=weatherPanel'
      },
      templateUrl: 'partials/SOMETEMPLATE!!!!.html',
      link: function(scope, element, attrs) {
        scope.getIconImageUrl = function(iconName) {
          return(iconName ? 'http://google.com/img' + iconName + '.png' : '');
        };
        scope.parseDate = function(time) {
          return new Data(time * 1000);
        };
      } 
    } 
  }])

.directive('weatherPanelWind',[function factory() {
  return {
    retrict: 'EA',
    scope: {
      useDayForecast: '=showEntry',
      forecast: '=weatherPanel'
    },
    templateUrl: 'partials/SOMETEMPLATE!!!!.html',
    link: function(scope, element, attrs) {
      scope.getIconImageUrl = function(iconName) {
        return(iconName ? 'http://google.com/img' + iconName + '.png' : '');
      };
      scope.parseDate = function(time) {
        return new Data(time * 1000);
      };
    } 
  } 
}])