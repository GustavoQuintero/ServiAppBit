(function () {
    'use strict';
    angular
        .module('app.servicios.services', [])
        .factory('Servicios', Servicios)
        .factory('tiposServicios', tiposServicios);
    //.factory('idUsuario', idUsuario);

    Servicios.$inject = ['$resource', 'BASEURL'];


    //Este servicio nos provee de los métodos GET POST PUT DELETE
    function Servicios($resource, BASEURL) {
        return $resource(BASEURL + '/servicios/:idServicio', {
            idServicio: '@idServicio'
        }, {
                'update': {
                    method: 'PUT'
                },
                findByIdUsuario: {
                    url: BASEURL + '/servicios/idUsuario/:query',
                    method: 'GET',
                    isArray: true,
                    params: {
                        query: '@query'
                    }
                
            },
               findById: {
                    url: BASEURL + '/servicios/idServicio/:query',
                    method: 'GET',
                    isArray: true,
                    params: {
                        query: '@query'
                    }
                }
            })
    }
        
    
  
    /* idUsuario.$inject = ['$resource', 'BASEURL'];
     findById: {
                    url: BASEURL + '/servicios/idServicio/:query',
                    method: 'GET',
                    isArray: true,
                    params: {
                        query: '@query'
                    }
                }
                'Servicios': {
                    method: 'GET'
                }
     function idUsuario($resource, BASEURL) {
         return $resource(BASEURL + '/servicios/idUsuario/:idUsuario',{
             idUsuario: '@idUsuario'
         })
     }*/

    tiposServicios.$inject = ['$resource', 'BASEURL'];

    function tiposServicios($resource, BASEURL) {
        return $resource(BASEURL + '/tiposServicios/:idTipoServicio', {
            idTipoServicio: '@idTipoServicio'
        }, {
                queryByNombre: {
                    url: BASEURL + '/categorias/nombre/:query',
                    method: 'GET',
                    isArray: true,
                    params: {
                        query: '@query'
                    }
                }
            })
    }
    
    /*tiposServicios.$inject = ['$resource','BASEURL'];
   
   function tiposServicios($resource, BASEURL) {
       return $resource(BASEURL + '/categorias');
   }*/
    //De igual manera los factory nos sirven para almacenar información
    //y que nos pueda servir en cualquier controlador o lugar de la aplicación
    //evitando de esta manera hacer variables globales.
})();