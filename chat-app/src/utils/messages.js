//kjo metode perdoret si format per mesazhet qe kane me u shfaqe, veq ni mnyre qe e kom bo per me dal kodi ma clean
const generateMessage = (username, text)=>{
    return{
        username,
        text,
        createdAt: new Date().getTime()
    }
}


//kjo metode perdoret si format per lokacionin qe ka me u shfaqe, veq ni mnyre qe e kom bo per me dal kodi ma clean
const generateLocationMessage = (username, url)=>{
    return{
        username,
        url,
        createdAt: new Date().getTime()
    }
}
module.exports={
    generateMessage,
    generateLocationMessage
}