(function () {
    'use strict';
    angular
      .module('app.perfil.services', [])
      .factory('Perfil',Perfil);

    Perfil.$inject = ['$resource', 'BASEURL'];


    //Este servicio nos provee de los métodos GET POST PUT DELETE 
    function Perfil($resource, BASEURL) {
        return $resource(BASEURL + '/perfil/:perfilId', {
          id:'@_id'   
        });
    
    }
    
    //De igual manera los factory nos sirven para almacenar información
    //y que nos pueda servir en cualquier controlador o lugar de la aplicación
    //evitando de esta manera hacer variables globales.
    
    
})();