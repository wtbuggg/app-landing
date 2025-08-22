document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Check for OS-level preference
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }


    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // Save the theme choice to localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
