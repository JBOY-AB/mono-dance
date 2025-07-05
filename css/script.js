document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-button');
  const icon = toggleBtn.querySelector('i');
  const darkClass = 'dark-mode';

  function setDarkMode(on) {
    document.body.classList.toggle(darkClass, on);
    icon.classList.toggle('fa-moon', !on);
    icon.classList.toggle('fa-sun', on);
  }

  // Load mode from localStorage
  const darkPref = localStorage.getItem('darkMode') === 'true';
  setDarkMode(darkPref);

  toggleBtn.addEventListener('click', function () {
    const isDark = document.body.classList.toggle(darkClass);
    icon.classList.toggle('fa-moon', !isDark);
    icon.classList.toggle('fa-sun', isDark);
    localStorage.setItem('darkMode', isDark);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.getElementById('scroll');
  const secondSection = document.querySelectorAll('section')[0]; // second section on the page

  function toggleScrollBtn() {
    if (!scrollBtn || !secondSection) return;
    const sectionTop = secondSection.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY + 10 >= sectionTop) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  }

  window.addEventListener('scroll', toggleScrollBtn);
  toggleScrollBtn(); // Initial check
});






var countDown = new Date("August 3, 2025 23:59:59").getTime();

var x = setInterval(function (){
var now = new Date().getTime();
var distance = countDown - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor(distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
var mintues = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
var seconds = Math.floor(distance % (1000 * 60 ) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = mintues;
document.getElementById("seconds").innerHTML = seconds;


if (distance <= 0){
  clearInterval(x);
  document.getElementById("countdown").innerHTML = "Happy birthday";
}




}, 1000) ;