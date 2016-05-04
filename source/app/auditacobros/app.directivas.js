(function () {
    'use strict';

    angular.module('app.auditacobros.directivas', [

    ]).directive('auditacobroslist', auditacobrosList);

    function auditacobrosList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/auditacobros/list.html',
            controller: 'auditacobrosListCtrl',
            controllerAs: 'vm'
        }
    }
})();

