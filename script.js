window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('theme-toggle').addEventListener('click', function () {
        this.classList.toggle('dark-theme');
        this.classList.toggle('light-theme');
        document.getElementById('sun-icon').style.display = this.classList.contains('dark-theme') ? 'none' : 'inline';
        document.getElementById('moon-icon').style.display = this.classList.contains('dark-theme') ? 'inline' : 'none';
    });
});