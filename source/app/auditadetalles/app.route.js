(function() {
    'use strict';

    angular.module('app.auditadetalles.router', [
        'app.auditadetalles.controller'
    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('auditadetallles', {
                url: '/auditadetalles',
                template: '<auditadetalleslist></auditadetalleslist>'
            })
    };
})();
