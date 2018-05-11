(function() {
    angular
        .module('myApp', [
            'ngRoute'
        ])
        .config(appConfig)
        .directive('jeItem', jeItem);
    
    function appConfig ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<je-productos></je-productos>'
            });
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
