(function() {
    angular
        .module('myApp', ['ngRoute'])
        .config(appConfig)
        .controller('MyController', MyController)
        .directive('jeProductos', jeProductos)
        .directive('jeItem', jeItem);
    
    function appConfig ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<je-productos></mi-directiva>'
            });
    }

    MyController.$inject = ['DataService'];

    function MyController (DataService) {
        this.productos = DataService.getData();
    }

    function jeProductos() {
        return {
            scope: {},
            templateUrl: 'components/productos/je-productos.html',
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
