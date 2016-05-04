(function () {
    'use strict';

    angular.module('app.perfil.directivas', [

    ])
    .directive('perfil', perfil);

    function perfil() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/perfil/perfil.html',
            controller: 'PerfilListCtrl',
            controllerAs: 'vm'
        }
    }
    
    
})();