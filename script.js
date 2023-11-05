<script>
    let earthPointsData = [];

    function calculateEarthPoints() {
        const date = document.getElementById('date').value;
        const walkingHours = parseFloat(document.getElementById('walkingHours').value);
        const publicTransportHours = parseFloat(document.getElementById('publicTransportHours').value);
        const privateVehicleHours = parseFloat(document.getElementById('privateVehicleHours').value);
        const totalHours = walkingHours + publicTransportHours + privateVehicleHours;

        const walkingPoints = 100 * (walkingHours / totalHours);
        const publicTransportPoints = 50 * (publicTransportHours / totalHours);
        const privateVehiclePoints = -75 * (privateVehicleHours / totalHours);

        const totalEarthPoints = walkingPoints + publicTransportPoints + privateVehiclePoints;
        earthPointsData.push({ date, points: totalEarthPoints });

        document.getElementById('earthPoints').textContent = totalEarthPoints.toFixed(2);

        updateChart();
    }

    function updateChart() {
        const chart = document.getElementById('chart');
        chart.innerHTML = ''; // Clear previous chart

        const labels = earthPointsData.map(entry => entry.date);
        const data = earthPointsData.map(entry => entry.points);

        const ctx = document.createElement('canvas');
        chart.appendChild(ctx);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Earth Points',
                    data: data,
                    borderColor: 'blue',
                    fill: false,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        stepSize: 1,
                    },
                },
            },
        });
    }
</script>

});

