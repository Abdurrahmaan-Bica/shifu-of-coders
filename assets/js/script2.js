 // Function for the typewriter effect
 function typewriterEffect(elementId, text, speed) {
    let i = 0;
    let element = document.getElementById(elementId);
    let typingSound = new Audio('assets/audio/typing-sound.mp3'); 
    typingSound.loop = true; 

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Adds the next letter
            i++;
            typingSound.play(); 
            setTimeout(type, speed); 
        } else {
            typingSound.pause(); // Stop the sound when typing is finished
            typingSound.currentTime = 0; // Reset the sound to the beginning
        }
    }

    type(); // Start typing effect
}

// Call the function to start the typewriter effect
typewriterEffect('typewriter-text', 'Hello, my name is Abdurrahmaan, a Mechatronics Engineering student. In my first year, I struggled with Java and could not even write a basic Hello World program. Determined to improve, I turned to online tutorials and practiced daily until I passed all my programming courses. Mastering any skill, like coding, requires consistent practice and discipline.', 100);