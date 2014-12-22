'use strict';

// Example using the 'assert' assertion style
var assert = chai.assert;

describe('Filters', function () {
  beforeEach(module('myApp.filters'));

  describe('interpolate', function () {
    beforeEach(module(function ($provide) {
      $provide.value('version', 'TEST_VER');
    }));

    it('should replace VERSION', inject(function (interpolateFilter) {
      assert.equal(interpolateFilter('before %VERSION% after'), 'before TEST_VER after');
    }));
  });
});
