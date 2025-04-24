// JavaScript for Navigation Toggle
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const menuItems = document.querySelectorAll('.active-nav');

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









document.addEventListener('DOMContentLoaded', function() {
    // State variables
    let checkInDate = null;
    let checkOutDate = null;
    const guests = {
      adults: 2,
      children: 0,
      pets: 0
    };
  
    // DOM elements
    const checkInBtn = document.getElementById('check-in-btn');
    const checkOutBtn = document.getElementById('check-out-btn');
    const checkInText = document.getElementById('check-in-text');
    const checkOutText = document.getElementById('check-out-text');
    const checkInInput = document.getElementById('check-in-date');
    const checkOutInput = document.getElementById('check-out-date');
    const guestsBtn = document.getElementById('guests-btn');
    const guestsText = document.getElementById('guests-text');
    const guestsPopover = document.getElementById('guests-popover');
    const guestsDoneBtn = document.getElementById('guests-done');
    const searchBtn = document.getElementById('search-btn');
  
    // Guest counter elements
    const adultsCount = document.getElementById('adults-count');
    const childrenCount = document.getElementById('children-count');
    const petsCount = document.getElementById('pets-count');
    const adultsPlus = document.getElementById('adults-plus');
    const adultsMinus = document.getElementById('adults-minus');
    const childrenPlus = document.getElementById('children-plus');
    const childrenMinus = document.getElementById('children-minus');
    const petsPlus = document.getElementById('pets-plus');
    const petsMinus = document.getElementById('pets-minus');
  
    // Season dates for 2025
    const seasonStart = new Date(2025, 4, 23); // May 23, 2025
    const seasonEnd = new Date(2025, 10, 1);   // November 1, 2025
  
    // Initialize flatpickr for check-in date
    let checkInPicker = flatpickr(checkInInput, {
      minDate: seasonStart,
      maxDate: seasonEnd,
      dateFormat: "Y-m-d",
      onChange: function(selectedDates, dateStr) {
        if (selectedDates.length > 0) {
          checkInDate = selectedDates[0];
          const formattedDate = formatDate(checkInDate);
          checkInText.textContent = formattedDate;
          
          // Update check-out min date
          checkOutPicker.set('minDate', checkInDate);
          
          // If check-out date is before check-in date, clear it
          if (checkOutDate && checkOutDate < checkInDate) {
            checkOutDate = null;
            checkOutText.textContent = 'Select date';
            checkOutPicker.clear();
          }
        }
      }
    });
  
    // Initialize flatpickr for check-out date
    let checkOutPicker = flatpickr(checkOutInput, {
      minDate: seasonStart,
      maxDate: seasonEnd,
      dateFormat: "Y-m-d",
      onChange: function(selectedDates, dateStr) {
        if (selectedDates.length > 0) {
          checkOutDate = selectedDates[0];
          const formattedDate = formatDate(checkOutDate);
          checkOutText.textContent = formattedDate;
        }
      }
    });
  
    // Format date to MMM d, yyyy (e.g., May 23, 2025)
    function formatDate(date) {
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
  
    // Format date to yyyy-MM-dd for URL
    function formatDateForUrl(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  
    // Update guests text
    function updateGuestsText() {
      const { adults, children, pets } = guests;
      const totalGuests = adults + children + pets;
      
      if (totalGuests === 0) {
        guestsText.textContent = 'Select guests';
        return;
      }
      
      let text = '';
      
      if (adults > 0) {
        text += `${adults} ${adults === 1 ? 'Adult' : 'Adults'}`;
      }
      
      if (children > 0) {
        text += `${adults > 0 ? ', ' : ''}${children} ${children === 1 ? 'Child' : 'Children'}`;
      }
      
      if (pets > 0) {
        text += `${adults > 0 || children > 0 ? ', ' : ''}${pets} ${pets === 1 ? 'Pet' : 'Pets'}`;
      }
      
      guestsText.textContent = text;
    }
  
    // Update counter buttons state
    function updateCounterButtons() {
      adultsMinus.disabled = guests.adults <= 1;
      childrenMinus.disabled = guests.children <= 0;
      petsMinus.disabled = guests.pets <= 0;
    }
  
    // Handle guest change
    function handleGuestChange(type, action) {
      if (action === 'increment') {
        guests[type]++;
      } else if (action === 'decrement' && guests[type] > 0) {
        guests[type]--;
        if (type === 'adults' && guests[type] < 1) {
          guests[type] = 1; // Ensure at least 1 adult
        }
      }
      
      // Update counter display
      document.getElementById(`${type}-count`).textContent = guests[type];
      
      // Update buttons state
      updateCounterButtons();
      
      // Update guests text
      updateGuestsText();
    }
  
    // Event listeners for date pickers
    checkInBtn.addEventListener('click', function() {
      checkInPicker.open();
    });
  
    checkOutBtn.addEventListener('click', function() {
      checkOutPicker.open();
    });
  
    // Event listener for guests button
    guestsBtn.addEventListener('click', function() {
      guestsPopover.classList.toggle('active');
    });
  
    // Event listener for guests done button
    guestsDoneBtn.addEventListener('click', function() {
      guestsPopover.classList.remove('active');
    });
  
    // Event listeners for guest counters
    adultsPlus.addEventListener('click', function() {
      handleGuestChange('adults', 'increment');
    });
  
    adultsMinus.addEventListener('click', function() {
      handleGuestChange('adults', 'decrement');
    });
  
    childrenPlus.addEventListener('click', function() {
      handleGuestChange('children', 'increment');
    });
  
    childrenMinus.addEventListener('click', function() {
      handleGuestChange('children', 'decrement');
    });
  
    petsPlus.addEventListener('click', function() {
      handleGuestChange('pets', 'increment');
    });
  
    petsMinus.addEventListener('click', function() {
      handleGuestChange('pets', 'decrement');
    });
  
    // Event listener for search button
    searchBtn.addEventListener('click', function() {
      if (!checkInDate || !checkOutDate) {
        alert('Please select check-in and check-out dates');
        return;
      }
  
      const checkInFormatted = formatDateForUrl(checkInDate);
      const checkOutFormatted = formatDateForUrl(checkOutDate);
      const guestsFormatted = `${guests.children},${guests.adults},${guests.pets}`;
  
      const url = `https://www.campspot.com/book/carterville-acres/search/${checkInFormatted}/${checkOutFormatted}/guests${guestsFormatted}/list`;
  
      // Open the URL in a new tab
      window.open(url, '_blank');
    });
  
    // Close guests popover when clicking outside
    document.addEventListener('click', function(event) {
      if (!guestsBtn.contains(event.target) && !guestsPopover.contains(event.target)) {
        guestsPopover.classList.remove('active');
      }
    });
  
    // Initialize guests text and counter buttons
    updateGuestsText();
    updateCounterButtons();
  });