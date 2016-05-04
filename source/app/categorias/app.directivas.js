(function () {
    'use strict';

    angular.module('app.categorias.directivas', [

    ]).directive('categoriaslist', categoriasList)
    .directive('categoriascreate', categoriasCreate)
    .directive('categoriasupdate', categoriasUpdate);

    function categoriasList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/categorias/list.html',
            controller: 'categoriasListCtrl',
            controllerAs: 'vm'
        }
    }

    function categoriasCreate(){
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/categorias/create.html',
            controller: 'categoriasCreateCtrl',
            controllerAs: 'vm'
        }
    }

    function categoriasUpdate(){
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/categorias/update.html',
            controller: 'categoriasUpdateCtrl',
            controllerAs: 'vm'
        }
    }
})();

