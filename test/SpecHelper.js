var fixture;

function loadFixture(path) {
  var html;
  jQuery.ajax({
    url: path,
    success: function(result) {
      html = result;
    },
    async: false
  });
  return $.parseHTML(html);
}

/** `/dist/index.html` ファイルの内容をテストスイートhtmlファイルに追加する．*/
function resetFixture() {
  if (!fixture) {
    var index = $('<div>').append(loadFixture('/dist/index.html'));
    var markup = index.find('div.markup');
    fixture = $('<div class="fixture" style="display: none">').append(markup);
    $('body').append(fixture.clone());
  } else {
    $('.fixture').replaceWith(fixture.clone());
  }
}

beforeEach(function() {
  resetFixture();
});