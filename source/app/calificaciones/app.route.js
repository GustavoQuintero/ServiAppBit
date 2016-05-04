(function() {
    'use strict';

    angular.module('app.calificaciones.router', [
            'app.calificaciones.controller'
        ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('calificaciones', {
                url: '/calificaciones',
                template: '<calificaciones-list/>'
            });
    };
})();