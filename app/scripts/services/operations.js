'use strict';

/**
 * @ngdoc service
 * @name betterCalcApp.operations
 * @description
 * # operations
 * Service in the betterCalcApp.
 */
angular.module('betterCalcApp')
  .service('operations', function () {
      return {
          clear: function(str) {
              console.log('clear');
              return "";
          },
          divide: function(str) {
              console.log('divide');
              return str;
          },
          multiply: function(str) {
              console.log('multiply');
              return str;
          },
          addition: function(str) {
              console.log('addition');
              return str;
          },
          substract: function(str) {
              console.log('substract');
              return str;
          }
      }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
