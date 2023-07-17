// Get the div element to populate
var itemInfo = document.getElementById('item-info');

// Example data for each item
var itemsData = {
  item1: {
    name: 'Item 1',
    price: 9.99,
    description: 'This is the first item.',
    image: 'https://example.com/item1.jpg'
  },
  item2: {
    name: 'Item 2',
    price: 14.99,
    description: 'This is the second item.',
    image: 'https://example.com/item2.jpg'
  },
  item3: {
    name: 'Item 3',
    price: 19.99,
    description: 'This is the third item.',
    image: 'https://example.com/item3.jpg'
  }
};

// Get the current item page filename
var currentPage = window.location.pathname.split('/').pop();
var currentItemData = itemsData[currentPage];

// Populate the item information
itemInfo.innerHTML = `
  <h2>${currentItemData.name}</h2>
  <p>Price: $${currentItemData.price.toFixed(2)}</p>
  <p>${currentItemData.description}</p>
  <img src="${currentItemData.image}" alt="${currentItemData.name}">
`;