(function() {
    'use strict';

    angular.module('app.usuarios.controller', []).controller('usuariosCreateCtrl', usuariosCreateCtrl)
        .controller('usuariosListCtrl', usuariosListCtrl)
        .controller('usuariosUpdateCtrl', usuariosUpdateCtrl)
        .controller('usuariosListas',usuariosListas);

    usuariosCreateCtrl.$inject = ['$location', '$mdToast', 'Usuarios', 'Ciudades','tipoDocumentos','Roles'];

    function usuariosCreateCtrl($location, $mdToast, Usuarios, Ciudades, tipoDocumentos, Roles) {
        var vm = this;

        vm.create = create;
        vm.queryCiudades = queryCiudades;
        vm.roles = Roles.query();
        vm.queryTipoDocumentos = queryTipoDocumentos;
        vm.dateMax = new Date();
        vm.dateMax.setFullYear(vm.dateMax.getFullYear() - 18);
        vm.loadImagen = loadImagen;

        function create() {
            Usuarios.save(vm.usuario, function() {
                $location.path('/usuarios');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Se ha  guardado el Usuario...')
                    .position('bottom right'));
            }, function(error) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(error.status + ' ' + error.data)
                    .position('bottom right'));
            });
        }

        function queryCiudades(str) {
            return Ciudades.queryByNombre({
                query: str
            });
        }
        function queryTipoDocumentos(str) {
            return tipoDocumentos.queryByNombre({
                query: str
            });
        }
        
        function loadImagen($fileContent) {
            vm.publicidad.fotoPerfil = $fileContent;
        }

    }

    usuariosListCtrl.$inject = ['$location', 'Usuarios'];

    function usuariosListCtrl($location, Usuarios) {
        var vm = this;
        vm.query = {
            limit: 15,
            page: 1
        };
        vm.usuarios = Usuarios.query();

    }

    usuariosListas.$inject = ['Usuarios', '$auth'];
    function usuariosListas(Usuarios, $auth) {
        var vm = this;
        vm.usuarioslist = [];
        
        vm.usuarioslist = Usuarios.findByIdUsuario({
            query: $auth.getPayload().id
        });
    }
    

    usuariosUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast', 'Usuarios', 'Ciudades'];

    function usuariosUpdateCtrl($stateParams, $location, $mdToast, Usuarios, Ciudades) {
        var vm = this;
        vm.queryCiudades = queryCiudades;
        this.id = $stateParams.idUsuario;
        this.usuario =  Usuarios.get({
            idUsuario: this.id
        });

        this.update = function() {
            Usuarios.update(this.usuario);
        }
        
        
        function queryCiudades(str) {
            return Ciudades.queryByNombre({
                query: str
            });
        }
    }

    getCiudades.$inject = ['Ciudades'];

    function getCiudades(Ciudades) {
        return Ciudades.query();
    }
     getTipoDocumentos.$inject = ['tipoDocumentos'];

    function getTipoDocumentos(tipoDocumentos) {
        return tipoDocumentos.query();
    }

})();
