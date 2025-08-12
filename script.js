// Moving Organizer JavaScript

// Sample data for demonstration
let items = [
    {item: "Samsung 50' TV", label: "AA1", category: "Electronics", owner: "W"},
    {item: "Cooking Books", label: "AA2", category: "Books", owner: "xcxcxcx"},
    {item: "Winter Clothes", label: "AA3", category: "Clothes", owner: "Petxcxcer"},
    {item: "Non-stick Pans", label: "AA4", category: "Kitchen", owner: "Family"},
    {item: "Dell Laptop", label: "AA5", category: "Electronics", owner: "dgdfbfgh"}
];

// Function to add a new row to the table
function addRow() {
    const table = document.getElementById('itemsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    // Item cell
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = '<input type="text" placeholder="Ex: Microwave Oven">';
    
    // Label cell
    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = '<input type="text" placeholder="Ex: AA1">';
    
    // Category cell
    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = `
        <select>
            <option value="">Select...</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothes">Clothes</option>
            <option value="Books">Books</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Decoration">Decoration</option>
            <option value="Documents">Documents</option>
            <option value="Toys">Toys</option>
            <option value="Tools">Tools</option>
            <option value="Furniture">Furniture</option>
            <option value="Shoes">Shoes</option>
            <option value="Bedsheets">Bedsheets</option>
            <option value="Dining Rooms">Dining Rooms</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Electronics">Electronics</option>
            <option value="Uniform">Uniform</option>
            <option value="Household">Household</option>
            <option value="Others">Others</option>
        </select>
    `;
    
    // Owner cell
    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = `
        <select>
            <option value="">Select...</option>
            <option value="W">W</option>
            <option value="xcxcxcx">xcxcxcx</option>
            <option value="Petxcxcer">Petxcxcer</option>
            <option value="dgdfbfgh">dgdfbfgh</option>
            <option value="Family">Family</option>
        </select>
    `;
}

// Function to update items array from table data
function updateItemsFromTable() {
    const table = document.getElementById('itemsTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    items = [];
    
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length >= 4) {
            const itemInput = cells[0].querySelector('input');
            const labelInput = cells[1].querySelector('input');
            const categorySelect = cells[2].querySelector('select');
            const ownerSelect = cells[3].querySelector('select');
            
            if (itemInput && labelInput && categorySelect && ownerSelect) {
                const item = itemInput.value.trim();
                const label = labelInput.value.trim();
                const category = categorySelect.value;
                const owner = ownerSelect.value;
                
                if (item && label && category && owner) {
                    items.push({
                        item: item,
                        label: label,
                        category: category,
                        owner: owner
                    });
                }
            }
        }
    }
}

// Function to save data to localStorage
function saveToLocalStorage() {
    updateItemsFromTable();
    localStorage.setItem('movingOrganizerItems', JSON.stringify(items));
}

// Function to load data from localStorage
function loadFromLocalStorage() {
    const savedItems = localStorage.getItem('movingOrganizerItems');
    if (savedItems) {
        items = JSON.parse(savedItems);
        populateTable();
    }
}

// Function to populate table with data
function populateTable() {
    const tbody = document.getElementById('itemsTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear existing rows
    
    items.forEach(item => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><input type="text" value="${item.item}" onchange="saveToLocalStorage()"></td>
            <td><input type="text" value="${item.label}" onchange="saveToLocalStorage()"></td>
            <td>
                <select onchange="saveToLocalStorage()">
                    <option value="">Select...</option>
                    <option value="Electronics" ${item.category === 'Electronics' ? 'selected' : ''}>Electronics</option>
                    <option value="Clothes" ${item.category === 'Clothes' ? 'selected' : ''}>Clothes</option>
                    <option value="Books" ${item.category === 'Books' ? 'selected' : ''}>Books</option>
                    <option value="Kitchen" ${item.category === 'Kitchen' ? 'selected' : ''}>Kitchen</option>
                    <option value="Decoration" ${item.category === 'Decoration' ? 'selected' : ''}>Decoration</option>
                    <option value="Documents" ${item.category === 'Documents' ? 'selected' : ''}>Documents</option>
                    <option value="Toys" ${item.category === 'Toys' ? 'selected' : ''}>Toys</option>
                    <option value="Tools" ${item.category === 'Tools' ? 'selected' : ''}>Tools</option>
                    <option value="Furniture" ${item.category === 'Furniture' ? 'selected' : ''}>Furniture</option>
                    <option value="Shoes" ${item.category === 'Shoes' ? 'selected' : ''}>Shoes</option>
                    <option value="Bedsheets" ${item.category === 'Bedsheets' ? 'selected' : ''}>Bedsheets</option>
                    <option value="Dining Rooms" ${item.category === 'Dining Rooms' ? 'selected' : ''}>Dining Rooms</option>
                    <option value="Bathroom" ${item.category === 'Bathroom' ? 'selected' : ''}>Bathroom</option>
                    <option value="Electronics" ${item.category === 'Electronics' ? 'selected' : ''}>Electronics</option>
                    <option value="Uniform" ${item.category === 'Uniform' ? 'selected' : ''}>Uniform</option>
                    <option value="Household" ${item.category === 'Household' ? 'selected' : ''}>Household</option> 
                    <option value="Others" ${item.category === 'Others' ? 'selected' : ''}>Others</option>
                </select>
            </td>
            <td>
                <select onchange="saveToLocalStorage()">
                    <option value="">Select...</option>
                    <option value="W" ${item.owner === 'W' ? 'selected' : ''}>W</option>
                    <option value="xcxcxcx" ${item.owner === 'xcxcxcx' ? 'selected' : ''}>xcxcxcx</option>
                    <option value="Petxcxcer" ${item.owner === 'Petxcxcer' ? 'selected' : ''}>Petxcxcer</option>
                    <option value="dgdfbfgh" ${item.owner === 'dgdfbfgh' ? 'selected' : ''}>dgdfbfgh</option>
                    <option value="Family" ${item.owner === 'Family' ? 'selected' : ''}>Family</option>
                </select>
            </td>
        `;
    });
    
    // Add an empty row for new entries
    addRow();
}

// Search functionality
function setupSearch() {
    document.getElementById('searchInput').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const resultDiv = document.getElementById('searchResult');
        
        if (searchTerm === '') {
            resultDiv.textContent = 'Type an item name to see its location, category and owner';
            resultDiv.className = 'result-box';
            return;
        }
        
        // Update items from table before searching
        updateItemsFromTable();
        
        const foundItem = items.find(item => 
            item.item.toLowerCase().includes(searchTerm)
        );
        
        if (foundItem) {
            resultDiv.innerHTML = `
                <strong>📦 ${foundItem.item}</strong><br>
                🏷️ Label: <strong>${foundItem.label}</strong> | 
                📂 Category: <strong>${foundItem.category}</strong> | 
                👤 Owner: <strong>${foundItem.owner}</strong>
            `;
            resultDiv.className = 'result-box found';
        } else {
            resultDiv.textContent = '❌ Item not found. Check the spelling or add the item to the table.';
            resultDiv.className = 'result-box';
        }
    });
}

// Function to export data as JSON
function exportData() {
    updateItemsFromTable();
    const dataStr = JSON.stringify(items, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'moving-organizer-data.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Function to import data from JSON
function importData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedItems = JSON.parse(e.target.result);
                if (Array.isArray(importedItems)) {
                    items = importedItems;
                    populateTable();
                    saveToLocalStorage();
                    alert('Data imported successfully!');
                } else {
                    alert('Invalid file format!');
                }
            } catch (error) {
                alert('Error reading file!');
            }
        };
        reader.readAsText(file);
    }
}

// Initialize the application when the page loads
window.addEventListener('load', function() {
    // Load saved data or use default data
    loadFromLocalStorage();
    
    // If no saved data, populate with default items
    if (items.length === 0) {
        items = [
            {item: "Samsung 50' TV", label: "AA1", category: "Electronics", owner: "W"},
            {item: "Cooking Books", label: "AA2", category: "Books", owner: "xcxcxcx"},
            {item: "Winter Clothes", label: "AA3", category: "Clothes", owner: "Petxcxcer"},
            {item: "Non-stick Pans", label: "AA4", category: "Kitchen", owner: "Family"},
            {item: "Dell Laptop", label: "AA5", category: "Electronics", owner: "dgdfbfgh"}
        ];
        populateTable();
        saveToLocalStorage();
    }
    
    // Setup search functionality
    setupSearch();
    
    // Save data when user leaves the page
    window.addEventListener('beforeunload', function() {
        saveToLocalStorage();
    });
});

// Auto-save functionality when inputs change
document.addEventListener('change', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
        saveToLocalStorage();
    }
});

// Keyboard shortcut to add new row (Ctrl + N)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        addRow();
    }
});