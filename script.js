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

