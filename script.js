// JavaScript for Navigation Toggle
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const menuItems = document.querySelectorAll('.active');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');

        if (visibility === "false") {
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
        } else {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
    });
});

// JavaScript to Handle Modal Visibility
const modal = document.getElementById("popupForm");
const bookButtons = document.querySelectorAll(".book-btn");
const closeBtn = document.querySelector(".close");
const sitesLinks = document.querySelectorAll(".sites-link");

// Open modal when clicking book buttons
bookButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

// Open modal when clicking sites links
sitesLinks.forEach(link => {
    link.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if the user clicks outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Optional: Close modal when clicking outside modal content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});
