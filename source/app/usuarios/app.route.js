(function() {
    'use strict';

    angular.module('app.usuarios.router', [])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('usuarios', {
                url: '/usuarios',
                template: '<usuarioslist/>'
            })
            .state('usuarioscreate', {
                url: '/usuarios/create',
                template: '<usuarioscreate/>'
            }).state('usuariosupdate', {
                url: '/usuarios/update/:idUsuario',
                template: '<usuariosupdate/>'
            })
            .state('usuariosusuario', {
                url: '/usuarios/usuario',
                template: '<usuariosusuario/>'
            });
    };
})();