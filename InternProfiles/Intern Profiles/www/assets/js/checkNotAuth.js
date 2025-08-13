/*
    try to get token from cookies and authenticate  it
    if success ? go to home
    else staz same page
*/


    const token = getCookie('token');  // Get the token from cookie, localStorage, or sessionStorage
    if (token) {
    fetch('https://api.digimarkconsulting.cm/api/v1/', {
    //fetch('http://localhost:3000/api/v1/', {
        method: 'GET',  // or 'POST' or any other HTTP method
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Add Bearer token in the Authorization header
        },
    })
    .then(response => {
        if (!response.ok) {
            deleteCookie('token');
            throw new Error('Token authentication failed');
        }
        window.location.assign('home.html');
    })
    .catch(error => {
    console.error('Error during authentification:', error);
    // Handle the error (e.g., show error message to the user)
    });
}
