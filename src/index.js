import _ from 'lodash';
import $ from 'jquery';
import { myMessage } from './util'; // import submodule

function component() {
  // check Lodash to work
  return _.join(['Hello', 'world!'], ' ') + ' ' + myMessage;
}

$('.view-container').text(component());