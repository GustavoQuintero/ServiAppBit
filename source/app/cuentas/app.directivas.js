(function () {
    'use strict';

    angular.module('app.cuentas.directivas', [

    ]).directive('cuentaslist', cuentasList);
    
    function cuentasList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/cuentas/cuenta.html',
			controller: 'cuentasListCtrl',
            controllerAs: 'vm'
        }
    }
})();