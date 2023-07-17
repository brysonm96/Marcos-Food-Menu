// Get the div elements to populate
var imageSection = document.getElementById('image-section');
var descriptionSection = document.getElementById('description-section');

// Example data
var itemData = {
  name: 'Example Item',
  price: 9.99,
  description: 'This is an example item description.',
  image: 'https://example.com/image.jpg'
};

// Populate the image section
var image = document.createElement('img');
image.src = itemData.image;
image.alt = itemData.name;
imageSection.appendChild(image);

// Populate the description section
descriptionSection.innerHTML = `
  <h2>${itemData.name}</h2>
  <p>Price: $${itemData.price.toFixed(2)}</p>
  <p>${itemData.description}</p>
`;