//Select buttons
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");


// When clicked toggleBtn , show sidebar

toggleBtn.addEventListener("click",()=>{
    //Long 

/*
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar")
    }else{
        sidebar.classList.add("show-sidebar")
    }   
*/

    //Short --> toggle()

    sidebar.classList.toggle("show-sidebar")

})


// When clicked closeBtn , hide sidebar

closeBtn.addEventListener("click", () => {

    sidebar.classList.remove("show-sidebar")
})