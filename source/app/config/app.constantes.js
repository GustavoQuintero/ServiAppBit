(function () {
    'use strict';

    angular.module('app.config', [
    ]).constant('BASEURL',

    'http://localhost:48682/serviappbit/webresources')
    //Modificar la url del web services.!!!
    //En este módulo se pueden declarar y asignar todas las constantes
    //que se usarán en la aplicación.
    .config(configure);

    configure.$inject = ['$authProvider', 'BASEURL'];
    function configure($authProvider, BASEURL) {
      // Parametros de configuración Satellizer
        $authProvider.loginUrl = BASEURL + '/auth/login';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'Portafolio';
    }

})();
