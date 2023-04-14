const socket = io() 

//Elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')


//templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

//options
const {username, room} = Qs.parse(location.search, { ignoreQueryPrefix:true })

const autoscroll = ()=>{
    const $newMessage = $messages.lastElementChild

    //E marrim height te mesazhit
    const newMessageStyles = getComputedStyle($newMessage)
    const newMessageMargin = parseInt(newMessageStyles.marginBottom)
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin    

    const visibleHeight = $messages.offsetHeight

    //height of messages container
    const containerHeight = $messages.scrollHeight

    //How far have I scrolled
    const scrollOffset = $messages.scrollTop+visibleHeight

    if(containerHeight - newMessageHeight<=scrollOffset){
        $messages.scrollTop = $messages.scrollHeight
    }
}

socket.on('message', (message)=>{
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        username: message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()
})



socket.on('roomData', ({room, users}) =>{
const html = Mustache.render(sidebarTemplate, {
    room, 
    users
})
document.querySelector('#sidebar').innerHTML = html
})

//To create html template to location  
socket.on('locationMessage', (message)=>{
    const html = Mustache.render(locationMessageTemplate, {
        username: message.username,
        url: message.url,
        createdAt: moment(message.createdAt).format('h:mm a')

    })
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()
})


$messageForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    //Disable after 2 tries
$messageFormButton.setAttribute('disabled', 'disabled')

    const message = e.target.elements.message.value

    //Kjo e vendos errorin per badwords
    socket.emit('sendMessage', message, (error)=>{
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value=''
        $messageFormInput.focus()
        if(error){
            return console.log(error)
        }
        console.log('message Delivered')
    })

})

$sendLocationButton.addEventListener('click', ()=>{
    if(!navigator.geolocation){
        return alert("Geolocation is not supported in your browser:(")
    }
    //Disabling the button after first click
    $sendLocationButton.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position)=>{

        //Ky kod perdoret per me i dergu(emit) t dhanat e position prej ni klienti tek klienti tjeter
        $sendLocationButton.removeAttribute('disabled')
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, ()=>{
            console.log('Location has been shared with other users!')
        })
    })
})


socket.emit('join', {username, room}, (error)=>{
    if(error){
        alert(error)
        location.href='/'
    }
})