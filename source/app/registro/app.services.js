(function () {
    'use strict';
    angular
      .module('app.registro.services', [])
      .factory('Registro', Registro);

    Registro.$inject = ['$resource', 'BASEURL'];


    //Este servicio nos provee de los métodos GET POST PUT DELETE
    function Registro($resource, BASEURL) {
        return $resource(BASEURL + '/registro/:idRegistro', {
          id:'@idRegistro'
        });

    }

    //De igual manera los factory nos sirven para almacenar información
    //y que nos pueda servir en cualquier controlador o lugar de la aplicación
    //evitando de esta manera hacer variables globales.


})();
