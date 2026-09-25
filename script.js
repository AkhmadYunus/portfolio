console.log("Script jalan!");
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