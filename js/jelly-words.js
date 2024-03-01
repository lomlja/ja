document.addEventListener("DOMContentLoaded", function() {
    // Find all text nodes on the page
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    // Iterate over each text node
    while (walker.nextNode()) {
      var node = walker.currentNode;
      // Check if the text node contains the word "aksa"
      if (node.nodeValue.includes("aksa")) {
        // Wrap the word "aksa" in a span with the blur-word class
        var span = document.createElement("span");
        span.textContent = node.nodeValue;
        span.classList.add("blur-word");
        node.parentNode.replaceChild(span, node);
      }
    }
  });