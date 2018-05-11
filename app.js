(function() {
    angular
        .module('myApp', ['ngRoute'])
        .config(appConfig)
        .controller('MyController', MyController)
        .service('MyService', MyService)
        .directive('jeProductos', jeProductos)
        .directive('jeItem', jeItem);
    
    function appConfig ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<je-productos></mi-directiva>'
            });
    }

    function MyController (MyService) {
        this.productos = MyService.getData();
    }

    function MyService () {
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

    function jeProductos() {
        return {
            scope: {},
            templateUrl: 'tpl/listado.html',
            controller: 'MyController',
            controllerAs: 'my'
        }
    }

    function jeItem() {
        return {
            scope: {
                data: '='
            },
            templateUrl: 'tpl/je-item.html'
        }
    }

})();
