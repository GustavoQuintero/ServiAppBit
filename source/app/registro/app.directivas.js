(function () {
    'use strict';

    angular.module('app.registro.directivas', [

    ])
    .directive('registroList', registroList);

    function registroList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/registro/list.html',
            controller: 'RegistroListCtrl',
            controllerAs: 'vm'
        }
    }


})();
