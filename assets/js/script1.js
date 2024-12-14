document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const navigationSound = document.getElementById('navigationSound'); 
    let currentIndex = 0;

    // Highlight the first option
    menuItems[currentIndex].classList.add('selected');

    // Ensure the audio is loaded before  to playiing
    navigationSound.load();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            menuItems[currentIndex].classList.remove('selected');
            // Move to the next item 
            currentIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].classList.add('selected');
            
            // Play sound when navigating
            navigationSound.currentTime = 0; 
            navigationSound.play().catch(error => console.log("Audio playback failed:", error)); // Ensure no errors
        } else if (e.key === 'ArrowUp') {
            menuItems[currentIndex].classList.remove('selected');
            
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[currentIndex].classList.add('selected');
            
            // Play sound when navigating
            navigationSound.currentTime = 1;
            navigationSound.play().catch(error => console.log("Audio playback failed:", error)); 
        } else if (e.key === 'Enter') {
            const selectedItem = menuItems[currentIndex];
            alert(`You selected: ${selectedItem.textContent}`);

            // Navigate based on the selected item
            if (selectedItem.textContent === 'Home') {
                window.location.href = '/';  // Redirect to homepage
            } else if (selectedItem.textContent === 'About Me') {
                window.location.href = 'about.html';  // Change to the cabout page
            } else if (selectedItem.textContent === 'Projects') {
                window.location.href = 'projects.html'; // Change to projects page
            }
        }
    });
});
