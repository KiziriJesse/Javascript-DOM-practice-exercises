const searchBar = document.getElementById('search-bar');
const tableBody = document.querySelector('#data-table tbody');
//specifically targets the <tbody> element inside the table with
//  the ID data-table. This ensures selection of the exact
//  part of the table i want to manipulate.


        // Function to filter table rows based on search input
        function filterTable() {
            const searchTerm = searchBar.value.toLowerCase();
            const rows = tableBody.getElementsByTagName('tr');

            for (let row of rows) {
                const cells = row.getElementsByTagName('td');
                let found = false;

                for (let cell of cells) {
                    if (cell.textContent.toLowerCase().indexOf(searchTerm) > -1) {
                        found = true;
                        break;
                    }
                }

                row.style.display = found ? '' : 'none';
            }
        }

        // Add event listener to the search input
        searchBar.addEventListener('input', filterTable);