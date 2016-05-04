(function () {
    'use strict';

    angular.module('app.auditacobros.controller', [])
        .controller('auditacobrosListCtrl', auditacobrosListCtrl);


    auditacobrosListCtrl.$inject = ['Auditacobros'];

    function auditacobrosListCtrl(Auditacobros) {
        var vm = this;
        vm.auditacobrosList = Auditacobros.query();
    }

})();
