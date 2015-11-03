module.exports = {
	
  'Walmart EndToEndCheckoutProcess' : function (client) {
	    //Test data is retrieved from global test settings file
		var data=client.globals;
		
		// Randomize the search criteria so that the same test case can be reused for different item searches
		var searchString = data.searchOptions[Math.floor(Math.random()*data.searchOptions.length)]
		console.log('Randomized SearchString for this test is '+searchString);
		
		//Maximize
		client.maximizeWindow();
		console.log('Window Maximized');
		
		//Homepage - Navigage - Search for the randomized string - Select the first Item
		 client.page.homepage().navigate().
								assert.containsText('@headerText', 'Walmart','HomePage Loaded - Verified by checking headertext containing Walmart').
								search(searchString).
								selectFirstItem();
								
		// Itempage - getItemDetails - Add the item to cart
		 client.page.itempage().getItemDetails().
								addToCart();//.
								
		// Home Page - Navigate - Checkout from header - Login
		client.page.homepage().navigate().
								login(data.customerEmail, data.customerPassword).
								headerCartCheckout();
								
		// Checkoutpage - checkoutshipping - to home - pay - verify item in cart and remove from cart		
		client.page.checkoutpage().checkOutProcessShipOrPick().
								checkOutProcessShipToHome().
								checkOutProcessPayments().
								validateNumberOfItemsinCart(1).
								removeItemFromCart().
								validateNumberOfItemsinCart(0);
		//Logout
		/*client.page.homepage().navigate().
								logout();*/
		client.end();
  }
};