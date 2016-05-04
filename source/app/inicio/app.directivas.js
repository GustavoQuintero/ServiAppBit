(function () {
    'use strict';

    angular.module('app.inicio.directivas', [

    ]).directive('iniciolist', iniciolist)
    
    function iniciolist() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/inicio/inicio.html',
            controller: 'inicioCtrl',
            controllerAs: 'vm'
        }
    }
    
})();