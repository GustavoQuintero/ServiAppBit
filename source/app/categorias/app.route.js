(function() {
    'use strict';

    angular.module('app.categorias.router', [
        'app.categorias.controller'
    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('categorias', {
                url: '/categorias',
                template: '<categoriaslist></categoriaslist>'
            })
            .state('categoriascreate', {
                url: '/categorias/create',
                template: '<categoriascreate></categoriascreate>'
            }).state('categoriasupdate', {
                url: '/categorias/update/:idTipoServicio',
                template: '<categoriasupdate></categoriasupdate>'
            });
    };
})();

