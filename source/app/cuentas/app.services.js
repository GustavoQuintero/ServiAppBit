(function() {
    'use strict';
    angular.module('app.cuentas.services', [])
        .factory('Cuentas', Cuentas);

    Cuentas.$inject = ['$resource', 'BASEURL'];

    function Cuentas($resource, BASEURL) {
        return $resource(BASEURL + '/cuentas/:idCuenta', {
            idCuenta: '@idCuenta'
        }, {
            'update': {
                method: 'PUT'
            }
        })
    }
})();
