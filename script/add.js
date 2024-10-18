"use strict"
let check =  document.querySelector(".checkbox-main")
let hidden = document.querySelector(".element-hidden")
check.addEventListener("click" , ()=> {
    if (check.checked){
        hidden.classList.remove("hidden")
    } else{
        hidden.classList.add("hidden")
    }
})
