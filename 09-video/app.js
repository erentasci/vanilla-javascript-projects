// Select elements

const button = document.querySelector(".switch-btn") // Select switch button
const video = document.querySelector(".video-container") // Select video container
const preloader = document.querySelector(".preloader") // Select preloader 

//When clicked switch button play or pause 

button.addEventListener("click", () =>{
    if(!button.classList.contains("slide")){
        button.classList.add("slide")
        video.pause()
    }else{
        button.classList.remove("slide")
        video.play()
    }
})

// When window loaded hide preloader gif
window.addEventListener("load",()=>{
    preloader.classList.add("hide-preloader");
})