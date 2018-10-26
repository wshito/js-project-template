import _ from 'lodash';
import $ from 'jquery';

function component() {
  // check Lodash to work
    return _.join(['Hello', 'world!'], ' ');
}

$('.view-container').text(component());
