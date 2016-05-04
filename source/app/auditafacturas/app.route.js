(function() {
    'use strict';

    angular.module('app.auditafacturas.router', [
        'app.auditafacturas.controller'
    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('auditafacturas', {
                url: '/auditafacturas',
                template: '<auditafacturaslist></auditafacturaslist>'
            })
    };
})();
