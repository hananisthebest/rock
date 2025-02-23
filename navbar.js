// Select the sidebar and menu button
const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu-button');

// Function to show the sidebar
function showSidebar() {
    sidebar.classList.add('open'); // Add 'open' class to show the sidebar
    menuButton.style.display = 'none'; // Hide hamburger menu icon
}

// Function to hide the sidebar
function hideSidebar() {
    sidebar.classList.remove('open'); // Remove 'open' class to hide the sidebar
    menuButton.style.display = 'block'; // Show hamburger menu icon
}

// Event listener for the menu button
menuButton.addEventListener('click', showSidebar);

// Close sidebar when clicking outside of it
window.addEventListener('click', function(event) {
    if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        hideSidebar();
    }
});
