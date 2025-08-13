/*
    try to get token from cookies and authenticate  it
    if success ? go to home
    else to to login
*/
    const token = getCookie('token');  // Get the token from cookie, localStorage, or sessionStorage
    if (!token) {
        console.error("Token is missing");
        window.location.assign('login.html?'+window.location.pathname+window.location.search);
    }

    fetch('https://api.digimarkconsulting.cm/api/v1/', {
        method: 'GET',  // or 'POST' or any other HTTP method
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Add Bearer token in the Authorization header
        },
    })
    .then(response => {
        if (!response.ok) {
            deleteCookie('token');
            window.location.assign('login.html?page='+window.location.pathname+window.location.search);
            throw new Error('Token authentication failed');
        }
    })
    .catch(error => {
    console.error('Error during authentification:', error);
    // Handle the error (e.g., show error message to the user)
    });
