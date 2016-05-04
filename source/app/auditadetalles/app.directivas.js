(function () {
    'use strict';

    angular.module('app.auditadetalles.directivas', [

    ]).directive('auditadetalleslist', auditadetallesList);

    function auditadetallesList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/auditadetalles/list.html',
            controller: 'auditadetallesListCtrl',
            controllerAs: 'vm'
        }
    }
})();