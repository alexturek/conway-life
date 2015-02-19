(function($) {
  $(function() {
    var drawBoard = function(width, height) {
      $('#all-fields').empty();
      var cells = _.map(
        _.range(height), function(row_i) {
          var cells = _.map(
            _.range(width), function(col_i) {
              return '<div class="cell" id="' + (row_i * width + col_i) + '"></div>'
            });
          return '<div class="row">' + cells.join('') + '</div>'
        }).join('');
      $('#all-fields').html(cells);
    };
    drawBoard(5, 5);
  })
})(jQuery);
