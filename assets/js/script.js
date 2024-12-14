const button = document.getElementById("soundButton");
        const sound = document.getElementById("clickSound");

        button.addEventListener("click", function() {
            sound.play(); 
        });