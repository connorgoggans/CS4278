(function() {
    'use strict';

    angular
        .module('jhipsterappApp')
        .controller('PreferredContactDetailController', PreferredContactDetailController);

    PreferredContactDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'PreferredContact'];

    function PreferredContactDetailController($scope, $rootScope, $stateParams, previousState, entity, PreferredContact) {
        var vm = this;

        vm.preferredContact = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterappApp:preferredContactUpdate', function(event, result) {
            vm.preferredContact = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
