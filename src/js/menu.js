window.onload = function() {
    // Array of food items
    var menuItems = [
      {
        name: "Item 1",
        description: "Description of Item 1",
        price: "$10.99",
        imageUrl: "item1.jpg",
        pageUrl: "item-pages/item1.html"
      },
      {
        name: "Item 2",
        description: "Description of Item 2",
        price: "$8.99",
        imageUrl: "item2.jpg",
        pageUrl: "item-pages/item2.html"
      },
      // Add more food items here
    ];
  
    var menuList = document.getElementById("menu-list");
  
    // Loop through the menuItems array and create list items with links
    for (var i = 0; i < menuItems.length; i++) {
      var menuItem = menuItems[i];
  
      var listItem = document.createElement("li");
      var link = document.createElement("a");
  
      link.href = menuItem.pageUrl;
      link.textContent = menuItem.name;
  
      listItem.appendChild(link);
      menuList.appendChild(listItem);
    }
  };