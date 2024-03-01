
function handleTab(event) {
    var msgTxt = document.getElementById("msgTxt");
    var cursorPos = msgTxt.selectionStart;
    var text = msgTxt.value;

    if (event.key === "Tab") {
        event.preventDefault();
        if (text.substring(cursorPos - 1, cursorPos) === "b") {
            // Replace "b" with <b></b> and place cursor between opening and closing tags
            var beforeText = text.substring(0, cursorPos - 1);
            var afterText = text.substring(cursorPos);
            msgTxt.value = beforeText + "<b></b>" + afterText;
            // Set cursor position between <b> and </b>
            msgTxt.selectionStart = cursorPos + 3;
            msgTxt.selectionEnd = cursorPos + 3;
        } else if (text.substring(cursorPos - 2, cursorPos) === "br") {
            // Replace "br" with <br> and leave a space
            var beforeText = text.substring(0, cursorPos - 2);
            var afterText = text.substring(cursorPos);
            msgTxt.value = beforeText + "<br> " + afterText;
            // Set cursor position after <br> with a space
            msgTxt.selectionStart = cursorPos + 5;
            msgTxt.selectionEnd = cursorPos + 5;
        } else if (text.substring(cursorPos - 1, cursorPos) === "u") {
            // Replace "u" with <u></u> and place cursor between opening and closing tags
            var beforeText = text.substring(0, cursorPos - 1);
            var afterText = text.substring(cursorPos);
            msgTxt.value = beforeText + "<u></u>" + afterText;
            // Set cursor position between <u> and </u>
            msgTxt.selectionStart = cursorPos + 3;
            msgTxt.selectionEnd = cursorPos + 3;
        } else if (text.substring(cursorPos - 1, cursorPos) === "i") {
            // Replace "i" with <i></i> and place cursor between opening and closing tags
            var beforeText = text.substring(0, cursorPos - 1);
            var afterText = text.substring(cursorPos);
            msgTxt.value = beforeText + "<i></i>" + afterText;
            // Set cursor position between <i> and </i>
            msgTxt.selectionStart = cursorPos + 3;
            msgTxt.selectionEnd = cursorPos + 3;
        } else {
            // Get the word preceding the cursor
            var lastSpaceIndex = text.lastIndexOf(" ", cursorPos - 1);
            var word = text.substring(lastSpaceIndex + 1, cursorPos);
            // Replace the word with <bw>"word" </bw>
            var beforeText = text.substring(0, lastSpaceIndex + 1);
            var afterText = text.substring(cursorPos);
            msgTxt.value = beforeText + "<bw>" + word + "</bw> " + afterText;
            // Set cursor position after </bw> with a space
            msgTxt.selectionStart = cursorPos + 7 + word.length;
            msgTxt.selectionEnd = cursorPos + 7 + word.length;
        }
    }
}