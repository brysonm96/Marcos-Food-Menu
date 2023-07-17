// Get the div element to populate
var itemInfo = document.getElementById('item-info');

// Example data
var itemData = {
  name: 'Example Item',
  price: 9.99,
  description: 'This is an example item description.'
};

// Populate the div with item information
itemInfo.innerHTML = `
  <h2>${itemData.name}</h2>
  <p>Price: $${itemData.price.toFixed(2)}</p>
  <p>${itemData.description}</p>
`;