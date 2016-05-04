(function() {
    'use strict';
    angular
        .module('app.publicidad.services', [])
        .factory('Publicidad', Publicidad);

    Publicidad.$inject = ['$resource', 'BASEURL'];


    //Este servicio nos provee de los métodos GET POST PUT DELETE
    function Publicidad($resource, BASEURL) {
        return $resource(BASEURL + '/publicidad/:id', {
            id: '@id'
        });
    }

    //De igual manera los factory nos sirven para almacenar información
    //y que nos pueda servir en cualquier controlador o lugar de la aplicación
    //evitando de esta manera hacer variables globales.
})();