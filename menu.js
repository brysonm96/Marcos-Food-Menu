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
    description: 'A classic Italian pasta dish with noodles tossed in a creamy sauce made with eggs, Pecorino Romano cheese, and pancetta (Italian bacon).',
    image: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
  },
  item3: {
    name: 'Fettuccine Alfredo',
    price: 8.99,
    description: 'Fettuccine noodles cooked until al dente and then tossed in a sauce made primarily of butter and Parmigiano-Reggiano cheese.',
    image: 'https://images.unsplash.com/photo-1561001070-ce11eea271b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
  },
  item4: {
    name: 'Spaghetti and Meatballs',
    price: 8.99,
    description: 'Spaghetti noodles topped with our robust tomato sauce and accompanied by authentic beef meatballs.',
    image: 'https://images.unsplash.com/photo-1610545676806-14c7ab3ce782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
  },
  item5: {
    name: 'Chicken Parmesan',
    price: 9.99,
    description: 'Breaded and fried chicken cutlet topped with tomato sauce and melted cheese.',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  item6: {
    name: 'Lasagna',
    price: 10.99,
    description: 'Stacked layers of wide pasta sheets, alternating with a variety of fillings of ground beef, tomato sauce, ricotta cheese, mozzarella cheese, and Parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1662102776673-c96490a30c80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1678&q=80'
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