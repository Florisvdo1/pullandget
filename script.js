let intervalId = null;

function sendPing() {
    const status = document.getElementById('status');
    const testUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with a lightweight endpoint
    
    fetch(testUrl, {
        method: 'GET',
        cache: 'no-cache',
    })
        .then((response) => {
            if (response.ok) {
                status.textContent = `Ping successful at ${new Date().toLocaleTimeString()}`;
            } else {
                status.textContent = `Ping failed at ${new Date().toLocaleTimeString()}`;
            }
        })
        .catch(() => {
            status.textContent = `Ping error at ${new Date().toLocaleTimeString()}`;
        });
}

document.getElementById('startPing').addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(sendPing, 5000); // Adjust interval as needed
        document.getElementById('startPing').disabled = true;
        document.getElementById('stopPing').disabled = false;
    }
});

document.getElementById('stopPing').addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById('startPing').disabled = false;
        document.getElementById('stopPing').disabled = true;
        document.getElementById('status').textContent = 'Ping stopped.';
    }
});
