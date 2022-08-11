"use strict";

const divHat = document.querySelector("#wrapper-menu");
const body = document.querySelector("body");
const menu = document.querySelector("#menu");
console.log(menu);
let scrollArray = [];

window.addEventListener("scroll", function() {
    scrollArray.push(window.pageYOffset);
    console.log(scrollArray[scrollArray.length-1], window.pageYOffset);
    if (scrollArray[scrollArray.length-2]>window.pageYOffset) {
        console.log("good");
       
        divHat.classList.add("scroll-up");
        
        // scrollArray = [];
    } else {
        divHat.classList.remove("scroll-up");
        
    }
})


menu.addEventListener("click", e => {
    for (let menuValue of menu.children){
        menuValue.classList.remove("active");
    }
    e.target.classList.add("active");
})




