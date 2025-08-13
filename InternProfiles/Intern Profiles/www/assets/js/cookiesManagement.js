// Helper function to detect if the app is running in Cordova (native environment)
  function isCordova() {
    return (window.cordova || window.PhoneGap || window.cordovaPlugin !== undefined);
  }


// Function to set a cookie or fallback to localStorage for Cordova
function setCookie(name, value, daysToExpire = 7, path = '/') {
    if (isCordova()) {
      // Use localStorage in Cordova (fallback)
      localStorage.setItem(name, value);
    } else {
      // Use cookies in the web environment
      const expires = new Date();
      expires.setTime(expires.getTime() + (daysToExpire * 24 * 60 * 60 * 1000)); // Expiry in milliseconds
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=${path}`;
    }
  }
  
  
  // Function to get a cookie or fallback to localStorage for Cordova
function getCookie(name) {
    if (isCordova()) {
      // Fallback to localStorage in Cordova (if cookies are not accessible)
      return localStorage.getItem(name);
    } else {
      // Access cookie in the web environment
      const cookieArr = document.cookie.split(';');
      for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + '=')) {
          return decodeURIComponent(cookie.substring(name.length + 1));
        }
      }
      return null;
    }
  }

  
  // Function to delete a cookie or remove from localStorage for Cordova
function deleteCookie(name, path = '/') {
    if (isCordova()) {
      // Remove from localStorage in Cordova
      localStorage.removeItem(name);
    } else {
      // Delete cookie in the web environment
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
    }
  }
  