(function () {
    'use strict';

    angular.module('app.calificaciones.directivas', [

    ]).directive('calificacioneslist', calificacionesList)
        .directive('calificacionescreate', calificacionesCreate);

    function calificacionesList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/calificaciones/calificaciones.html',
            controller: 'calificacionesListCtrl',
            controllerAs: 'vm'
        }
    }

    function calificacionesCreate() {
        return {
            scope: {},
            templateUrl: 'app/calificaciones/calificaciones.html',
            restrict: 'EA',
            controller: 'calificacionesCreateCtrl',
            controllerAs: 'vm'
        }
    }
})();