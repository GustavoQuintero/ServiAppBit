(function () {
    'use strict';

    angular
        .module('app.servicios.controller', [])
        .controller('ServiciosCreateCtrl', ServiciosCreateCtrl)
        .controller('ServiciosListCtrl', ServiciosListCtrl)
        .controller('ServiciosListas', ServiciosListas)
        .controller('ServiciosUpdateCtrl', ServiciosUpdateCtrl)
        .controller('ServiciosListasCtrl', ServiciosListasCtrl);

    ServiciosListasCtrl.$inject = ['Servicios', '$stateParams'];
    function ServiciosListasCtrl(Servicios, $stateParams) {
        var vm = this;
        vm.serviciosList = Servicios.findById({
            query: Servicios.idServicio().id
        });
    }
       
    //vm.serviciosList = Servicios.findById({
    //query: Servicios.idServicio().id
    //this.id = $stateParams.idServicio;
    //this.servicio = Servicios.get({
    //idServicio: this.id
    //});
    // this.Servicios = function () {
    // Servicios.Servicios(this.servicio);
    //}
    //});
    //}

    ServiciosListas.$inject = ['Servicios', '$stateParams'];
    function ServiciosListas(Servicios, $stateParams) {
        var vm = this;
        vm.serviciosList = Servicios.query();
    }

    ServiciosListCtrl.$inject = ['Servicios', '$auth'];
    function ServiciosListCtrl(Servicios, $auth) {
        var vm = this;
        vm.serviciosList = [];

        console.log($auth.getPayload().id);

        vm.serviciosList = Servicios.findByIdUsuario({
            query: $auth.getPayload().id
        });
    }
    ServiciosCreateCtrl.$inject = ['$location', '$mdToast', 'Servicios', 'tiposServicios'];
    function ServiciosCreateCtrl($location, $mdToast, Servicios, tiposServicios) {
        var vm = this;

        vm.create = create;
        vm.queryTiposServicios = queryTiposServicios;
        vm.tiposServicios = tiposServicios.query();

        function create() {
            Servicios.save(vm.servicio, function () {
                $location.path('/servicios');
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Se ha  guardado el servicio...')
                        .position('bottom right'));
            }, function (error) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(error.status + ' ' + error.data)
                        .position('bottom right'));
            });
        }

        function queryTiposServicios(str) {
            return tiposServicios.queryByNombre({
                query: str
            });
        }
    }

    /*function getTiposServicios(tiposServicios) {
        return tiposServicios.query();
    }*/

    ServiciosUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast', 'Servicios', 'tiposServicios'];

    function ServiciosUpdateCtrl($stateParams, $location, $mdToast, Servicios, tiposServicios) {
        /*var vm = this;
        vm.tiposServicios = tiposServicios.query()*/
        this.id = $stateParams.idServicio;
        this.servicio = Servicios.get({
            idServicio: this.id
        });

        this.update = function () {
            Servicios.update(this.servicio);
        }
        /* function queryTiposServicios(str) {
             return tiposServicios.queryByNombre({
                 query: str
             });
         }*/

        /* function getTiposServicios(tiposServicios) {
             return tiposServicios.query();
         }*/
    }
})();