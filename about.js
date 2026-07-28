// ===============================
// HAMBURGER MENU
// ===============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const menuIcon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 60) {

        navbar.style.background = "#ffffff";
        navbar.style.backdropFilter = "none";
        navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";

    } else {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";

    }

});

// ===============================
// FADE UP ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

const sections = document.querySelectorAll(
    ".about-section, .why-us, .statistics, .cta-section, footer"
);

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// FLOATING IMAGE ANIMATION
// ===============================

const floatingImages = document.querySelectorAll(".img-box");

floatingImages.forEach((image, index) => {

    image.animate(

        [

            {
                transform: "translateY(0px)"
            },

            {
                transform: "translateY(-12px)"
            },

            {
                transform: "translateY(0px)"
            }

        ],

        {

            duration: 3500 + (index * 500),

            iterations: Infinity,

            easing: "ease-in-out"

        }

    );

});

// ===============================
// FLOATING CARDS
// ===============================

const cards = document.querySelectorAll(".floating-card");

cards.forEach((card, index) => {

    card.animate(

        [

            {
                transform: "translateY(0px)"
            },

            {
                transform: "translateY(-8px)"
            },

            {
                transform: "translateY(0px)"
            }

        ],

        {

            duration: 3000 + index * 600,

            iterations: Infinity,

            easing: "ease-in-out"

        }

    );

});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn1, .btn2");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px) scale(1)";

    });

});