(function () {
    'use strict';

    angular.module('app.perfil.router', [
        'app.perfil.controller'
    ])
        .config(configure);
    
    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('perfil' ,{
              url: '/perfil',
              template: '<perfil>'
          });
            
    };
})();