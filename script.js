const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
Window.addEventListener('scroll', () => {
    let currentSection = '';
    section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#'+currentSection`) {
            link.classList.add('active');
        }
    });

const darkModeBtn = document.getElementById('darkModeBtn');
    /* CEK SAAT HALAMAN DIBUKA */
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        darkModeBtn.textContent = "☀️";
    }

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    /* CEK SAAT TOMBOL DIKLIK */
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeBtn.textContent = '🌙';
    }
});

const texts = ["Microsoft 365 Administrator", "Networking Engineer", "Office 365 Specialist", "IT Support Technician", "Help Desk Support", "System Administrator"];
let index = 0;
setInterval(() => {
    document.getElementById("typing").textContent = texts[index];
    index ++;
    if (index >= texts.length) {
        index = 0;
    }
}, 2000);

const typingElement = document.getElementById("typing");
const jobs = ["Microsoft 365", "Networking", "IT Support"];
let currentIndex = 0;
setInterval(() => {
    currentIndex++;
    if (currentIndex >= jobs.length) {
        currentIndex = 0;
    }
    typingElement.textContent = jobs[currentIndex];
}, 2500);
