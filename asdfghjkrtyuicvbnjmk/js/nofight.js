document.getElementById('msgTxt').addEventListener('input', function() {
    var message = this.value.toLowerCase().trim(); // Convert the message to lowercase and remove leading/trailing spaces
    var keywords = ['whatever', 'wtv', 'hmm', 'hm', 'oh yeah', 'huh', 'idk', 'idkk']; // List of keywords to check for
    
    // Split the message into words
    var words = message.split(/\s+/);

    // Check if any of the words exactly match any of the keywords
    words.forEach(function(word) {
        if (keywords.includes(word)) {
            alert('You typed "' + word + '", it seems dry. NO FIGHTING');
        }
    });
});

// Function to handle pressing the Tab key in the message input field
function handleTab(event) {
    if (event.keyCode === 9) { // Tab key code
        event.preventDefault();
        // Your tab handling logic here, if needed
    }
}