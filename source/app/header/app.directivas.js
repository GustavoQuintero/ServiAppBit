(function () {
    'use strict';

    angular.module('app.header.directivas', [

    ]).directive('encabezado', encabezado);

    function encabezado() {
        return {
            scope: {},
            templateUrl: 'app/header/header.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        }
    }
})();
