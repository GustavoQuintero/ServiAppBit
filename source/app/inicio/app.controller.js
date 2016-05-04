(function () {
    'use strict';

    angular.module('app.inicio.controller', [
    ])
    .controller('inicioCtrl', inicioCtrl);
     
    
    function inicioCtrl() {
        this.lenguajes = [
            {nombre: 'Java'},
            {nombre: 'Javascript'},
            {nombre: 'Python'}
        ]
    
    }
})();
