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
        default:
            redirectPage = "nouser.html";
            break;
    }

    window.location.href = redirectPage;
}