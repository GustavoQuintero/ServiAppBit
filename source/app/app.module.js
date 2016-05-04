(function() {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ngResource',
        'angular.filter',
        'ngMaterial',
        'ngMessages',
        'angularUtils.directives.dirPagination',
        'satellizer',
        'ngFileUpload',
        //'templates',
        'app.config',
        'app.inicio',
        'app.footer',
        'app.header',
        'app.usuarios',
        'app.login',
        'app.servicios',
        'app.categorias',
        'app.registro',
        'app.perfil',
        'app.cuentas',
        'app.auditacobros',
        'app.auditadetalles',
        'app.auditafacturas',
        'app.publicidad',
        'app.imagenes'
        //'app.on-read-img.directive'
        //'app.calificaciones'
    ]);

})();
