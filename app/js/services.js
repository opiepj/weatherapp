'use strict';

angular.module('weatherApp.services', ['ngResource'])

  .value('exampleLocations', ['Seattle', 'New York', 'San Diego', 'Boston', 'London', 'Cape Town'])

  .value('stormLocations', ['Vegas', 'Toronto', 'Christmas Island'])

  /* 
    Register service for my application
    Generate a custom resource object that can be able to query open weather api with custom parameters.
    This avoids a server/proxy and instead uses a JSONP request
    With a given API key and base url we can send our request.
  
  */
  .factory('weatherApp', function($resource, apiKey, apiBaseUrl) {
    if (apiKey) {
      apiKey = '10123120jidjsc0d1231221'; // Default key (made up)
    }
    return $resource(apiBaseUrl + ':path/:subPath?q=:location',
      {
        mode: 'jsonp',
        callback: 'JSON_CALLBACK',
        units: 'metric'
        lang: 'en'
      },
      {
        queryWeather: {
          method: 'JSONP',
          params: {
            path: 'weather'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecast: {
          method: 'JSONP',
          params: {
            path: 'forecast'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          } 
        },
        queryForecastDaily: {
          method: 'JSONP',
          params: {
           path: 'forecast',
           subPath: 'daily',
           cnt: 7 
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        }
      }
    )
  });