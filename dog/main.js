
document.getElementById('fetchDog').addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {

      //display dog image
      const img = document.createElement('img');
      img.src = data.message;
      img.alt = 'A Random Dog';


      const container = document.getElementById('dogContainer');
      container.innerHTML = '';
      container.appendChild(img);
    })
    .catch(error => console.error('Error fetching dog image:', error));
});
