// Function to calculate time since October 10, 2023
function calculateTimePassed() {
    const targetDate = new Date('2023-10-10');
    const currentDate = new Date();
  
    // Calculate the difference in milliseconds
    const differenceMs = currentDate - targetDate;
  
    // Convert milliseconds to days
    const msInDay = 1000 * 60 * 60 * 24;
    const daysPassed = Math.floor(differenceMs / msInDay);
  
    // Calculate months and remaining days
    const monthsPassed = Math.floor(daysPassed / 30);
    const remainingDays = daysPassed % 30;
  
    return { months: monthsPassed, days: remainingDays };
  }
  
  // Function to update the time passed text in multiple locations
  function updateTimePassed() {
    const { months, days } = calculateTimePassed();
    const timePassedElement = document.getElementById('timePassed');
    const timePassedCloneElement = document.getElementById('timePassedClone');
  
    timePassedElement.textContent = `${months} months and ${days} days`;
    timePassedCloneElement.textContent = `${months} months and ${days} days `;
  }
  
  // Function to check and display image on the 10th of every month
  function checkAndDisplayImage() {
    const today = new Date();
    if (today.getDate() === 10) {
      const specialImageElement = document.getElementById('specialImage');
      specialImageElement.src = 'ha.png'; // Replace with your image path
      specialImageElement.style.display = 'block'; // Show the image
    }
  }
  
  // Initial calls to update time passed and check for image display
  updateTimePassed();
  checkAndDisplayImage();
  
  // Update time passed every minute (for demonstration purposes)
  setInterval(updateTimePassed, 60000); // Update every minute
  