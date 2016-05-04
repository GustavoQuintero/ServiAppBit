(function() {
    'use strict';

    angular.module('app.publicidad.router', [
            'app.publicidad.controller'
        ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('publicidad', {
                url: '/publicidad',
                template: '<publicidad-list/>'
            })
            .state('publicidadcreate', {
                url: '/publicidad/create',
                template: '<publicidad-create/>'
            });
    };
})();