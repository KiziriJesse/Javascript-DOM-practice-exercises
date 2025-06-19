 // Get ID's to the text area and the counter
        const textArea = document.getElementById('text-area');
        const counter = document.getElementById('counter');

        // Set the maximum character limit
        const maxChars = 200;

        // Function to update the character counter
        function updateCounter() {
            const currentLength = textArea.value.length;
            const remainingChars = maxChars - currentLength;
            counter.textContent = `${remainingChars} characters remaining`;

        // Change color if the limit is exceeded
            if (remainingChars <= 0) {
                counter.style.color = 'red';
                textArea.value = textArea.value.substring(0, maxChars); // Trims the text to the max limit
            } else {
                counter.style.color = '#555';
            }
        }

        // Add event listener to the text area to update the counter in real-time
        textArea.addEventListener('input', updateCounter);

        // Initialize the counter
        updateCounter();