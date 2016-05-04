(function () {
    'use strict';

    angular.module('app.inicio.route', [
         'app.inicio.controller'
    ])
        .config(configure);
    
    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
             .state('inicio', {
                url: '/',
                template: '<iniciolist></iniciolist>'
            })
    };
})();
