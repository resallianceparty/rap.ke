// Toggle accessibility panel
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("accessibilityToggle");
  const panel = document.getElementById("accessibilityPanel");

  if (toggleButton && panel) {
    toggleButton.addEventListener("click", () => {
      panel.classList.toggle("active");
    });
  }
});

// Font resize
function adjustFontSize(action) {
  const html = document.documentElement;
  const currentSize = parseFloat(getComputedStyle(html).fontSize);

  if (action === 'increase') {
    html.style.fontSize = currentSize * 1.1 + 'px';
  } else if (action === 'decrease') {
    html.style.fontSize = currentSize * 0.9 + 'px';
  }
}

// High contrast toggle
function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}


// Brightness Control
const brightnessSlider = document.getElementById("brightnessSlider");
if (brightnessSlider) {
  brightnessSlider.addEventListener("input", (e) => {
    const brightness = e.target.value;
    document.body.style.filter = `brightness(${brightness}%)`;
  });
}

document.querySelectorAll('.mobile-dropdown .dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.parentElement;
    parent.classList.toggle('open');
  });
});

function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

