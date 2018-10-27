/*global
    $, window,
    describe, it, learnjs, expect, spyOn, beforeEach
 */
'use strict'

import { myMessage } from "./src/util";

describe('Tests project template', function() {
  it('tests for container element', function() {
    expect($('.view-container').length).toEqual(1);
  });

  it('tests for module import',
    function() {
      expect(myMessage).toBe("Happy coding!");
    });
});