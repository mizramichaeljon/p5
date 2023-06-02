// Get the pin-board element
const pinBoard = document.getElementById('pin-board');

function fetchDrawing() {
  // Fetch the image data from the Draw-Website
  fetch('http://localhost:3000/get-drawing')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch drawing');
      }
    })
    .then(data => {
      // Check if there is image data
      if (data.image) {
        // Clear the pin board
        pinBoard.innerHTML = '';
        
        const imgElement = document.createElement('img');
        imgElement.src = data.image;
        pinBoard.appendChild(imgElement);
  
        console.log('Drawing fetched and added to pin board');
      } else {
        // Handle the case when there's no image data
        console.error(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error case
    });
}

// Fetch the image every 5 seconds
setInterval(fetchDrawing, 5000);
