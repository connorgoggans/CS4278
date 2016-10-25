(function() {
    'use strict';

    angular
        .module('midtermApp')
        .controller('GradeDialogController', GradeDialogController);

    GradeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', '$q', 'entity', 'Grade', 'Submission', 'Instructor'];

    function GradeDialogController ($timeout, $scope, $stateParams, $uibModalInstance, $q, entity, Grade, Submission, Instructor) {
        var vm = this;

        vm.grade = entity;
        vm.clear = clear;
        vm.save = save;
        vm.grades = Submission.query({filter: 'grade-is-null'});
        $q.all([vm.grade.$promise, vm.grades.$promise]).then(function() {
            if (!vm.grade.grade || !vm.grade.grade.id) {
                return $q.reject();
            }
            return Submission.get({id : vm.grade.grade.id}).$promise;
        }).then(function(grade) {
            vm.grades.push(grade);
        });
        vm.instructors = Instructor.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.grade.id !== null) {
                Grade.update(vm.grade, onSaveSuccess, onSaveError);
            } else {
                Grade.save(vm.grade, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('midtermApp:gradeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
