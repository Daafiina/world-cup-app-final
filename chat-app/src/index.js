const path = require('path')
const http = require('http')

const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
//Perdoret per mi fshi bad words prej badwords npm package
const Filter = require('bad-words')

const {generateMessage, generateLocationMessage} =require('./utils/messages')
const port  = process.env.port || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const{addUser, removeUser, getUser, getUsersInRoom} = require('./utils/users')


app.use(express.static(publicDirectoryPath))

io.on('connection', (socket)=>{
    console.log('New WebSocket connection')

 
    //Per me join ni room
    socket.on('join', ({username, room}, callback)=>{
        const{error, user} = addUser({id: socket.id, username, room})

        if(error){
            return callback(error)
        }

        socket.join(user.room)

        socket.emit('message', generateMessage('Admin', `Welcome to "${user.room}" room`))
        socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined the room!`))
        io.to(user.room).emit('roomData', {
            room:user.room, 
            users: getUsersInRoom(user.room)
        })
        callback()

        //socket-emit: sends a message to a specific user
        //io.emit: sends message to all users
        //socket.broadcast.emit: sends to users but not the user who sent it
        //io.to.emit: emits message to everyone in a specific room
        //socket.broadcast.to.emmit: limit a specific room

    })

    socket.on('sendMessage', (message, callback)=>{
        const user = getUser(socket.id)
        const filter = new Filter()
        //Ky error del kur kemi bad words
        if(filter.isProfane(message)){
            return callback('Bad words are not allowed!')
        }
        io.to(user.room).emit('message', generateMessage(user.username, message))
        callback()
    })

    //ky kod perdoret per me pranu lokacionin prej klientave
    socket.on('sendLocation', (coords, callback)=>{
        const user = getUser(socket.id)
        io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`   ))
        callback()
    })
    //perdoret per me shfaq mesazh kur ni user del prej chat
    socket.on('disconnect', ()=>{
        const user = removeUser(socket.id)

        if(user){
            io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left the chat`))
            io.to(user.room).emit('roomData', {
                room: user.room,
                user: getUsersInRoom(user.room)
            })
        }
        
    })
}) 

server.listen(port, ()=>{
    console.log(`Server is up on port ${port}!`)
})



