(function () {
    'use strict';

    angular.module('app.servicios.directivas', [

    ]).directive('serviciosList', serviciosList)
        .directive('serviciosCreate', serviciosCreate)
        .directive('serviciosUsuarios', serviciosUsuarios)
        .directive('serviciosInfor', serviciosInfor)
        .directive('serviciosupdate', serviciosUpdate);

    function serviciosList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/servicios/list.html',
            controller: 'ServiciosListas',
            controllerAs: 'vm'
        }
    } 

    function serviciosInfor() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/servicios/servicio.html',
            controller: 'ServiciosListasCtrl',
            controllerAs: 'vm'
        }
    }


    function serviciosCreate() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/servicios/create.html',
            controller: 'ServiciosCreateCtrl',
            controllerAs: 'vm'
        }
    }
    function serviciosUsuarios() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/servicios/serviciosUsuarios.html',
            controller: 'ServiciosListCtrl',
            controllerAs: 'vm'
        }
    }

    function serviciosUpdate() {
        return {
            scope: {},
            templateUrl: 'app/servicios/update.html',
            restrict: 'EA',
            controller: 'ServiciosUpdateCtrl',
            controllerAs: 'vm'
        }
    }
})();