/*
    Local authentication check for intern profiles app
    Checks token against local backend instead of external API
*/
const token = getCookie('token');
if (!token) {
    console.error("Token is missing");
    window.location.assign('login.html?' + window.location.pathname + window.location.search);
}

// Use local API base or default to same origin
const API_BASE = window.API_BASE || '';

fetch(`${API_BASE}/api/v1/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
})
.then(response => {
    if (!response.ok) {
        deleteCookie('token');
        window.location.assign('login.html?page=' + window.location.pathname + window.location.search);
        throw new Error('Token authentication failed');
    }
})
.catch(error => {
    console.error('Error during authentication:', error);
    // Handle the error (e.g., show error message to the user)
});

