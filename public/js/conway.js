(function($) {
  $(function() {
    var drawBoard = function(width, height) {
      $('all-fields').empty();
      var cells = _.map(
        _.range(height), function(row_i) {
          return _.map(
            _.range(width), function(col_i) {
              return '<div class="cell" id="' + (row_i * width + height) + '"</div>'
            }).join('');
        }).join('');
      $('all-fields').html(cells);
    };
    drawBoard();
  })
})(jQuery);
