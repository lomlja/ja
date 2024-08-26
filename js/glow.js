document.addEventListener("DOMContentLoaded", function() {
    const sendMsgDiv = document.getElementById('sendMsg');
    const msgTxtInput = document.getElementById('msgTxt');
  
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMsgDiv.classList.add('active');
            setTimeout(() => {
                sendMsgDiv.classList.remove('active');
            }, 500);
        }
    });
  
    msgTxtInput.addEventListener("input", function(event) {
        const msgBtn = document.getElementById('msgBtn');
        if (msgTxtInput.value.trim() !== "") {
            msgBtn.removeAttribute("disabled");
        } else {
            msgBtn.setAttribute("disabled", "disabled");
        }
    });
  });
  