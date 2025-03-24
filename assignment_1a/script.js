document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total Sales', 'Orders', 'Customers', 'Pending Orders'],
            datasets: [{
                data: [50, 30, 15, 5], 
                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
            }]
        }
    });
});
