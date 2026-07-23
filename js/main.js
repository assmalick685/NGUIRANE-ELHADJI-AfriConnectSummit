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