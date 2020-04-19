const http = require('http');
const express = require('express');
const socketIO = require('socket.io')
const app = express();
const server = http.createServer(app)
const io = socketIO.listen(server)

app.use(express.static(__dirname + '/public'))


const Serialport = require('serialport')
const ReadLine = Serialport.parsers.Readline


const board = new Serialport('COM3', {
    baudRate: 9600

})

const parser = board.pipe(new ReadLine({ delimiter: '\r\n' }));


parser.on('open', function() {
    console.log('Connection is opened')
})

parser.on('data', function(data) {

    let temp = parseInt(data, 10) + " °C";

    console.log(temp);

    io.emit('temp', data.toString());

})



board.on('error', function(err) {
    console.log(err)
})

server.listen(3000, function() {
    console.log('Server listening on port', 3000)
})