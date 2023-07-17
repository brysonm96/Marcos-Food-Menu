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

// Function to populate item information
function populateItemInfo(itemKey) {
  var itemInfo = document.getElementById('item-info');
  var currentItemData;

  if (itemKey) {
    currentItemData = itemsData[itemKey];
  } else {
    // If no item key is provided, use the current page's file name as the item key
    var currentPage = window.location.pathname.split('/').pop();
    currentItemData = itemsData[currentPage.replace('.html', '')];
  }

  // Populate the item information
  if (currentItemData) {
    itemInfo.innerHTML = `
      <h2>${currentItemData.name}</h2>
      <p>Price: $${currentItemData.price.toFixed(2)}</p>
      <p>${currentItemData.description}</p>
      <img src="${currentItemData.image}" alt="${currentItemData.name}">
    `;
  } else {
    itemInfo.innerHTML = 'Item not found.';
  }
}