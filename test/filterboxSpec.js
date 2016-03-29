/**
 *
 * Unit Tests for the filterbox
 * Created by Todd Hazard on 3/29/2016.
 *
 *
 */

'use strict';


describe('filterbox unittest', function() {

    var filterBoxCtrl;
    var initialFruitListLength = 24;
    beforeEach(module("filterBoxDemo"));


    beforeEach(inject(function ($controller) {
        filterBoxCtrl = $controller('filterBoxCtrl');
    }));

    it('verify filterBoxCtrl params are defined', function () {
        expect(filterBoxCtrl.filterText).toBeDefined();
        expect(filterBoxCtrl.filterMatches).toBeDefined();
    });

    it('verify filterBoxCtrl  methods are defined', function () {

        expect(filterBoxCtrl.updateFilter).toBeDefined();
    });

    it('filterMatches list should be an array', function () {
        expect(angular.isArray(filterBoxCtrl.filterMatches)).toBe(true);
    });

    it('filterBoxCtrl should expose the method "updateFilter"', function() {
        expect(angular.isFunction(filterBoxCtrl.updateFilter)).toBe(true);
    });

    it('the filterMatches param should  initially contain the full fruit list', function() {
        expect(filterBoxCtrl.filterMatches.length).toBe(initialFruitListLength);
    });


    it('the method "updateFilter" with filter text set to "app" should return one item', function() {
        filterBoxCtrl.filterText="app";
        filterBoxCtrl.updateFilter();
        expect(filterBoxCtrl.filterMatches.length).toBe(1);
    });


    it('"updateFilter" should return all items when filterText length < 3 chars', function() {
        // 1 char long
        filterBoxCtrl.filterText="a";
        filterBoxCtrl.updateFilter();
        expect(filterBoxCtrl.filterMatches.length).toBe(initialFruitListLength);

        // 2 chars long
        filterBoxCtrl.filterText="ap";
        filterBoxCtrl.updateFilter();
        expect(filterBoxCtrl.filterMatches.length).toBe(initialFruitListLength);

        // 0 chars long
        filterBoxCtrl.filterText="";
        filterBoxCtrl.updateFilter();
        expect(filterBoxCtrl.filterMatches.length).toBe(initialFruitListLength);
    });

});
