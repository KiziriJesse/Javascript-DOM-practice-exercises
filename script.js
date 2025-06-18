// Get IDs to the dropdowns and the text box
        const fontSizeDropdown = document.getElementById('font-size');
        const fontColorDropdown = document.getElementById('font-color');
        const fontFamilyDropdown = document.getElementById('font-family');
        const textBox = document.getElementById('text-box');

        // Add event listeners to the dropdowns
        fontSizeDropdown.addEventListener('change', function() {
            // Change the font size of the text box
            textBox.style.fontSize = this.value;
        });

        fontColorDropdown.addEventListener('change', function() {
            // Change the font color of the text box
            textBox.style.color = this.value;
        });

        fontFamilyDropdown.addEventListener('change', function() {
            // Change the font family of the text box
            textBox.style.fontFamily = this.value;
        });