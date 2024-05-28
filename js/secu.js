function checkPassword() {
    var password = document.getElementById("password").value;
    var redirectPage;

    switch (password) {
        case "160307":
            redirectPage = "RsInchALeNeBurCiOnADOXYGMateRANtjai.html";
            break;
        case "281208":
            redirectPage = "RsInchALeNeBurCiOnADOXYGMateRANtaru.html";
            break;
        case "jaita08":
        case "arava07":
            redirectPage = "https://pomofocus.io/";
            break;
        default:
            alert("User not found");
            return; // Stop further execution
    }

    window.location.href = redirectPage;
}