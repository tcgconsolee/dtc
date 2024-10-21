const login = document.getElementsByClassName("login")[0];
const signup = document.getElementsByClassName("sign-up")[0]
const projects = document.getElementsByClassName("projects")[0]
const home = document.getElementsByClassName("home")[0]
const events = document.getElementsByClassName("events")[0]
/*
const workshops = document.getElementsByClassName("workshops")[0];
const watchlist = document.getElementsByClassName("watchlist")[0]
const chat = document.getElementsByClassName("chat")[0]
const notifications = document.getElementsByClassName("notifications")[0]
*/

const pages = [signup, projects, home, events /*, workshops, watchlist, chat, notifications */]
let activated = {elem: home, name: "home"}

function resetIndexes(page) {
    pages.forEach((element) => {
        element.style.zIndex = "4";
    })
    page.style.zIndex = "6"
    if(activated.name == "home") {}else{
        activated.elem.style.animation = `${activated.name}-back 500ms forwards`
    }
}

document.querySelectorAll(".pfp").forEach((element) => {
    element.addEventListener('click', () => {
        resetIndexes(login)
        login.style.animation = "login 500ms forwards"
        
        activated = {elem: login, name: "login"}
    })
})
document.querySelectorAll(".projs").forEach((element) => {
    element.addEventListener('click', () => {
        resetIndexes(projects)
        projects.style.animation = "projects 500ms forwards"
        
        activated = {elem: projects, name: "projects"}
    })
})
document.querySelectorAll(".eves").forEach((element) => {
    element.addEventListener('click', () => {
        resetIndexes(events)
        events.style.animation = "events 500ms forwards"
        
        activated = {elem: events, name: "events"}
    })
})
/*
document.querySelectorAll(".works").forEach((element) => {
    element.addEventListener('click', () => {
        resetIndexes(workshops)
        works.style.animation = "workshops 500ms forwards"
        
        activated = {elem: workshops, name: "workshops"}
    })
})
document.querySelectorAll(".watchs").forEach((element) => {
    element.addEventListener('click', () => {
        resetIndexes(watchlist)
        watchs.style.animation = "watchs 500ms forwards"
        
        activated = {elem: watchlist, name: "watchlist"}
    })
})
document.querySelectorAll(".chats").forEach((element) => {
    element.addEventListener('click', () => {
        resetIndexes(chat)
        projects.style.animation = "chat 500ms forwards"
        
        activated = {elem: chat, name: "chat"}
    })
})
document.querySelectorAll(".notifs").forEach((element) => {
    element.addEventListener('click', () => {
        resetIndexes(notifications)
        notifications.style.animation = "notifications 500ms forwards"
        
        activated = {elem: notifications, name: "notifications"}
    })
})
*/
document.querySelectorAll(".back").forEach((element) => {
    element.addEventListener('click', () => {
        if(element.parentElement == signup) {
            element.parentElement.style.animation = "sign-up-back 500ms forwards"
        }
        else {
            element.parentElement.style.animation = "login-back 500ms forwards"
        }
        activated = {elem: home, name: "home"};
    })
}) 
document.getElementById("redirect-sign").addEventListener('click', () => {
    resetIndexes(signup)
    signup.style.animation = "sign-up 500ms forwards"
    activated = {elem: signup, name: "sign-up"}
})