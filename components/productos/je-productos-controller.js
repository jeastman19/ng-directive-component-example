(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('jeProductosController', jeProductosController);

    jeProductosController.$inject = ['DataService'];


    function jeProductosController(DataService) {
        this.productos = DataService.getData();
    }
})();
