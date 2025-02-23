// tour-dates.js

// Function to initialize the event listeners for the 'View More' buttons
document.addEventListener('DOMContentLoaded', function() {
    // Select all 'View More' buttons and change the text to 'Buy Tickets'
    const viewMoreButtons = document.querySelectorAll('.btn-primary');
  
    viewMoreButtons.forEach(button => {
      button.textContent = 'Buy Tickets';
      
      // Add click event listener to open the link in a new tab
      button.addEventListener('click', function(event) {
        // Prevent default action
        event.preventDefault();
        // Open the link in a new tab
        window.open(button.closest('.card').querySelector('a').href, '_blank');
      });
    });
  });
  