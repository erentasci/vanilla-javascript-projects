// Create count
let count=0;

//Select value text
let value = document.getElementById("value");

//Select buttons
let buttons = document.querySelectorAll(".btn");


buttons.forEach( (btn) => {
    btn.addEventListener( "click", (e) => {

       let styles = e.currentTarget.classList;

       /*
       if(styles.contains("decrease")){
        count--;
       }else if (styles.contains("increase")){
        count++;
       }else{
        count=0;
       } 
        */

        styles.contains("decrease")
            ? count-- 
            : 
        styles.contains("increase")
            ?count++
            :
            (count=0);            


        /*
       if(count<0){
        value.style.color = "red";
       }else if(count>0){
        value.style.color = "green";
       }else{
        value.style.color = "#222";
       } */

       count<0
        ? value.style.color = "red"
        :
        count>0
        ? value.style.color = "green"
        : (value.style.color = "#222");        


        value.textContent = count;

    } )

            
})

