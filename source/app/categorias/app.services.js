(function() {
    'use strict';
    angular.module('app.categorias.services', [])
        .factory('Categorias', Categorias);

    Categorias.$inject = ['$resource', 'BASEURL'];

    function Categorias($resource, BASEURL) {
        return $resource(BASEURL + '/categorias/:idTipoServicio', {
            idTipoServicio: '@idTipoServicio'
        }, {
            'update': {
                method: 'PUT'
            }
        })
    }
})();
