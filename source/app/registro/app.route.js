(function () {
    'use strict';

    angular.module('app.registro.router', [
        'app.registro.controller'
    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('registro', {
            url: '/registro',
            template: '<registro-list/>'
        });
    };
})();
