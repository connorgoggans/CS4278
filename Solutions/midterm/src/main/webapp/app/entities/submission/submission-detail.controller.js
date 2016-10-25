(function() {
    'use strict';

    angular
        .module('midtermApp')
        .controller('SubmissionDetailController', SubmissionDetailController);

    SubmissionDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Submission', 'Homework', 'Student'];

    function SubmissionDetailController($scope, $rootScope, $stateParams, previousState, entity, Submission, Homework, Student) {
        var vm = this;

        vm.submission = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('midtermApp:submissionUpdate', function(event, result) {
            vm.submission = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
