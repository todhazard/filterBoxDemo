/**
 * Created by Todd Hazard on 3/28/2016.
 *
 * A factory to provide:
 *  An existing collection / list if fruits
 *  Filtering functionality - match items from an existing collection to a user specified string
 *
 */

(function () {
    'use strict';
    angular
        .module('filterBoxDemo')
        .factory('filterBoxSvc', filterBoxSvc);

    function filterBoxSvc() {

        var minChars = 3; // min number of chars to allow filtering
        var fruits = [];

        var updateFilter = function (filterText) {

            var filterMatches = [];

            // if text chars entered >= minimum required filter text chars, populate matches
            if (filterText && filterText.length < minChars) {
                return fruits;
            }

            // put user text and all fruits to lower case before comparison  so that it is case insensitive
            filterText = filterText.toLowerCase();

            // find pattern matches in fruit list
            angular.forEach(fruits, function (fruit) {
                if (fruit.toLowerCase().indexOf(filterText) === 0) {
                    filterMatches.push(fruit);
                }
            });

            // assign bound params
            return filterMatches;

        };

        // split, sort, and return fruit collection from concatenated fruits string
        var initializeFruitCollection = function () {
            var fruitsString = "Apple, Orange, Banana, Pineapple, Blueberry, Blackberry, Raspberry, Cranberry, Clementine, Mango, Papaya, Peach, Tangerine, Pear, Plum, Grapes, Boysenberry, Lychee, Pomegranate, Watermelon, Honey Dew Melon, Fig, Cherry, Grapefruit";
            fruits = fruitsString.split(/, +/g).sort();
        };

        initializeFruitCollection();

        // expose public methods
        return {
            "updateFilter": updateFilter
        };

    }
})();
