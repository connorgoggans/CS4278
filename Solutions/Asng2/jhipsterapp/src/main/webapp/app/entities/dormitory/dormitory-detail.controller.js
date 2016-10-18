(function() {
    'use strict';

    angular
        .module('jhipsterappApp')
        .controller('DormitoryDetailController', DormitoryDetailController);

    DormitoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Dormitory'];

    function DormitoryDetailController($scope, $rootScope, $stateParams, previousState, entity, Dormitory) {
        var vm = this;

        vm.dormitory = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterappApp:dormitoryUpdate', function(event, result) {
            vm.dormitory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
