(function() {
    'use strict';

    angular
        .module('jhipsterappApp')
        .controller('StudentDialogController', StudentDialogController);

    StudentDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', '$q', 'entity', 'Student', 'PreferredContact', 'Dormitory', 'School'];

    function StudentDialogController ($timeout, $scope, $stateParams, $uibModalInstance, $q, entity, Student, PreferredContact, Dormitory, School) {
        var vm = this;

        vm.student = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.contacts = PreferredContact.query({filter: 'student-is-null'});
        $q.all([vm.student.$promise, vm.contacts.$promise]).then(function() {
            if (!vm.student.contact || !vm.student.contact.id) {
                return $q.reject();
            }
            return PreferredContact.get({id : vm.student.contact.id}).$promise;
        }).then(function(contact) {
            vm.contacts.push(contact);
        });
        vm.dorms = Dormitory.query({filter: 'student-is-null'});
        $q.all([vm.student.$promise, vm.dorms.$promise]).then(function() {
            if (!vm.student.dorm || !vm.student.dorm.id) {
                return $q.reject();
            }
            return Dormitory.get({id : vm.student.dorm.id}).$promise;
        }).then(function(dorm) {
            vm.dorms.push(dorm);
        });
        vm.schools = School.query({filter: 'student-is-null'});
        $q.all([vm.student.$promise, vm.schools.$promise]).then(function() {
            if (!vm.student.school || !vm.student.school.id) {
                return $q.reject();
            }
            return School.get({id : vm.student.school.id}).$promise;
        }).then(function(school) {
            vm.schools.push(school);
        });

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.student.id !== null) {
                Student.update(vm.student, onSaveSuccess, onSaveError);
            } else {
                Student.save(vm.student, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('jhipsterappApp:studentUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.graduationDate = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
