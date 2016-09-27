(function() {
    'use strict';

    angular
        .module('jhipsterappApp')
        .controller('SchoolDialogController', SchoolDialogController);

    SchoolDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'School'];

    function SchoolDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, School) {
        var vm = this;

        vm.school = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.school.id !== null) {
                School.update(vm.school, onSaveSuccess, onSaveError);
            } else {
                School.save(vm.school, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('jhipsterappApp:schoolUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
