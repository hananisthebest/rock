function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open'); // Toggle the 'open' class
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('open'); // Remove 'open' class
}

// Close sidebar when clicking outside of it
window.addEventListener('click', function(event) {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button');

  if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    hideSidebar();
  }
});
