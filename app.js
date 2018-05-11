(function() {
    angular
        .module('myApp', [
            'ngRoute'
        ])
        .config(appConfig)
        .directive('jeProductos', jeProductos)
        .directive('jeItem', jeItem);
    
    function appConfig ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<je-productos></je-productos>'
            });
    }

    
    function jeProductos() {
        return {
            scope: {},
            templateUrl: 'components/productos/je-productos.html',
            controller: 'jeProductosController',
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
