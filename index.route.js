(function() {
    'use strinct';

    angular
        .module('myApp')
        .config(appConfig);
    
    appConfig.$inject = ['$routeProvider'];

    function appConfig ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<je-productos></je-productos>'
            });
    }
    
})();
