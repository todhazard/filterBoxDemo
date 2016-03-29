/**
 * Created by Todd Hazard on 3/28/2016.
 *
 * Controller to bind DOM with factory params and filter functionality
 *
 */

(function () {
    'use strict';
    angular
        .module('filterBoxDemo')
        .controller('filterBoxCtrl', filterBoxCtrl);

    // Inject factory that does the actual work into the controller
    filterBoxCtrl.$inject = ['filterBoxSvc'];


    function filterBoxCtrl(filterBoxSvc) {
        var vm = this;

        // bind filter text params used in dom
        vm.filterText = ""; // user entered text patter
        vm.filterMatches = []; // list of items matching user entered pattern (if len <=3)

        // bind filter update call in dom to factory method
        vm.updateFilter = updateFilter;

        function updateFilter() {
            vm.filterMatches = filterBoxSvc.updateFilter(vm.filterText);
        }

        //populate fruit list
        updateFilter();
    }
})();
