document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    let currentIndex = 0;

    // Highlight the first option
    menuItems[currentIndex].classList.add('selected');

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
           
            menuItems[currentIndex].classList.remove('selected');
            
            currentIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].classList.add('selected');
        } else if (e.key === 'ArrowUp') {
            
            menuItems[currentIndex].classList.remove('selected');
           
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[currentIndex].classList.add('selected');
        } else if (e.key === 'Enter') {
            const selectedItem = menuItems[currentIndex];
            alert(`You selected: ${selectedItem.textContent}`);

            // Navigate based on the selected item
            if (selectedItem.textContent === 'Home') {
                window.location.href = 'index.html'; 
            } else if (selectedItem.textContent === 'About Me') {
                window.location.href = 'about.html'; 
            } else if (selectedItem.textContent === 'Projects') {
                window.location.href = 'projects.html'; // Change to the appropriate page
            } 
        }
    });
});
