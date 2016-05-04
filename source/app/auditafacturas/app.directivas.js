(function () {
    'use strict';

    angular.module('app.auditafacturas.directivas', [

    ]).directive('auditafacturaslist', auditafacturasList);

    function auditafacturasList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/auditafacturas/list.html',
            controller: 'auditafacturasListCtrl',
            controllerAs: 'vm'
        }
    }
})();