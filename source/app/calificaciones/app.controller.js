(function () {
    'use strict';

    angular.module('app.calificaciones.controller', [
    ])
    .controller('calificacionesCreateCtrl', CalificacionesCreateCtrl)
    .controller('calificacionesListCtrl', CalificacionesListCtrl); 
    CalificacionesListCtrl.$inject = ['Calificaciones'];
    function CalificacionesListCtrl(Calificaciones) {
        var vm = this;
        vm.calificacionesList = Calificaciones.query();
    }
    
    CalificacionesCreateCtrl.$inject = ['$location', '$mdToast', 'Calificaciones'];
    function CalificacionesCreateCtrl($location, $mdToast, Calificaciones) {
        var vm = this;
        
      
        function create(){
            Calificaciones.save(vm.calificacion, function() {
                $location.path('/Calificaciones');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Se ha  guardado el calificacion...')
                    .position('bottom right'));
            }, function(error) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(error.status + ' ' + error.data)
                    .position('bottom right'));
            });
        }
        
    
    }

})();

     
    
    