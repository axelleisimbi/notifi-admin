// Toggle Side Menu
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const mainContent = document.getElementById('mainContent');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('hidden');
    mainContent.classList.toggle('expanded');
});

// Display Current Date and Time
function updateDateTime() {
    const dateTimeSpan = document.querySelector('.date-time-text');
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    dateTimeSpan.textContent = formattedDate;
}

setInterval(updateDateTime, 1000);


// JavaScript to enlarge the search container on click and restore size on outside click
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    
    // Check if the click is inside the search-container
    if (searchContainer.contains(event.target)) {
        searchContainer.classList.add('enlarged');
    } else {
        searchContainer.classList.remove('enlarged');
    }
});
