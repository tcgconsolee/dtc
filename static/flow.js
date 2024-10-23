const login = document.getElementsByClassName("login")[0];
const signup = document.getElementsByClassName("sign-up")[0]
const projects = document.getElementsByClassName("projects")[0]
const home = document.getElementsByClassName("home")[0]
const events = document.getElementsByClassName("events")[0]
const chat = document.getElementsByClassName("chat")[0]
const profile = document.getElementsByClassName("profile")[0]

const pages = [signup, projects, home, events, chat, profile]
let activated = {elem: home, name: "home"}

function resetIndexes(page) {
    pages.forEach((element) => {
        element.style.zIndex = "4";
    })
    if(page.className === "home") {} else {
        page.style.zIndex = "6"
    }
    if(activated.name == "home") {}else{
        activated.elem.style.animation = `${activated.name}-back 500ms forwards`
    }
}
let logged_in = false;
document.querySelectorAll(".pfp").forEach((element) => {
    element.addEventListener('click', () => {   
        if(logged_in) {
            resetIndexes(profile)
            profile.style.animation = "profile 500ms forwards"
            activated = {elem: profile, name: "profile"}
        } else {
            resetIndexes(login)
            login.style.animation = "login 500ms forwards"
            activated = {elem: login, name: "login"}
        }
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
document.querySelectorAll(".chats").forEach((element) => {
    element.addEventListener('click', () => {
        resetIndexes(chat)
        chat.style.animation = "chat 500ms forwards"
        
        activated = {elem: chat, name: "chat"}
    })
})
document.querySelectorAll(".logo").forEach((element) => {
    element.addEventListener('click', () => {
        resetIndexes(home)        
        activated = {elem: home, name: "home"}
    })
})
let notifications_active = false;
let watchlist_active = false;
let active_notifs;
let deactive_notifs;
document.querySelectorAll(".notifs").forEach((element) => {
    element.firstElementChild.style.display = "none";
    element.addEventListener('click', () => {
        if(notifications_active) {
            element.firstElementChild.style.display = "none"
            element.lastElementChild.style.display = "block"
            document.getElementById('notifications-bar').style.display = "none"
            document.getElementById('notifications-wrap').style.display = "none"
            notifications_active = false;
        } else {
            setTimeout(() => {
            active_notifs = element.firstElementChild;
            deactive_notifs = element.lastElementChild;
            element.firstElementChild.style.display = "block"
            element.lastElementChild.style.display = "none"
            document.getElementById('notifications-bar').style.display = "block"
            document.getElementById('notifications-wrap').style.display = "block"
            notifications_active = true;
            }, 10)
        }
    })
})
document.querySelectorAll(".watchs").forEach((element) => {
    element.addEventListener('click', () => {
        if(watchlist_active) {
            document.getElementById('watchlist-bar').style.display = "none"
            document.getElementById('watchlist-wrap').style.display = "none"
            watchlist_active = false;
        } else {
            setTimeout(() => {
            document.getElementById('watchlist-bar').style.display = "block"
            document.getElementById('watchlist-wrap').style.display = "block"
            watchlist_active = true;
            }, 10)
        }
    })
})
document.addEventListener('click', () => {
    if(notifications_active) {
        active_notifs.style.display = "none"
        deactive_notifs.style.display = "block"
        document.getElementById('notifications-bar').style.display = "none"
        document.getElementById('notifications-wrap').style.display = "none"
        notifications_active = false;
    }
    if(watchlist_active) {
        document.getElementById('watchlist-bar').style.display = "none"
        document.getElementById('watchlist-wrap').style.display = "none"
        watchlist_active = false;
    }
})

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
function scrollTo(elem, y, end) {
    let i = y;
    let interval = setInterval(() => {
        if(i<end+1) clearInterval(interval)
        i-=10;
        elem.scrollTo(0,y-i+end)
    }, 1);
}
document.getElementsByClassName('placeholder')[0].addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        resetIndexes(events)
        events.style.animation = "events 500ms forwards"
        activated = {elem: events, name: "events"}
        scrollTo(events, 1200, 0)
        let nothing = true;
        document.getElementsByClassName('placeholder-eve')[0].value = document.getElementsByClassName('placeholder')[0].value
        document.querySelectorAll('.other-event-name').forEach((elem) => {
            if(!elem.innerHTML.toLowerCase().includes(document.getElementsByClassName('placeholder-eve')[0].value.toLowerCase())) {
                elem.parentElement.style.display = "none";
            } else {
                elem.parentElement.style.display = "inline-block";
                nothing = false;
            }
        })
        if(nothing) {
            document.getElementsByClassName('nothing')[0].style.display = "block"
        }  else {
            document.getElementsByClassName('nothing')[0].style.display = "none"
        }         
    }
})
document.getElementsByClassName('placeholder-eve')[0].addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        scrollTo(events, 1200, 0)
        let nothing = true;
        document.querySelectorAll('.other-event-name').forEach((elem) => {
            if(!elem.innerHTML.toLowerCase().includes(document.getElementsByClassName('placeholder-eve')[0].value.toLowerCase())) {
                elem.parentElement.style.display = "none";
            } else {
                elem.parentElement.style.display = "inline-block";
                nothing = false;
            }
        })          
        if(nothing) {
            document.getElementsByClassName('nothing')[0].style.display = "block"
        }  else {
            document.getElementsByClassName('nothing')[0].style.display = "none"
        }            
    }
})
document.getElementsByClassName('placeholder-proj')[0].addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let nothing = true;
        document.querySelectorAll('.project-name').forEach((elem) => {
            if(!elem.innerHTML.toLowerCase().includes(document.getElementsByClassName('placeholder-proj')[0].value.toLowerCase())) {
                elem.parentElement.style.display = "none";
            } else {
                elem.parentElement.style.display = "inline-block";
                nothing = false;
            }
        })          
        if(nothing) {
            document.getElementsByClassName('nothing-proj')[0].style.display = "block"
        }  else {
            document.getElementsByClassName('nothing-proj')[0].style.display = "none"
        }            
    }
})
document.querySelectorAll('.event-category').forEach(elem => {
    elem.addEventListener('click', () => {
        document.getElementsByClassName('selected-category')[0].style.left = (9 + ((58 + 182) * (Number(elem.id) - 1))) + "px"
    })
});
let chattoggle = null;
document.querySelectorAll(".types").forEach((elem) => {
    elem.addEventListener('click', () => {
        if(chattoggle) {
            chattoggle.classList.remove("highlighted")
        }
        elem.classList.add("highlighted")
        chattoggle = elem;
    })
})
document.getElementsByClassName('chat-bubble')[0].style.width = '265px'
document.getElementsByClassName('message-dialog')[0].addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        if(document.getElementsByClassName('message-dialog')[0].value === "") {
            return;
        }
        let blockage = document.createElement("div");
        let bubble = document.createElement("div");
        blockage.classList.add("chat-blockage");
        bubble.classList.add("chat-bubble");
        bubble.style.width = (10.2*document.getElementsByClassName('message-dialog')[0].value.length)+31+"px"
        bubble.innerHTML = document.getElementsByClassName('message-dialog')[0].value;
        document.getElementsByClassName('message-dialog')[0].value = "";
        blockage.append(bubble);
        document.getElementsByClassName("chatbox-main-area")[0].append(blockage);
    }
})
document.getElementsByClassName('join-btn')[0].addEventListener('click', () => {
    document.getElementsByClassName("username-text")[0].innerHTML = document.getElementById("uname-s").value;
    logged_in = true;
    resetIndexes(profile)
    profile.style.animation = "profile 500ms forwards"
    activated = {elem: profile, name: "profile"}
})
document.getElementsByClassName('login-btn')[0].addEventListener('click', () => {
    document.getElementsByClassName("username-text")[0].innerHTML = document.getElementById("uname-l").value;
    logged_in = true;
    resetIndexes(profile)
    profile.style.animation = "profile 500ms forwards"
    activated = {elem: profile, name: "profile"}
})
document.querySelectorAll('form').forEach((elem) => {
    elem.addEventListener('submit', (e) => {
        e.preventDefault();
    })
})
document.getElementsByClassName("edit-profile")[0].addEventListener('click', () => {
    document.getElementsByClassName('uname-replace')[0].value = document.getElementsByClassName('username-text')[0].innerHTML;
    document.getElementsByClassName('username-text')[0].style.display = "none";
    document.getElementsByClassName('uname-replace')[0].style.display = "block";
})
document.getElementsByClassName("uname-replace")[0].addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
    document.getElementsByClassName('username-text')[0].innerHTML = document.getElementsByClassName('uname-replace')[0].value;
    document.getElementsByClassName('username-text')[0].style.display = "block";
    document.getElementsByClassName('uname-replace')[0].style.display = "none";
    }
})
function changeDim(elem) {
    if(elem.computedStyleMap().get('width').value==="auto"||elem.computedStyleMap().get('left').value==="auto"||elem.computedStyleMap().get('height').value==="auto"||elem.computedStyleMap().get('top').value==="auto") return;
    console.log(elem.computedStyleMap().get('width').value)
    elem.style.width = elem.computedStyleMap().get('width').value * 1366/1920 +"px";
    elem.style.left = elem.computedStyleMap().get('left').value*1366/1920 + "px";
    elem.style.height = elem.computedStyleMap().get('height').value*768/1080 + "px";
    elem.style.top = elem.computedStyleMap().get('top').value*768/1080 + "px";
}
document.querySelectorAll("home >*").forEach((elem) => {
    changeDim(elem)
})