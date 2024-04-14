// Fetch and display images
window.onload = function() {
    fetchImages();
  };
  
  function fetchImages() {
    fetch('get_images.php')
      .then(response => response.json())
      .then(images => {
        const imagesDiv = document.querySelector('.images');
        imagesDiv.innerHTML = '';
        images.forEach(image => {
          const img = document.createElement('img');
          img.src = 'uploads/' + image.filename;
          imagesDiv.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  }
  