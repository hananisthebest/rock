function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
  
  // Close sidebar when clicking outside of it
  window.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
  
    if (sidebar.style.display === 'flex' && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      hideSidebar();
    }
  });