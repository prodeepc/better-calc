'use strict';

/**
* @ngdoc function
* @name betterCalcApp.controller:CalcctrlCtrl
* @description
* # CalcctrlCtrl
* Controller of the betterCalcApp
*/
angular.module('betterCalcApp')
.controller('CalcCtrl', ['$scope', 'operations', 'controls',
    function ($scope, operations, controls) {
        $scope.calculateStr = "";

        $scope.setItem = function(item) {
            $scope.calculateStr += item.value;
        }

        $scope.setAction = function(item) {
            $scope.calculateStr = operations[item.value]($scope.calculateStr);
        }
        
        $scope.controls = controls.data;
    }
]);
