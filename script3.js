const newItemInput = document.getElementById('new-item-input');
const addBtn = document.getElementById('add-btn');
const itemList = document.getElementById('item-list');

        // Function to add a new item to the list
        function addItem() {
            const itemText = newItemInput.value.trim();
            if (itemText === '') return;

            const listItem = document.createElement('li');
            listItem.classList.add('list-item');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', () => {
                listItem.classList.toggle('completed');
            });

            const itemInput = document.createElement('input');
            itemInput.type = 'text';
            itemInput.value = itemText;
            itemInput.readOnly = true;

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                itemInput.readOnly = false;
                itemInput.focus();
            });

            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save';
            saveBtn.style.display = 'none';
            saveBtn.addEventListener('click', () => {
                itemInput.readOnly = true;
                itemInput.blur();
                saveBtn.style.display = 'none';
                editBtn.style.display = 'inline';
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                itemList.removeChild(listItem);
            });

            listItem.appendChild(checkbox);
            listItem.appendChild(itemInput);
            listItem.appendChild(editBtn);
            listItem.appendChild(saveBtn);
            listItem.appendChild(deleteBtn);

            itemList.appendChild(listItem);

            newItemInput.value = '';
        }

        // Function to initialize the list manager
        function initListManager() {
            addBtn.addEventListener('click', addItem);
            newItemInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    addItem();
                }
            });
        }

        // Initialize the list manager
        initListManager();