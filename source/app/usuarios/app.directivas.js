(function () {
    'use strict';

    angular.module('app.usuarios.directivas', [])
    .directive('usuarioslist', usuariosList)
    .directive('usuarioscreate', usuariosCreate)
    .directive('usuariosusuario', usuariosUsuario)
    .directive('usuariosupdate', usuariosUpdate);

    function usuariosList() {
        return {
            scope: {},
            templateUrl: 'app/usuarios/list.html',
            restrict: 'EA',
            controller: 'usuariosListCtrl',
            controllerAs: 'vm'
        }
    }

    function usuariosUsuario() {
        return {
            scope: {},
            templateUrl: 'app/usuarios/usuario.html',
            restrict: 'EA',
            controller: 'usuariosListas',
            controllerAs: 'vm'
        }
    }

    function usuariosCreate(){
        return {
            scope: {},
            templateUrl: 'app/usuarios/create.html',
            restrict: 'EA',
            controller: 'usuariosCreateCtrl',
            controllerAs: 'vm'
        }
    }

    function usuariosUpdate(){
        return {
            scope: {},
            templateUrl: 'app/usuarios/update.html',
            restrict: 'EA',
            controller: 'usuariosUpdateCtrl',
            controllerAs: 'vm'
        }
    }
})();