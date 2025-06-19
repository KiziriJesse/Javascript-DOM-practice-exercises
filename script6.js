const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

        // Function to toggle the theme
        function toggleTheme() {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            themeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        }

        // Function to apply the saved theme from localStorage
        function applySavedTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                body.classList.add('dark-mode');
                themeToggle.textContent = 'Switch to Light Mode';
            } else {
                body.classList.remove('dark-mode');
                themeToggle.textContent = 'Switch to Dark Mode';
            }
        }

        // Add event listener to the theme toggle button
        themeToggle.addEventListener('click', toggleTheme);

        // Apply the saved theme on page load
        applySavedTheme();