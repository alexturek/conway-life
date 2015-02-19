(function($, _) {
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

    drawBoard(50, 20);

    var ws       = new WebSocket('ws://' + window.location.host + '/client');
    ws.onopen    = function()  { console.log('websocket opened'); };
    ws.onclose   = function()  { console.log('websocket closed'); }
    ws.onmessage = function(m) { console.log('websocket message: ' +  m.data); };
  })
})(jQuery, _);
