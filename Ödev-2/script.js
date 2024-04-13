//Audio Elements
var audio = {
    "a": new Audio("/assets/boom.wav"),
    "s": new Audio("/assets/clap.wav"),
    "d": new Audio("/assets/hihat.wav"),
    "f": new Audio("/assets/kick.wav"),
    "g": new Audio("/assets/ride.wav"),
    "h": new Audio("/assets/snare.wav"),
    "j": new Audio("/assets/tink.wav"),
    "k": new Audio("/assets/tom.wav"),
    "l": new Audio("/assets/simple-notification-152054.mp3"),
    

}
//Selection Elements
let aDom = document.querySelector("#a");
let sDom = document.querySelector("#s");
let dDom = document.querySelector("#d");
let fDom = document.querySelector("#f");
let gDom = document.querySelector("#g");
let hDom = document.querySelector("#h");
let jDom = document.querySelector("#j");
let kDom = document.querySelector("#k");
let lDom = document.querySelector("#l");

//Keydown Elements
window.addEventListener("keydown", (event) => {
    const key = event.key
    if (key === "a") {
        aDom.classList.add("active");
        audio.a.currentTime = 0;
        audio.a.play();
        
        setTimeout(() => {
            aDom.classList.remove("active");
        }, 200);
    }
    else if(key === "s") {
        sDom.classList.add("active");
        audio.s.currentTime = 0;
        audio.s.play();
        
        setTimeout(() => {
            sDom.classList.remove("active");
        }, 200);
    }
    else if(key === "d") {
        dDom.classList.add("active");
        audio.d.currentTime = 0;
        audio.d.play();
        
        setTimeout(() => {
            dDom.classList.remove("active");
        }, 200);
    }
    else if(key === "f") {
        fDom.classList.add("active");
        audio.f.currentTime = 0;
        audio.f.play();
        
        setTimeout(() => {
            fDom.classList.remove("active");
        }, 200);
    }
    else if(key === "g") {
        gDom.classList.add("active");
        audio.g.currentTime = 0;
        audio.g.play();
        
        setTimeout(() => {
            gDom.classList.remove("active");
        }, 200);
    }
    else if(key === "h") {
        hDom.classList.add("active");
        audio.h.currentTime = 0;
        audio.h.play();
        
        setTimeout(() => {
            hDom.classList.remove("active");
        }, 200);
    }
    else if(key === "j") {
        jDom.classList.add("active");
        audio.j.currentTime = 0;
        audio.j.play();
        
        setTimeout(() => {
            jDom.classList.remove("active");
        }, 200);
    }
    else if(key === "k") {
        kDom.classList.add("active");
        audio.k.currentTime = 0;
        audio.k.play();
        
        setTimeout(() => {
            kDom.classList.remove("active");
        }, 200);
    }
    else if(key === "l") {
        lDom.classList.add("active");
        audio.l.currentTime = 0;
        audio.l.play();
        
        setTimeout(() => {
            lDom.classList.remove("active");
        }, 200);
    }
    
})

//Click Elements
aDom.addEventListener("click",(event) => {
    audio.a.play();
})

sDom.addEventListener("click",(event) => {
    audio.s.play();
})
dDom.addEventListener("click",(event) => {
    audio.d.play();
})
fDom.addEventListener("click",(event) => {
    audio.f.play();
})
gDom.addEventListener("click",(event) => {
    audio.g.play();
})
hDom.addEventListener("click",(event) => {
    audio.h.play();
})
jDom.addEventListener("click",(event) => {
    audio.j.play();
})
kDom.addEventListener("click",(event) => {
    audio.k.play();
})
lDom.addEventListener("click",(event) => {
    audio.l.play();
})
