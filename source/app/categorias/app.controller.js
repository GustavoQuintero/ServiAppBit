(function() {
    'use strict';

    angular.module('app.categorias.controller', []).controller('categoriasCreateCtrl', categoriasCreateCtrl)
        .controller('categoriasListCtrl', categoriasListCtrl)
        .controller('categoriasUpdateCtrl', categoriasUpdateCtrl);

    categoriasCreateCtrl.$inject = ['$location', '$mdToast', 'Categorias'];

    function categoriasCreateCtrl($location, $mdToast, Categorias) {
        this.create = function() {
            Categorias.save(this.categoria)
        }
    }

    categoriasListCtrl.$inject = ['$location', 'Categorias'];

    function categoriasListCtrl($location, Categorias) {
        this.query = {
            order: 'name',
            limit: 5,
            page: 1
        };
        this.categorias = Categorias.query();
    }

    categoriasUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast', 'Categorias'];

    function categoriasUpdateCtrl($stateParams, $location, $mdToast, Categorias) {
        this.id = $stateParams.idTipoServicio;
        this.categoria = Categorias.get({
            idTipoServicio: this.id
        });


        this.update = function() {
            Categorias.update(this.categoria);
    }
    }

})();
