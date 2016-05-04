(function() {
    'use strict';

    angular.module('app.auditacobros.router', [
        'app.auditacobros.controller'
    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('auditacobros', {
                url: '/auditacobros',
                template: '<auditacobroslist></auditacobroslist>'
            })
    };
})();

