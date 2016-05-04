(function() {
    'use strict';

    angular
    .module('app.perfil.controller', [])
    .controller('PerfilListCtrl', PerfilListCtrl);

    PerfilListCtrl.$inject = ['Perfil'];

    function PerfilListCtrl(Perfil) {
        var vm = this;
        vm.perfilList = Perfil.query();
    }

   

})();
