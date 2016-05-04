(function() {
    'use strict';

    angular.module('app.cuentas.router', [
        'app.cuentas.controller'
    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('cuentas', {
                url: '/cuentas',
                template: '<cuentaslist></cuentaslist>'
            });
    };
})();

