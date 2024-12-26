// script.js

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get form data
  const formData = new FormData(event.target);
  
  // Example: Log form data to console
  console.log({
      name: formData.get('name'),
      mobile: formData.get('mobile'),
      donationType: formData.get('donationType'),
      address: formData.get('address'),
      message: formData.get('message')
  });
  
  // Example: Display a thank you message
  alert('Thank you for your submission!');
}

// Add event listener to the form for submission handling
document.getElementById('donationForm').addEventListener('submit', handleFormSubmission);
