const images = document.querySelectorAll('.carousel img');
        let currentIndex = 0;

        // Function to show the current image
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        // Function to go to the next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        // Function to go to the previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        // Add event listeners to the buttons
        document.getElementById('next-btn').addEventListener('click', nextImage);
        document.getElementById('prev-btn').addEventListener('click', prevImage);

        // Initialize the carousel
        showImage(currentIndex);