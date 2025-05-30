// Copyright Update
document.querySelector('.current-year').textContent = new Date().getFullYear();

// Redirect to Linkedin by opening new window
const buttonLinkedin = document.querySelector('.linkedin');

buttonLinkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/nathapongn/');
})

// Site Logo to Home
const siteLogo = document.querySelector('.site-logo');

siteLogo.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirects to index.html
});


// Hamburger Menu for Mobile
const buttonMenuOpen = document.querySelector('.button-hamburger.open');
const buttonMenuClose = document.querySelector('.button-hamburger.close');
const mobileMenu = document.querySelector('.menu-hamburger')

buttonMenuOpen.addEventListener('click', () => {
    mobileMenu.style.transition = '300ms';
    mobileMenu.style.display = 'flex';
    mobileMenu.style.top = '0';
})

buttonMenuClose.addEventListener('click', () => {
    mobileMenu.style.transition = '300ms';
    mobileMenu.style.top = '-100%';
    setTimeout(() => {mobileMenu.style.display = 'none'}, 300);
})

// Hover Theme Toggle Button Effect
const toggleButtons = document.querySelectorAll('.button-toggle-theme');

toggleButtons.forEach(button => {

    // SVG Icon inside button
    const buttonIcon = button.querySelector('img');

    // Default outline icon svg source
    const defaultIcon = buttonIcon.getAttribute('src');

    // Button mouse enter  
    button.addEventListener('mouseover', () => {
        // Get fill icon svg from custom data attribute
        const fillIcon = buttonIcon.getAttribute('data-icon-fill');

        buttonIcon.setAttribute('src', fillIcon);
    })

    // Button mouse leave
    button.addEventListener('mouseout', () => {
        // Set to original icon
        buttonIcon.setAttribute('src', defaultIcon);
    })
})


// Video Playback
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('video.dynamic-asset[type="video/mp4"]');
  const progressBar = document.querySelector('.video-progress-bar');
  if (!video || !progressBar) return;

  const radius = progressBar.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  // Set up stroke dash values
  progressBar.style.strokeDasharray = `${circumference}`;
  progressBar.style.strokeDashoffset = `${circumference}`; // start empty

  function setProgress(percent) {
    const offset = circumference - percent * circumference;
    progressBar.style.strokeDashoffset = offset;
  }

  // Update progress on timeupdate
  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const percent = video.currentTime / video.duration;
    setProgress(percent);
  });

  // Freeze detection
  let lastTime = 0;
  setInterval(() => {
    if (!video.paused && !video.ended) {
      if (video.currentTime === lastTime) {
        progressBar.classList.add('frozen');
      } else {
        progressBar.classList.remove('frozen');
        lastTime = video.currentTime;
      }
    }
  }, 1000);
});
