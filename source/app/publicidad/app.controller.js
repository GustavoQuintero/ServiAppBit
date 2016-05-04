(function(){
  'use strict';

  angular
  .module('app.publicidad.controller', [])
  .controller('PublicidadCreateCtrl', PublicidadCreateCtrl)
  .controller('PublicidadListCtrl', PublicidadListCtrl);
  PublicidadListCtrl.$inject = ['Publicidad'];
  function PublicidadListCtrl(Publicidad) {
    var vm = this;
    vm.publicidadList = Publicidad.query();
  }
   PublicidadCreateCtrl.$inject = ['$location', '$mdToast', 'Publicidad'];

    function PublicidadCreateCtrl($location, $mdToast, Publicidad) {
        var vm = this;
        vm.create = create;
        vm.loadImagen = loadImagen;
        
       function create() {
            Publicidad.save(vm.publicidad, function() {
                $location.path('/publicidad');
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Se ha  guardado la publicidad...')
                    .position('bottom right'));
            });
        }
        
        function loadImagen($fileContent) {
            vm.publicidad.imagenPublicidad = $fileContent;
        }
    }

})();

