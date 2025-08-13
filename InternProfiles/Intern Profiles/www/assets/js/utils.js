/*
function that takes time string and returns the number of years, months, days etc
*/

function timeAgo(inputDate) {
    // Parse the input string as a date
    const input = new Date(inputDate);
    const now = new Date();
    
    // Ensure input date is valid
    if (isNaN(input)) {
      return "Invalid date";
    }
  
    // Calculate the difference in milliseconds
    const diffInMs = now - input;
  
    // Constants for time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const weeks = day * 7;
    const month = day * 30; // Approximation
    const year = month * 12;
  
    // Calculate time difference
    const years = Math.floor(diffInMs / year);
    const months = Math.floor((diffInMs % year) / month);
    const days = Math.floor((diffInMs % month) / day);
    const hours = Math.floor((diffInMs % day) / hour);
    const minutes = Math.floor((diffInMs % hour) / minute);
    const seconds = Math.floor((diffInMs % minute) / second);
  
    // Format the result
    let result = '';
    if (years > 0) result += `${years} year${years > 1 ? 's' : ''} `;
    else if (months > 0) result += `${months} month${months > 1 ? 's' : ''} `;
    else if (days > 0) result += `${days} day${days > 1 ? 's' : ''} `;
    else if (hours > 0) result += `${hours} hour${hours > 1 ? 's' : ''} `;
    else if (minutes > 0) result += `${minutes} min${minutes > 1 ? 's' : ''} `;
    else if (seconds > 0 || result === '') result += `${seconds} sec${seconds > 1 ? 's' : ''}`;
  
    return result.trim();
  }
  
  


// JavaScript function to add loader at the top of the page
function addLoader() {
  // Injecting the CSS dynamically to the head
  const css = `
      /* Spinner Loader */
      .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid rgb(240, 121, 8);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
      }

      @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
      }

      /* Full-page overlay for loader */
      .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.72);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
      }
  `;
  
  // Create a <style> element
  const styleElement = document.createElement('style');
  styleElement.innerHTML = css;

  // Append the <style> element to the head of the document
  document.head.appendChild(styleElement);

  // Create the overlay with the spinner
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  
  overlay.appendChild(spinner);
  document.body.appendChild(overlay);
}


// JavaScript function to remove the loader
function removeLoader() {
  const overlay = document.querySelector('.overlay');
  if (overlay) {
      overlay.remove();
  }
}


function showMessage(type, title, description,target=null) {
  // Injecting dynamic CSS styles for success and error messages
  const css = `
      /* Overlay style */
      .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
      }

      /* Message Box */
      .message-box {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          width: 350px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      /* Title style */
      .message-box h2 {
          font-size: 24px;
          margin-bottom: 10px;
      }

      /* Description style */
      .message-box p {
          font-size: 16px;
          margin-bottom: 20px;
      }

      /* Success and Error Icons */
      .icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
          color: white;
          margin: 20px auto;
      }

      /* Success styles */
      .success {
          background-color: #28a745; /* Green */
      }

      /* Error styles */
      .error {
          background-color: #dc3545; /* Red */
      }

      /* Button styles */
      .btn {
          background-color: #3498db;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 20px;
      }

      .btn:hover {
          background-color: #2980b9;
      }

      /* Close button specific styles */
      .close-btn {
          background-color: #e74c3c; /* Red */
      }

      .close-btn:hover {
          background-color: #c0392b;
      }
  `;

  // Create a <style> element to inject the CSS
  const styleElement = document.createElement('style');
  styleElement.innerHTML = css;
  document.head.appendChild(styleElement);

  // Find the overlay and replace spinner with error message
  const overlay = document.querySelector('.overlay');
  if (overlay) {
      // Clear the spinner
      overlay.innerHTML = '';
  }else{
    // Create the overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
  }
  // Create the message box container
  const messageBox = document.createElement('div');
  messageBox.classList.add('message-box');

  // Create the icon based on the message type (success or error)
  const icon = document.createElement('div');
  icon.classList.add('icon');

  if (type === 'success') {
      icon.classList.add('success');
      icon.innerHTML = '&#10003;'; // Tick mark for success
  } else if (type === 'error') {
      icon.classList.add('error');
      icon.innerHTML = '&#33;'; // Exclamation mark for error
  }

  // Add title and description
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  // Add buttons (Go to Home for success, Close for error)
  const button = document.createElement('button');
  button.classList.add('btn');
  if (type === 'success') {
      if(target != null) {
        button.textContent = 'Continue';
        button.onclick = function() {
            window.location.href = target; 
        };
      }else {
          button.textContent = 'Go to Home';
          button.onclick = function() {
              window.location.href = 'home.html'; // Go to home page
          };
        }
  } else if (type === 'error') {
      button.textContent = 'Close';
      button.classList.add('close-btn');
      button.onclick = function() {
          overlay.remove(); // Remove overlay
      };
  }

  // Append the icon, title, description, and button to the message box
  messageBox.appendChild(icon);
  messageBox.appendChild(titleElement);
  messageBox.appendChild(descriptionElement);
  messageBox.appendChild(button);

  // Append the message box to the overlay
  overlay.appendChild(messageBox);

  // Append the overlay to the body
  document.body.appendChild(overlay);
}



// Function to get query parameters from the URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}