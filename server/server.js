// create an express app
const express = require('express')
const app = express()
// make process.env work
require('dotenv').config()
// set the port AFTER requiring dotenv
const PORT = process.env.PORT || 8000

const cors = require('cors')
// enable server to be accessed from anywhere
app.use(cors())
// allow the app to use form submissions and json in request/response cycle
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// For production - serve the generated static files
//app.use(express.static(path.join(__dirname, 'client/build')))

// require everything needed to run socket io on the server
const http = require('http')
const socketio = require('socket.io')
const server = http.createServer(app)
const io = socketio(server, {
	cors: {
		origin: 'http://localhost:5173',
	},
})

// run this when a connection is established from the client
io.on('connection', socket => {
	console.log(socket.id.slice(0, 3), 'connected!')
})

// listen for requests
app.get('/', (req, res) => {
	res.status.send('home route accessed!')
})
/*
    Serve react from server when in production
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'))
})
*/

// listen from the port/app
app.listen(PORT, (req, res) => {
	console.log('Listening on port', PORT)
})
