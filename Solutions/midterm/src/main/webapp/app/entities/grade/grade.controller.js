(function() {
    'use strict';

    angular
        .module('midtermApp')
        .controller('GradeController', GradeController);

    GradeController.$inject = ['$scope', '$state', 'Grade'];

    function GradeController ($scope, $state, Grade) {
        var vm = this;
        
        vm.grades = [];

        loadAll();

        function loadAll() {
            Grade.query(function(result) {
                vm.grades = result;
            });
        }
    }
})();
