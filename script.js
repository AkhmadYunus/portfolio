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
