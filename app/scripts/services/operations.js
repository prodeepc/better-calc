'use strict';

/**
  * @ngdoc service
  * @name betterCalcApp.operations
  * @description
  * # operations
  * Service in the betterCalcApp.
 **/
angular.module('betterCalcApp')
    .service('operations', function () {
        return {
            clear: function(str) {
                console.log('clear');
                return "";
            },
            trigger: function(arr) {
                var result = null;
                arr.forEach(function(val, index) {
                    if(val.type === '+') {
                        result += parseInt(val.value);
                    } else if(result === null) {
                        result = parseInt(val.value);
                    } else if(val.type === '-') {
                        result -= parseInt(val.value);
                    } else if(val.type === 'x') {
                        result = parseInt(result) * parseInt(val.value);
                    } else if(val.type === '÷') {
                        result = parseInt(result) / parseInt(val.value);
                    }
                });
                return result;
            },
            calculate: function(str) {
                str = String(str);
                console.log('calculate triggered');
                console.log(str);
                var evalStr = str.replace('+', '?+')
                .replace('-', '?-')
                .replace('x', '?x')
                .replace('÷', '?÷'),
                    evalArray = evalStr.split('?');
                var reqObj = [];
                evalArray.forEach(function(val, ind) {
                    if(val.indexOf('÷') !== -1) {
                        reqObj.push({type: '÷', value: val.replace('-', '').replace('x', '').replace('÷', '').replace('+', ''), place: ind});
                    } else if(val.indexOf('x') !== -1) {
                        reqObj.push({type: 'x', value: val.replace('-', '').replace('x', '').replace('÷', '').replace('+', ''), place: ind});
                    } else if (val.indexOf('+') !== -1) {
                        reqObj.push({type: '+', value: val.replace('-', '').replace('x', '').replace('÷', '').replace('+', ''), place: ind});
                    } else if (val.indexOf('-') !== -1) {
                        reqObj.push({type: '-', value: val.replace('-', '').replace('x', '').replace('÷', '').replace('+', ''), place: ind});
                    } else {
                        reqObj.push({type: '+', value: val.replace('-', '').replace('x', '').replace('÷', '').replace('+', ''), place: ind});
                    }
                });
                var result = this.trigger(reqObj);
                console.log(result);
                return null == result ? 0 : result;
            }
        }
    }
);
