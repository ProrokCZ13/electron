let buttonA = document.getElementById("buttonA" && "buttonB");
let counter = document.getElementById("counter");
let autoclicker = document.getElementById("autoclicker");
let autocLicker = document.getElementById("autoclicker2");
let Autoclicker = document.getElementById("autoclicker3");
let duo = document.getElementById("duo")
let double = 1;
let cookies = 0;
let master = 0;
let great = 0;
let ultra = 0;
let ball = 0;


const change = () => {
    cookies=cookies+double;
    cookies++
    counter.innerText = "Pokeballs: " + cookies;
};
buttonA.onclick = change;


let autoclickerInterval;

const buyAutoclicker = () => {
    if( cookies >= 1000){
        cookies = cookies -1000;
        autoclickerInterval = setInterval(() =>{
            cookies++;
            counter.innerText = "Pokeballs: " + cookies;
            Autoclicker.innerText = "Masterballs: " + great;
        }, 1000);
    }
};
autoclicker.onclick= buyAutoclicker;

const buyAutoclicker2 = () => {
    if( cookies >= 10000){
        cookies = cookies -10000;
        autoclickerInterval = setInterval(() =>{
            cookies++;
            counter.innerText = "Pokeballs: " + cookies;
            Autoclicker.innerText = "Masterballs: " + ultra;
        }, 900);
    }
};
autocLicker.onclick= buyAutoclicker2;

const buyAutoclicker3 = () => {
    if( cookies >= 100000){
        cookies = cookies -100000;
        autoclickerInterval = setInterval(() =>{
            cookies++;
            counter.innerText = "Pokeballs: " + cookies;
            Autoclicker.innerText = "Masterballs: " + master;
        }, 800);
    }
};
Autoclicker.onclick= buyAutoclicker3;

const buyduo = () => {
    if( cookies >= 100){
        cookies = cookies -100;
        double=2;
        Autoclicker.innerText = "Masterballs: " + ball;
    }
};
duo.onclick= buyduo;
