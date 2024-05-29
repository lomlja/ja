document.getElementById('msgTxt').addEventListener('input', function() {
    var message = this.value.toLowerCase().trim(); // Convert the message to lowercase and remove leading/trailing spaces
    var keywords = ['whatever', 'wtv', 'hmm', 'hm', 'oh yeah', 'huh', 'idk', 'idkk']; // List of keywords to check for
    
    // Split the message into words
    var words = message.split(/\s+/);

    // Check if any of the words exactly match any of the keywords
    words.forEach(function(word) {
        if (keywords.includes(word)) {
            alert('You typed "' + word + '", it seems dry. We do not have to make a fight again. Please remember the love we have for each other, we do love and care each other. It is better if we calm ourselves and talk about the issue openly. Please discuss the issue with your partner about how you feel. Please remind yourselves not to get mad at each other and control your feelings. Talk about it openly.');
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