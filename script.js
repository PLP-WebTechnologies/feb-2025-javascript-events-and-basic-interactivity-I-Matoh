//  1. Interactive Button 

const magicBtn = document.getElementById('magic-btn');

const colors = ['#007acc', '#e91e63', '#4caf50', '#ff9800', '#9c27b0'];
let colorIndex = 0;

magicBtn.addEventListener('click', () => {
  // Change button text and background color cyclically
  colorIndex = (colorIndex + 1) % colors.length;
  magicBtn.style.backgroundColor = colors[colorIndex];
  magicBtn.textContent = `You clicked me! Color #${colorIndex + 1}`;
});

// Hover effect handled by CSS, but let's add a secret double-click action
magicBtn.addEventListener('dblclick', () => {
  magicBtn.textContent = "✨ Secret Double-Click Activated! ✨";
  magicBtn.style.backgroundColor = '#ff5722';
  setTimeout(() => {
    magicBtn.textContent = "Click me to change!";
    magicBtn.style.backgroundColor = colors[colorIndex];
  }, 3000);
});

//  2. Image Gallery / Slideshow 

const slideImages = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1020/600/400',
  'https://picsum.photos/id/1024/600/400'
];

const slideImg = document.getElementById('slide-img');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
let currentSlide = 0;

function showSlide(index) {
  slideImg.style.opacity = 0;
  setTimeout(() => {
    slideImg.src = slideImages[index];
    slideImg.style.opacity = 1;
  }, 300);
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slideImages.length;
  showSlide(currentSlide);
});

//  3. Accordion Tabs 

const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.contains('active');
    // Close all
    accordionBtns.forEach(b => {
      b.classList.remove('active');
      b.nextElementSibling.style.maxHeight = null;
    });
    if (!isActive) {
      btn.classList.add('active');
      const content = btn.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

//  4. Form Validation 

const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('email-feedback');
const passwordFeedback = document.getElementById('password-feedback');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time feedback for email
emailInput.addEventListener('input', () => {
  if (emailInput.validity.valueMissing) {
    emailFeedback.textContent = 'Email is required.';
  } else if (!emailRegex.test(emailInput.value)) {
    emailFeedback.textContent = 'Please enter a valid email.';
  } else {
    emailFeedback.textContent = '';
  }
});

// Real-time feedback for password
passwordInput.addEventListener('input', () => {
  if (passwordInput.validity.valueMissing) {
    passwordFeedback.textContent = 'Password is required.';
  } else if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = 'Password must be at least 8 characters.';
  } else {
    passwordFeedback.textContent = '';
  }
});

// On form submit
form.addEventListener('submit', e => {
  e.preventDefault();

  let valid = true;

  if (emailInput.value.trim() === '') {
    emailFeedback.textContent = 'Email is required.';
    valid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    emailFeedback.textContent = 'Please enter a valid email.';
    valid = false;
  } else {
    emailFeedback.textContent = '';
  }

  if (passwordInput.value.trim() === '') {
    passwordFeedback.textContent = 'Password is required.';
    valid = false;
  } else if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = 'Password must be at least 8 characters.';
    valid = false;
  } else {
    passwordFeedback.textContent = '';
  }

  if (valid) {
    alert('Form submitted successfully! 🎉');
    form.reset();
  }
});

//  5.Keypress Detection 

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    magicBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
      magicBtn.style.transform = 'scale(1)';
    }, 200);
  }
});
