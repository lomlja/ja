document.body.addEventListener('touchend', function(event) {
    let tapCount = 0;
    let tapTimer;
  
    if (event.targetTouches.length === 1) {
      let touch = event.targetTouches[0];
  
      if (tapCount === 0) {
        tapCount++;
        tapTimer = setTimeout(function() {
          tapCount = 0;
        }, 300); // Adjust the delay as needed (300ms is a typical double-tap delay)
      } else if (tapCount === 1) {
        clearTimeout(tapTimer);
        tapCount = 0;
  
        // Logic to select and copy the entire body text
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(document.body);
        selection.removeAllRanges();
        selection.addRange(range);
  
        try {
          document.execCommand('copy');
          alert('Text copied: ' + selection.toString());
        } catch (err) {
          console.log('Unable to copy text');
        }
  
        selection.removeAllRanges();
      }
    }
  });
  