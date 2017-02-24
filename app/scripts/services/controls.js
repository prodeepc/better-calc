'use strict';

/**
* @ngdoc service
* @name betterCalcApp.controls
* @description
* # controls
* Service in the betterCalcApp.
*/
angular.module('betterCalcApp')
.service('controls', function () {
    return {
        data: {
            scientifics: [
                {label: '-', value: ''},
                {label: '-', value: ''},
                {label: '-', value: ''},
                {label: 'Inv', value: ''},
                {label: 'sin', value: ''},
                {label: 'In', value: ''},
                {label: 'π', value: ''},
                {label: 'cos', value: ''},
                {label: 'log', value: ''},
                {label: 'e', value: ''},
                {label: 'tan', value: ''},
                {label: '√', value: ''},
                {label: 'Ans', value: ''},
                {label: 'Exp', value: ''},
                {label: 'xy', value: ''}
            ],
            digits: [
                {label: '(', value: '('},
                {label: ')', value: ')'},
                {label: '%', value: '%'},
                {label: '9', value: '9'},
                {label: '8', value: '8'},
                {label: '7', value: '7'},
                {label: '6', value: '6'},
                {label: '5', value: '5'},
                {label: '4', value: '4'},
                {label: '3', value: '3'},
                {label: '2', value: '2'},
                {label: '1', value: '1'},
                {label: '0', value: '0'},
                {label: '.', value: '.'},
                {label: '=', value: '='}
            ],
            operators: [
                {label: 'AC', value: 'clear'},
                {label: '÷', value: 'divide'},
                {label: 'x', value: 'multiply'},
                {label: '-', value: 'substract'},
                {label: '+', value: 'addition'}
            ]
        }
    }
    // AngularJS will instantiate a singleton by calling "new" on this function
});
