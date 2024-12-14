document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const navigationSound = document.getElementById('navigationSound');  // Sound when navigating
    let currentIndex = 0;

    // Highlighting the first option
    menuItems[currentIndex].classList.add('selected');

    // Loading audio before playing.
    navigationSound.load();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            menuItems[currentIndex].classList.remove('selected');
            // Moving to the next item
            currentIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].classList.add('selected');
            
            // Play navigation sound when moving with arrows
            navigationSound.currentTime = 0; 
            navigationSound.play().catch(error => console.log("Audio playback failed:", error)); 
        } else if (e.key === 'ArrowUp') {
            menuItems[currentIndex].classList.remove('selected');
            
            // Move to the previous item
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[currentIndex].classList.add('selected');
            
            navigationSound.currentTime = 1; 
            navigationSound.play().catch(error => console.log("Audio playback failed:", error)); 
        } else if (e.key === 'Enter') {
            const selectedItem = menuItems[currentIndex];
           
            if (selectedItem.textContent === 'Home') {
                window.location.href = '/';  // Redirect to homepage
            } else if (selectedItem.textContent === 'About Me') {
                window.location.href = 'about.html';  // Redirect to About Me page
            } else if (selectedItem.textContent === 'Projects') {
                window.location.href = 'projects.html'; // Redirect to Projects page
            }
            else if (selectedItem.textContent === 'Exit') {
                window.location.href = 'exit.html'; // Redirect to the exit page
            }
        }
    });
});
