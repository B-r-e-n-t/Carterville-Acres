const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle')
const menuItems = document.querySelectorAll('.active')



navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log('butt')
        const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
    })
})




 // JavaScript to handle modal visibility
 const modal = document.getElementById("popupForm");
 const buttons = document.querySelectorAll(".book-btn");
 const closeBtn = document.querySelector(".close");
 

// Add event listeners to all buttons with the "book-btn" class
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if the user clicks outside of the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});




// JavaScript to handle modal visibility

const buttons1 = document.querySelectorAll(".sites-link");



// Add event listeners to all buttons with the "book-btn" class
buttons1.forEach((button) => {
   button.addEventListener("click", () => {
       modal.style.display = "block";
   });
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
   modal.style.display = "none";
});

// Close modal if the user clicks outside of the modal content
window.addEventListener("click", (event) => {
   if (event.target === modal) {
       modal.style.display = "none";
   }
});







// const modal = document.getElementById("popupForm");
const openModalBtn = document.querySelector(".book-btn"); // Replace with your trigger button
const closeModalBtn = modal.querySelector(".close");

// Open Modal
openModalBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

// Close Modal
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Optional: Close modal when clicking outside the content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});







const openModalBtn1 = document.querySelector(".sites-link"); // Replace with your trigger button
// const closeModalBtn = modal.querySelector(".close");

// Open Modal
openModalBtn1.addEventListener("click", () => {
    modal.classList.add("show");
});

// Close Modal
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Optional: Close modal when clicking outside the content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

