// Example data for each item
var itemsData = {
  item1: {
    name: 'Meat Lovers Pizza',
    price: 11.99,
    description: 'Pizza topped with various italian meats.',
    image: 'https://images.unsplash.com/photo-1677027472626-c7c40c74ac6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  item2: {
    name: 'Spaghetti Carbonara',
    price: 8.99,
    description: 'Spaghetti Carbonara.',
    image: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
  },
  item3: {
    name: 'Calzone',
    price: 9.99,
    description: 'Calzone.',
    image: 'https://images.unsplash.com/photo-1628824851008-ec3ab4b45527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80'
  }
};

// Function to populate item information
function populateItemInfo(itemKey) {
  var itemInfo = document.getElementById('item-info');
  var currentItemData = itemsData[itemKey];

  // Check if item data exists
  if (currentItemData) {
    var itemHTML = `
      <h2>${currentItemData.name}</h2>
      <p>Price: $${currentItemData.price.toFixed(2)}</p>
      <p>${currentItemData.description}</p>
      <img src="${currentItemData.image}" alt="${currentItemData.name}">
    `;
    itemInfo.innerHTML = itemHTML;
  } else {
    itemInfo.innerHTML = 'Item not found.';
  }
}

// Get the current page's file name
var currentPage = window.location.pathname.split('/').pop().replace('.html', '');

// Populate item information based on the current page
populateItemInfo(currentPage);