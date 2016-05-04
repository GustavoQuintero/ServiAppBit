(function() {
    'use strict';
    angular.module('app.usuarios.services', [])
        .factory('Usuarios', Usuarios)
        .factory('Ciudades', Ciudades)
        .factory('tipoDocumentos', tipoDocumentos)
        .factory('Roles', Roles);

    Usuarios.$inject = ['$resource', 'BASEURL'];

    function Usuarios($resource, BASEURL) {
        return $resource(BASEURL + '/usuarios/:idUsuario', {
            idUsuario: '@idUsuario'
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

    Ciudades.$inject = ['$resource', 'BASEURL'];

    function Ciudades($resource, BASEURL) {
        return $resource(BASEURL + '/ciudades/:idCiudad', {
            idCiudad: '@idCiudad'
        },{
          queryByNombre: {
            url: BASEURL + '/ciudades/nombre/:query',
            method: 'GET',
            isArray: true,
            params: {
              query: '@query'
            }
          }
        })
    }
     tipoDocumentos.$inject = ['$resource', 'BASEURL'];

    function tipoDocumentos($resource, BASEURL) {
        return $resource(BASEURL + '/tipoDocumentos/:idTipoDocumento', {
            idTipoDocumento: '@idTipoDocumento'
        },{
          queryByNombre: {
            url: BASEURL + '/documentos/nombre/:query',
            method: 'GET',
            isArray: true,
            params: {
              query: '@query'
            }
          }
        })
    }
    
    Roles.$inject = ['$resource','BASEURL'];
    
    function Roles($resource, BASEURL) {
        return $resource(BASEURL + '/roles');
    }


})();