const users=[]

//AddUser, RemoveUser, getUser, getUsersInRoom

//Me qeto i shtoj userat n room
const addUser=({id, username, room})=>{

    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validimi
    if(!username || !room){
        return{
            error: 'Username and room must be filled to join'
        }
    }

    //check for excisting user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username

    })

    //validate username
    if(existingUser){
        return{
            error:'This username is taken!'
        }
    }

    //Store user
    const user = {id, username, room}
    users.push(user)
    return{user}
}
//Me kto i fshij userat
const removeUser=(id)=>{
    const index = users.findIndex((user)=>user.id === id);

    if(index!==-1){
        return users.splice(index, 1)[0]
    }
}

// Me kto i marr userat sipas id
const getUser=(id)=>{
    return users.find((user)=>user.id === id)
}

//Me kto i marr userat sipas roomit
const getUsersInRoom = (room)=>{
    return users.filter((user) =>user.room === room)
}


module.exports={
    addUser, 
    removeUser, 
    getUser, 
    getUsersInRoom
}