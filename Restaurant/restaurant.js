document.getElementById("search-table").addEventListener("keyup", searchFunc);

function searchFunc() {
    let filter = document.getElementById("search-table").value.toUpperCase();
    let list = document.getElementsByClassName('id');

    for (let i = 0; i < list.length; i++) {
        let tname = list[i].getElementsByClassName("tname")[0].textContent;
        if (tname.toUpperCase().indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuCardTemplate = document.querySelector("[data-menu-template]");
    const menuCardContainer = document.querySelector("[data-menu-cards-container]");
    const searchInput = document.querySelector("[data-search]");
    let menus = [];

    // Fetch menu items and display them
    fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            menus = data.map(menu => {
                const card = menuCardTemplate.content.cloneNode(true).children[0];
                const name = card.querySelector("[data-name]");
                const cost = card.querySelector("[data-cost]");
                const course=card.querySelector("[data-course")
                name.textContent = menu.name;
                cost.textContent = menu.cost;
                course.textContent = menu.course_type;
                card.draggable = true; // Make the card draggable
                card.addEventListener('dragstart', dragStart);
                menuCardContainer.append(card);
                return { name: menu.name, cost: menu.cost, course: menu.course_type, element: card };
            });
        });

    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase();
        menus.forEach(menu => {
            const isVisible = menu.name.toLowerCase().includes(value) || menu.course.toLowerCase().includes(value);
            menu.element.classList.toggle("hide", !isVisible);
        });
    });

    // Add dragover and drop event listeners to table cards
    document.querySelectorAll('.id').forEach(card => {
        card.addEventListener('dragover', dragOver);
        card.addEventListener('drop', drop);
    });

    function dragStart(event) {
        const name = event.target.querySelector("[data-name]").textContent;
        const cost = event.target.querySelector("[data-cost]").textContent;
        event.dataTransfer.setData('text/plain', JSON.stringify({ name, cost }));
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const itemData = JSON.parse(event.dataTransfer.getData('text/plain'));
        const tableCard = event.target.closest('.id');
        const tableId = tableCard.dataset.table;
        addMenuItemToTable(tableId, itemData);
        updateTableCard(tableCard, tableId);
    }

    function addMenuItemToTable(tableId, itemData) {
        if (!window.orders) {
            window.orders = {};
        }
        if (!window.orders[tableId]) {
            window.orders[tableId] = [];
        }
        window.orders[tableId].push(itemData);
    }

    // function updateTableCard(tableCard, tableId) {
    //     const order = window.orders[tableId];
    //     const totalItems = order.length;
    //     const totalPrice = order.reduce((sum, item) => sum + parseFloat(item.cost), 0).toFixed(2);
    //     tableCard.querySelector('.titems').innerHTML = `Rs.${totalPrice} | Total items:${totalItems}`;
    // }
});

document.querySelectorAll('.id').forEach(tableCard => {
    tableCard.addEventListener('click', openTableModal);
});

// Function to open modal and populate order details
function openTableModal(event) {
    const tableId = event.currentTarget.dataset.table;
    const modal = document.getElementById('tableModal');
    const tableHead = document.getElementById('table-head');
    const orderDetailsBody = document.getElementById('orderDetailsBody');
    const totalAmountElement = document.getElementById('totalAmount');
    // Update modal title
    tableHead.firstElementChild.textContent = `Table-${tableId} | Order Details`;

    // Clear previous order details
    orderDetailsBody.innerHTML = '';
    const existingItems = {};

    // Populate order details if exists in window.orders
    let s = 0;
    let totalAmount = 0;
    if (window.orders && window.orders[tableId]!='0') {
        window.orders[tableId].forEach((item, index) => {
            totalAmount += parseFloat(item.cost) * (item.servings || 1);
            if (existingItems[item.name]) {
                // Update the existing row's quantity
                const quantityCell = existingItems[item.name].querySelector('td:nth-child(4) span');
                let currentQuantity = parseInt(quantityCell.textContent);
                currentQuantity += item.servings || 1;
                quantityCell.textContent = currentQuantity;
                // i=i+parseInt(item.cost);
            } else {
                // Create a new row for the item
                s = s + 1;
                const row = document.createElement('tr');
                row.setAttribute('data-item', item.name);
                row.innerHTML = `
                    <td>${s}</td>
                    <td>${item.name}</td>
                    <td>${item.cost}</td>
                    <td>
                        <button onclick="changeServing(${tableId}, ${index}, -1)">-</button>
                        <span>${item.servings || 1}</span>
                        <button onclick="changeServing(${tableId}, ${index}, 1)">+</button>
                    </td>
                    <td><button onclick="deleteItem(${tableId}, ${index})">Delete</button></td>
                `;
                orderDetailsBody.appendChild(row);
                existingItems[item.name] = row;
                // i=i+parseInt(item.cost);
            }
        });
        // document.getElementById('totalAmount').innerHTML=i;
    }
    totalAmountElement.textContent = totalAmount.toFixed(2);

    // Show the modal
    modal.classList.add('active');
    // document.getElementById('overlay').classList.add('active');
    console.log('inside table');
}

// Function to change servings of an item
function changeServing(tableId, itemIndex, change) {
    if (!window.orders[tableId][itemIndex].servings) {
        window.orders[tableId][itemIndex].servings = 1;
    }
    window.orders[tableId][itemIndex].servings += change;
    if (window.orders[tableId][itemIndex].servings < 1) {
        window.orders[tableId][itemIndex].servings = 1;
    }
    updateTableCard(document.querySelector(`[data-table="${tableId}"]`), tableId);
    updateTotalAmount(tableId);
    openTableModal({currentTarget: document.querySelector(`[data-table="${tableId}"]`)});
}

// Function to update the total amount in the modal
function updateTotalAmount(tableId) {
    const totalAmountElement = document.getElementById('totalAmount');
    const totalAmount = window.orders[tableId].reduce((total, item) => total + item.cost * (item.servings || 1), 0);
    totalAmountElement.textContent = totalAmount.toFixed(2);
}

// Function to delete an item from order details
function deleteItem(tableId, itemIndex) {
    if (window.orders[tableId]) {
        window.orders[tableId].splice(itemIndex, 1);
        updateTableCard(document.querySelector(`[data-table="${tableId}"]`), tableId);
        updateTotalAmount(tableId); 
        openTableModal({currentTarget: document.querySelector(`[data-table="${tableId}"]`)});
    }
}

// Event listener to close the modal
document.querySelector('.close').addEventListener('click', closeModal);

// Function to close the modal
function closeModal() {
    document.getElementById('tableModal').classList.remove('active');
    // document.getElementById('overlay').classList.remove('active');
}

// Function to update the summary on the table card
function updateTableCard(tableCardElement, tableId) { 
    const tableOrders = window.orders[tableId];
    let totalServings = 0;

    // Check if tableOrders is defined
    if (tableOrders) {
        // Calculate total servings
        totalServings = tableOrders.reduce((sum, order) => sum + (order.servings || 1), 0);
    }
    const totalItems = tableOrders ? tableOrders.length : 0;
    const totalCost = tableOrders ? tableOrders.reduce((total, item) => total + item.cost * (item.servings || 1), 0) : 0;
    tableCardElement.querySelector('.titems').textContent = `Rs.${totalCost} | Total items:${totalServings}`;
    // document.getElementById('totalAmount').textContent=totalCost;
    // console.log(totalCost);
}

document.getElementById('generateBill').addEventListener('click', generateBill);

function generateBill() {
    const tableId = document.getElementById('table-head').firstElementChild.textContent.split('-')[1].split(' ')[0];
    
    // Assuming you calculate totalAmount somewhere in your code
    const totalAmount = calculateTotalAmount(tableId); // Replace with your actual calculation logic
    
    // Update the totalAmount element in the footer
    const totalAmountElement = document.getElementById('totalAmount');
    totalAmountElement.textContent = totalAmount;

    // Implement billing logic here, such as sending data to a server or printing a receipt
    alert(`Bill generated for Table ${tableId}. Total amount: Rs. ${totalAmount}`);
    
    // Clear the table data
    delete window.orders[tableId];
    
    // Update the table card
    const tableCard = document.querySelector(`[data-table="${tableId}"]`);
    updateTableCard(tableCard, tableId);
    
    // Close the modal
    closeModal();
}

function calculateTotalAmount(tableId) {
    // Example logic, replace with your actual calculation
    return window.orders[tableId] ? window.orders[tableId].reduce((total, item) => total + item.cost * (item.servings || 1), 0) : 0;
}