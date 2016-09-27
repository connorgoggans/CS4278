(function() {
    'use strict';

    angular
        .module('jhipsterappApp')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Student', 'PreferredContact', 'Dormitory', 'School'];

    function StudentDetailController($scope, $rootScope, $stateParams, previousState, entity, Student, PreferredContact, Dormitory, School) {
        var vm = this;

        vm.student = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterappApp:studentUpdate', function(event, result) {
            vm.student = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
