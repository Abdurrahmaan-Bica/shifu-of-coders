const button = document.getElementById("soundButton");
const sound = document.getElementById("clickSound");
const link = document.querySelector("a");

    button.addEventListener("click", function(event) {
        event.preventDefault();  
        sound.play();  

         // wait for the sound to play before redirecting
        setTimeout(function() {
            window.location.href = link.href; 
            
        }, 500); 
    });

   