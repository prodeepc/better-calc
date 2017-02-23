'use strict';

/**
* @ngdoc function
* @name betterCalcApp.controller:CalcctrlCtrl
* @description
* # CalcctrlCtrl
* Controller of the betterCalcApp
*/
angular.module('betterCalcApp')
.controller('CalcCtrl', ['$scope', function ($scope) {
    $scope.controls = {
        scientifics: [ '-', '-', '-', 'Inv', 'sin', 'In', 'π', 'cos', 'log', 'e', 'tan', '√', 'Ans', 'Exp', 'xy' ],
        digits: ['(', ')', '%', 9,8,7,6,5,4,3,2,1,0,'.', '='],
        operators: ['AC', '÷', 'x', '-', '+']
    };
}]);
