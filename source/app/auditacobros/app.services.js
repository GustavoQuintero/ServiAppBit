(function() {
    'use strict';
    angular.module('app.auditacobros.services', [])
        .factory('Auditacobros', Auditacobros);

    Auditacobros.$inject = ['$resource', 'BASEURL'];

    function Auditacobros($resource, BASEURL) {
        return $resource(BASEURL + '/auditacobros/:id', {
            idCategoria: '@idCategoria'
        }, {
            'update': {
                method: 'PUT'
            }
        })
    }
})();
