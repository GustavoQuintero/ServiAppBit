(function() {
    'use strict';
    angular.module('app.auditafacturas.services', [])
        .factory('Auditafacturas', Auditafacturas);

    Auditafacturas.$inject = ['$resource', 'BASEURL'];

    function Auditafacturas($resource, BASEURL) {
        return $resource(BASEURL + '/auditafactura/:idCategoria', {
            idCategoria: '@idCategoria'
        }, {
            'update': {
                method: 'PUT'
            }
        })
    }
})();