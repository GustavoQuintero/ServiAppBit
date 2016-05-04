(function () {
    'use strict';

    angular.module('app.publicidad.directivas', [

    ]).directive('publicidadList', publicidadList)
    .directive('publicidadCreate', publicidadCreate);

    function publicidadList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/publicidad/list.html',
            controller: 'PublicidadListCtrl',
            controllerAs: 'vm'
        }
    }

    function publicidadCreate(){
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/publicidad/create.html',
            controller: 'PublicidadCreateCtrl',
            controllerAs: 'vm'
        }
    }
})();