document.addEventListener('DOMContentLoaded', function() {
    var headings = document.querySelectorAll('h1');
    headings.forEach(function(heading) {
        var wordsToWrap = ['test', 'example', 'word']; // Add more words here
        wordsToWrap.forEach(function(word) {
            var regex = new RegExp('\\b' + word + '\\b', 'g');
            heading.innerHTML = heading.innerHTML.replace(regex, '<bw>$&</bw>');
        });
    });
});