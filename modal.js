// Select the modal
const modal = document.querySelector('.modal');
const projectButtons = document.querySelectorAll('.project-button');
const closeModal = document.querySelector('.close-modal');

// Function to show the modal
function showModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function hideModal() {
  modal.style.display = 'none';
}

// Attach event listeners to each "See project" button
projectButtons.forEach(button => {
  button.addEventListener('click', showModal);
});

// Attach event listener to the close button
closeModal.addEventListener('click', hideModal);

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    hideModal();
  }
});







document.querySelectorAll('.dropdown-header').forEach(header => {
  header.addEventListener('click', () => {
    const target = document.querySelector(header.dataset.target);
    
    // Toggle open/closed class
    target.classList.toggle('open');
    header.classList.toggle('open');
    
    // Adjust the container height based on whether it's open or closed
    if (target.classList.contains('open')) {
      target.style.height = target.scrollHeight + 'px';
    } else {
      target.style.height = '0px';
    }
  });
});
