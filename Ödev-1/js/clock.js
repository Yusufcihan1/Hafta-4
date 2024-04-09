
let fullName = prompt("Lutfen Adinizi Giriniz: ")

let info = document.querySelector("#myName")

info.innerHTML = `${fullName}`

let clocker = document.querySelector("#myClock");

const now = new Date(); 
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let days = ['Pazar', 'Pazartesi', 'Sali', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
let day = days[now.getDay()];


clocker.innerHTML = hours + ":" + minutes + ":" + seconds + " " + day ;

clocker.style.fontSize= "60px" 

let counter = 1;

let counterDOM = document.querySelector("#counter");
let increaseDOM= document.querySelector("#surprise");
let decreaseDOM = document.querySelector("#back");
counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", () => {
    counter++;
    counterDOM.innerHTML = counter;
    if(counter == 2){
        increaseDOM.style.color = "blue";
        
    }
})
decreaseDOM.addEventListener("click", () => {
    counter--;
    counterDOM.innerHTML = counter;
    if(counter == 1){
        decreaseDOM.style.color = "red";
       
        
    }
})

