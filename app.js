(function() {
    angular
        .module('myApp', [
            'ngRoute'
        ])
        .config(appConfig);
    
    function appConfig ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<je-productos></je-productos>'
            });
    }
    
})();
