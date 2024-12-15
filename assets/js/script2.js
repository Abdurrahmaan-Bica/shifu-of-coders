function typewriterEffect(elementId, text, speed) {
    let i = 0;
    let element = document.getElementById(elementId);
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Adding the next letter
            i++;
            setTimeout(type, speed); 
        }
    }
    
    type();
}

// Function call to start typing effect.
typewriterEffect('typewriter-text', 'Hello, my name is Abdurrahmaan, a Mechatronics Engineering student. In my first year, I struggled with Java and could not even write a basic Hello World program. Determined to improve, I turned to online tutorials and practiced daily until I passed all my programming courses. Mastering any skill, like coding, requires consistent practice and discipline.', 100);