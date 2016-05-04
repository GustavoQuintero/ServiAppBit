(function() {
    'use strict';

    angular
    .module('app.registro.controller', [])
    .controller('RegistroListCtrl', RegistroListCtrl);

    RegistroListCtrl.$inject = ['Registro'];

    function RegistroListCtrl(Registro) {
        var vm = this;
        vm.registroListCtrl = Registro.query();
    }



})();
