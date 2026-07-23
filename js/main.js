/* SÉLECTION DES ÉLÉMENTS
====================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

const navbar = document.querySelector(".navbar");

const backToTop = document.getElementById("backToTop");

const currentYear = document.getElementById("currentYear");


/* MENU MOBILE
====================================================== */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}

/* NAVBAR AU SCROLL
====================================================== */

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* BOUTON RETOUR EN HAUT
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

/* ANNÉE AUTOMATIQUE
====================================================== */

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* VÉRIFICATION DU CHARGEMENT
====================================================== */

console.log("main.js chargé avec succès !");

/* DARK MODE
====================================================== */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';

            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';

            localStorage.setItem("theme", "light");

        }

    });

}

/* COMPTE À REBOURS
====================================================== */

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

/* Date de l'événement */

const eventDate = new Date("November 20, 2026 09:00:00").getTime();

// Fonction de formatage
function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

// Compte à rebours
function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        if (days) days.textContent = "00";
        if (hours) hours.textContent = "00";
        if (minutes) minutes.textContent = "00";
        if (seconds) seconds.textContent = "00";

        return;

    }

    const dayValue = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hourValue = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minuteValue = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const secondValue = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    if (days) days.textContent = formatTime(dayValue);
    if (hours) hours.textContent = formatTime(hourValue);
    if (minutes) minutes.textContent = formatTime(minuteValue);
    if (seconds) seconds.textContent = formatTime(secondValue);

}

/* Mise à jour chaque seconde */

setInterval(updateCountdown, 1000);

updateCountdown();

/* CHARGEMENT DU THÈME ENREGISTRÉ
====================================================== */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeToggle) {

        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';

    }

} else {

    if (themeToggle) {

        themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';

    }

}

/* COMPTEURS ANIMÉS
====================================================== */

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = Math.ceil(target / 100);

    const timer = setInterval(function () {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        counter.textContent = current;

    }, 20);

}

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(function (counter) {

    observer.observe(counter);

});

/* ONGLETS DU PROGRAMME
====================================================== */

const tabButtons = document.querySelectorAll(".tab-button");

const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedDay = button.dataset.day;

        tabButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        tabContents.forEach(function (content) {

            content.classList.remove("active");

        });

        button.classList.add("active");

        document.getElementById(selectedDay).classList.add("active");

    });

});

/* FILTRAGE DES INTERVENANTS
====================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

const speakerCards = document.querySelectorAll(".speaker-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.dataset.filter;

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        speakerCards.forEach(function (card) {

            if (filter === "all" || card.dataset.category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

/* VALIDATION DU FORMULAIRE
====================================================== */

const contactForm = document.getElementById("contactForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const participation = document.getElementById("participation");
const country = document.getElementById("country");
const message = document.getElementById("message");

const successMessage = document.getElementById("successMessage");


/* EXPRESSIONS RÉGULIÈRES
====================================================== */

const nameRegex = /^[A-Za-zÀ-ÿ\s'-]{3,}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex = /^\+?[0-9\s]{8,20}$/;

/* AFFICHAGE DES ERREURS
====================================================== */

function showError(input, message) {

    const formGroup = input.parentElement;

    const error = formGroup.querySelector(".error-message");

    error.textContent = message;

    input.style.borderColor = "crimson";

}


/* SUPPRESSION DES ERREURS
====================================================== */

function clearError(input) {

    const formGroup = input.parentElement;

    const error = formGroup.querySelector(".error-message");

    error.textContent = "";

    input.style.borderColor ="#ced4da";

}

/* VALIDATION DES CHAMPS
====================================================== */

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let isValid = true;

        /* Nom complet */

        if (fullname.value.trim() === "") {

            showError(fullname, "Veuillez saisir votre nom complet.");

            isValid = false;

        } else if (!nameRegex.test(fullname.value.trim())) {

            showError(fullname, "Le nom doit contenir au moins 3 lettres.");

            isValid = false;

        } else {

            clearError(fullname);

        }

        /* Email */

        if (email.value.trim() === "") {

            showError(email, "Veuillez saisir votre adresse email.");

            isValid = false;

        } else if (!emailRegex.test(email.value.trim())) {

            showError(email, "Adresse email invalide.");

            isValid = false;

        } else {

            clearError(email);

        }

        /* Téléphone */

        if (phone.value.trim() === "") {

            showError(phone, "Veuillez saisir votre numéro de téléphone.");

            isValid = false;

        } else if (!phoneRegex.test(phone.value.trim())) {

            showError(phone, "Numéro de téléphone invalide.");

            isValid = false;

        } else {

            clearError(phone);

        }

        /* Type de participation */

        if (participation.value === "") {

            showError(participation, "Veuillez choisir un type de participation.");

            isValid = false;

        } else {

            clearError(participation);

        }

        /* Pays */

        if (country.value === "") {

            showError(country, "Veuillez sélectionner votre pays.");

            isValid = false;

        } else {

            clearError(country);

        }

        /* Motivation */

        if (message.value.trim() === "") {

            showError(message, "Veuillez écrire votre motivation.");

            isValid = false;

        } else if (message.value.trim().length < 20) {

            showError(message, "Votre motivation doit contenir au moins 20 caractères.");

            isValid = false;

        } else {

            clearError(message);

        }

       /* Si tout est valide */

        if (isValid) {

            successMessage.textContent = "Inscription envoyée avec succès !";

            successMessage.style.color = "green";

            contactForm.reset();

            setTimeout(function () {

            successMessage.textContent = "";

        }, 4000);

        }

    });

}