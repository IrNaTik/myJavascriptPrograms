"use strict";

const rect = document.getElementById("rectangle");

let id = null;
let posX=0;
let posY=-200;
let radius=100;
let downMove = true;



rect.addEventListener("click", () => {
    id = null;
    posX = 0;
    posY=-200;
    clearInterval(id);
    const frame = () =>{
        
        
        if (downMove) {
            posY-=0.1;
        } else {
            posY+=0.1;
        }

        if (downMove) {
            posX=-((((radius-posY)-300)*((radius+posY)+300))**(0.5)) +300;
        } else {
            posX=((((radius-posY)-300)*((radius+posY)+300))**(0.5)) +300;
        }
        rect.style.left = posX+"px";
        rect.style.top = (-posY)+"px";

        if (posY>=-200) {
            downMove=true
        } else if (posY<=-400) {
            downMove=false;
        }
        
    }
    id = setInterval(frame, 1);
    
    
});



