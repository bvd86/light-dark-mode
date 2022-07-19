const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Color Mode
const colorMode = (color) => {
  image1.src = `img/undraw_camping_${color}.svg`;
  image2.src = `img/undraw_beverage_${color}.svg`;
  image3.src = `img/undraw_gaming_${color}.svg`;
}

// Dark Mode
const darkMode = () => {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  colorMode('dark');
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
}

// Light Mode
const lightMode = () => {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  colorMode('light');
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
}

// Switch Theme
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
