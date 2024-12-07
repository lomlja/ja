const showReminderBtn = document.getElementById('showReminderBtn');
const showReminderBtnCopy = document.getElementById('showReminderBtnCopy');
const reminder = document.getElementById('reminder');
const textAreaInput = document.getElementById('textAreaInput');
const saveBtn = document.getElementById('saveBtn');
const closeBtn = document.getElementById('closeBtn');

// Function to show reminder
function showReminder() {
    reminder.style.display = 'block';
}

// Event listener for original show reminder button
showReminderBtn.addEventListener('click', showReminder);

// Event listener for copy show reminder button
showReminderBtnCopy.addEventListener('click', showReminder);

// Save text to localStorage when save button is clicked
saveBtn.addEventListener('click', function() {
    const textValue = textAreaInput.value.trim();

    if (textValue !== '') {
        // Save to localStorage
        localStorage.setItem('cachedText', textValue);

        // Optionally, you can show a confirmation to the user
        alert('Saved to local storage');

        // Hide the reminder
        reminder.style.display = 'none';
    } else {
        alert('Type somethinggg.');
    }
});

// Close reminder only when close button is clicked
closeBtn.addEventListener('click', function(event) {
    if (event.target === closeBtn) { // Ensure it's the close button that was clicked
        reminder.style.display = 'none';
    }
});

// Prevent closing when clicking outside the reminder
reminder.addEventListener('click', function(event) {
    if (event.target === reminder) { // Check if the click happened on the background of the reminder
        event.stopPropagation(); // Stop the event from bubbling up
    }
});

// On page load, check if there's cached text and prefill the textarea
window.addEventListener('load', function() {
    const cachedText = localStorage.getItem('cachedText');
    if (cachedText) {
        textAreaInput.value = cachedText;
    }
});