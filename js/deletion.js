// JavaScript to handle modal functionality
var modal = document.getElementById('myModal');
var confirmBtn = document.getElementById('confirmDelete');
var cancelBtn = document.getElementById('cancelDelete');

function dltMsg(key) {
    // Show the modal with smooth blur effect
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open

    // Event listener for confirm button
    confirmBtn.onclick = function() {
        // Proceed with deletion
        remove(ref(db, "messages/" + key))
            .then(() => {
                // Remove the message from the DOM
                var msgBox = document.getElementById(key);
                if (msgBox) {
                    msgBox.parentNode.removeChild(msgBox);
                }
            })
            .catch(error => {
                console.error("Error deleting message:", error);
            });

        closeModal();
    }

    // Event listener for cancel button
    cancelBtn.onclick = function() {
        closeModal();
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}