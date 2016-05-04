(function() {
    'use strict';

    angular.module('app.cuentas.controller', [])
        .controller('cuentasListCtrl', cuentasListCtrl);



    cuentasListCtrl.$inject = ['$location', 'Cuentas'];

    function cuentasListCtrl($location, Cuentas) {
        this.query = {
            order: 'name',
            limit: 5,
            page: 1
        };
        this.cuentas = Cuentas.query();
    }

})();
