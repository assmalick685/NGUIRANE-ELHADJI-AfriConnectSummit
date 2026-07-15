/* ======================================================
   SÉLECTION DES ÉLÉMENTS
====================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

const navbar = document.querySelector(".navbar");

const backToTop = document.getElementById("backToTop");

const currentYear = document.getElementById("currentYear");


/* ======================================================
   MENU MOBILE
====================================================== */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}

/* ======================================================
   NAVBAR AU SCROLL
====================================================== */

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ======================================================
   BOUTON RETOUR EN HAUT
====================================================== */

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ======================================================
   ANNÉE AUTOMATIQUE
====================================================== */

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ======================================================
   VÉRIFICATION DU CHARGEMENT
====================================================== */

console.log("main.js chargé avec succès !");