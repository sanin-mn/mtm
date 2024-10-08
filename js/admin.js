// admin.js

// --------- Toggle button -------- 

// Select DOM elements
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Function to toggle sidebar and overlay
const toggleSidebarFunction = () => {
    const isActive = sidebar.classList.toggle('active');
    overlay.classList.toggle('active', isActive);
    toggleButton.setAttribute('aria-expanded', isActive);
};

// Event listener for toggle button
toggleButton.addEventListener('click', toggleSidebarFunction);

// Event listener for overlay click to close sidebar
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    toggleButton.setAttribute('aria-expanded', false);
});


// --------- Chart -------- 

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleSidebar");

    toggleButton.addEventListener("click", function () {
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px"; // Hide sidebar
            document.querySelector('.main-content').style.marginLeft = '0'; // Adjust main content
        } else {
            sidebar.style.left = "0"; // Show sidebar
            document.querySelector('.main-content').style.marginLeft = '250px'; // Adjust main content
        }
    });

    // Chart.js example
    const ctxRepairs = document.getElementById('repairsChart').getContext('2d');
    const repairsChart = new Chart(ctxRepairs, {
        type: 'line', // Change as needed (bar, line, etc.)
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Repairs',
                data: [10, 20, 15, 30, 25, 35], // Sample data
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctxRevenue, {
        type: 'bar', // Change as needed (bar, line, etc.)
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [1000, 2000, 1500, 3000, 2500, 3500], // Sample data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

