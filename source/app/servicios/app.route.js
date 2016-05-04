(function() {
    'use strict';

    angular.module('app.servicios.router', [
            'app.servicios.controller'
        ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('servicios', {
                url: '/servicios',
                template: '<servicios-list/>'
            })
            .state('servicioscreate', {
                url: '/servicios/create',
                template: '<servicios-create/>'
            })
            .state('serviciosusuarios', {
                url: '/servicios/serviciosUsuarios',
                template: '<servicios-Usuarios/>'
            })
            .state('serviciosupdate', {
                url: '/servicios/update/:idServicio',
                template: '<serviciosupdate/>'
            })
            .state('serviciosperfil', {
                url: '/servicios/servicio',
                template: '<servicios-servicio/>'
            });
    };
})();