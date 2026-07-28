// ===============================
// Hamburger Menu
// ===============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

});

// ===============================
// Close Menu After Clicking Link
// ===============================

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");

    });

});