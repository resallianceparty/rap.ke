document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("accessibilityPanel");
  const toggleBtn = document.getElementById("accessibilityToggle");

  // Load saved preferences
  if (localStorage.getItem("contrast") === "true") {
    document.body.classList.add("high-contrast");
  }
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
  if (localStorage.getItem("fontSize")) {
    document.body.style.fontSize = localStorage.getItem("fontSize");
  }
  if (localStorage.getItem("brightness")) {
    document.body.style.filter = `brightness(${localStorage.getItem("brightness")}%)`;
    document.getElementById("brightnessSlider").value = localStorage.getItem("brightness");
  }

  // Toggle panel visibility
  toggleBtn.addEventListener("click", () => {
    panel.classList.toggle("open");
  });

  // Font size adjustment
  window.adjustFontSize = (action) => {
    let currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    if (action === "increase") currentSize += 1;
    else currentSize -= 1;
    document.body.style.fontSize = `${currentSize}px`;
    localStorage.setItem("fontSize", `${currentSize}px`);
  };

  // Contrast toggle
  window.toggleContrast = () => {
    document.body.classList.toggle("high-contrast");
    localStorage.setItem("contrast", document.body.classList.contains("high-contrast"));
  };

  // Dark mode toggle
  window.toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  };

  // Brightness control
  document.getElementById("brightnessSlider").addEventListener("input", (e) => {
    document.body.style.filter = `brightness(${e.target.value}%)`;
    localStorage.setItem("brightness", e.target.value);
  });
});
