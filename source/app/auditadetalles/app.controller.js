(function() {
    'use strict';

    angular.module('app.auditadetalles.controller', [])
        .controller('auditadetallesListCtrl', auditadetallesListCtrl);


     auditadetallesListCtrl.$inject = ['Auditadetalles'];

    function auditadetallesListCtrl(Auditadetalles) {
        var vm = this;
        vm.auditadetallesList = Auditadetalles.query();
    }

})();