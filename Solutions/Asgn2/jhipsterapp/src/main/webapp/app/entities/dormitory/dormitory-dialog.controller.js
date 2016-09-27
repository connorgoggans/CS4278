(function() {
    'use strict';

    angular
        .module('jhipsterappApp')
        .controller('DormitoryDialogController', DormitoryDialogController);

    DormitoryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Dormitory'];

    function DormitoryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Dormitory) {
        var vm = this;

        vm.dormitory = entity;
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
            if (vm.dormitory.id !== null) {
                Dormitory.update(vm.dormitory, onSaveSuccess, onSaveError);
            } else {
                Dormitory.save(vm.dormitory, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('jhipsterappApp:dormitoryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
