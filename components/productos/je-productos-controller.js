(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('jeProductosController', jeProductosController);

    jeProductosController.$inject = ['DataService'];


    function jeProductosController(DataService) {
        console.log('jeProductosController');
        this.productos = DataService.getData();
    }
})();
