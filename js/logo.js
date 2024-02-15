document.addEventListener("DOMContentLoaded", function () {
    var mainLogo = document.getElementById("mainLogo");
    var secondLogo = document.getElementById("secondLogo");

    setInterval(function () {
        // Show second logo
        mainLogo.classList.remove("active");
        secondLogo.classList.add("active");
        setTimeout(function () {
            // Show main logo again
            secondLogo.classList.remove("active");
            mainLogo.classList.add("active");
        }, 5000); // 5 seconds
    }, 20000); // 10 seconds
});