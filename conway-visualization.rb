require 'sinatra'
require 'sinatra-websocket'
require 'json'

set :server, 'thin'
set :sockets, []

get '/' do
  erb :index
end

def send_all(msg)
  EM.next_tick {
    settings.sockets.each { |s| s.send(JSON.generate(msg)) }
  }
end

def redraw_board(w, h, cells={})
  send_all(
    redraw: true,
    width: w.to_i,
    height: h.to_i,
  )
  update(cells) unless cells.empty?
end

def update(cells)
  send_all(update: cells)
end

get '/client' do
  request.websocket do |ws|
    ws.onopen do
      logger.info 'websocket started'
      settings.sockets << ws
    end
    ws.onclose do
      logger.info 'websocket stopped'
      settings.sockets.delete(ws)
    end
  end
end

get '/draw' do
  redraw_board(request[:height], request[:width])
end
