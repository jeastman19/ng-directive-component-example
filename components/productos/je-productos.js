(function() {
    angular
        .module('myApp')
        .directive('jeProductos', jeProductos)
    
    jeProductos.$inject = [];
    
    function jeProductos() {
        return {
            scope: {},
            templateUrl: 'components/productos/je-productos.html',
            controller: 'jeProductosController',
            controllerAs: 'ct'
        }
    }

})();
