(function() {
    'use strict';

    angular
        .module('myApp')
        .service('DataService', DataService);

    DataService.$inject = [];

    function DataService () {
        return {
            getData: getData
        }

        function getData() {
            var datos = [
                { titulo: 'Producto 1', precio: 2},
                { titulo: 'Producto 2', precio: 1.5},
                { titulo: 'Producto 3', precio: 4.2},
                { titulo: 'Producto 4', precio: 3},
                { titulo: 'Producto 5', precio: 2.5},
                { titulo: 'Producto 5', precio: 2.5}
            ];

            return datos;
        }
    }
})();
