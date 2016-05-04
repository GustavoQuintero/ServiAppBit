(function() {
    'use strict';
    angular.module('app.auditadetalles.services', [])
        .factory('Auditadetalles', Auditadetalles);

    Auditadetalles.$inject = ['$resource', 'BASEURL'];

    function Auditadetalles($resource, BASEURL) {
        return $resource(BASEURL + '/auditadetalles/:idCategoria', {
            idCategoria: '@idCategoria'
        }, {
            'update': {
                method: 'PUT'
            }
        })
    }
})();