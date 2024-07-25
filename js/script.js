// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
/*
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};
*/

// Klik di luar sidebar unruk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var downloadBtn = document.getElementById("downloadBtn");
    var downloadBtnPhone = document.getElementById("downloadBtnPhone");
    var emailPopup = document.getElementById("emailPopup");
    var thankYouPopup = document.getElementById("thankYouPopup");
    var closeBtns = document.querySelectorAll(".close-btn");
    var submitBtn = document.getElementById("submitBtn");

    downloadBtn.addEventListener("click", function(event) {
        event.preventDefault();
        emailPopup.style.display = "block";
        console.log('downloadBtn')
    });

    downloadBtnPhone.addEventListener("click", function(event) {
        event.preventDefault();
        emailPopup.style.display = "block";
        console.log('downloadBtnPhone')
    });

    closeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            emailPopup.style.display = "none";
            thankYouPopup.style.display = "none";
        });
    });

    submitBtn.addEventListener("click", function() {
        var emailInput = document.getElementById("emailInput").value;
        if (emailInput) {
            emailPopup.style.display = "none";
            thankYouPopup.style.display = "block";
        } else {
            alert("Please enter a valid email address.");
        }
    });

    window.addEventListener("click", function(event) {
        if (event.target == emailPopup || event.target == thankYouPopup) {
            emailPopup.style.display = "none";
            thankYouPopup.style.display = "none";
        }
    });
});