(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('jeItem', jeItem);

    function jeItem() {
        return {
            scope: {
                data: '='
            },
            templateUrl: 'components/item/je-item.html'
        }
    }

})();