(function() {
    'use strict';
    angular.module('app.usuarios.services', [])
        .factory('calificacion', Calificacion);

    Calificacion.$inject = ['$resource', 'BASEURL'];

    function Calificacion($resource, BASEURL) {
        return $resource(BASEURL + '/calificacion/:idCalificacion', {
            idCalificacion: '@idCalificacion'
        }, {
            'update': {
                method: 'PUT'
            },
            findByIdUsuario: {
                    url: BASEURL + '/usuarios/idUsuario/:query',
                    method: 'GET',
                    isArray: true,
                    params: {
                        query: '@query'
                    }
                }
            })
    }
    })();