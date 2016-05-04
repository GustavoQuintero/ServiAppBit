(function() {
    'use strict';

    angular.module('app.auditafacturas.controller', [])
        .controller('auditafacturasListCtrl', auditafacturasListCtrl);


    auditafacturasListCtrl.$inject = ['Auditafacturas'];

    function auditafacturasListCtrl(Auditafacturas) {
        var vm = this;
        vm.auditafacturasList = Auditafacturas.query();
    }


})();