/*global
    $, window,
    describe, it, learnjs, expect, spyOn, beforeEach
 */
'use strict'

describe('NHK Checker', function () {
    it('tests for container element', function () {
      expect($('.view-container').length).toEqual(1);
    });
  });
