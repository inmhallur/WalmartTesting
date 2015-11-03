/* Checkout page is used to checkout functionality
*	Functions - 
*		checkOutProcessShipOrPick
*		checkOutProcessShipToHome
*		checkOutProcessPayments
*		removeItemFromCart
*		validateNumberOfItemsinCart
*/
var checkoutpagecommands = {
	// Selects Shipping from ship or pick option
	checkOutProcessShipOrPick:function(){
		var self=this;				
		return this.
					waitForElementVisible('@shippingorpickupContinue',20000,true,function(){},"About to start checkout process").
					click('@shippingorpickupContinue').
					waitForElementNotVisible('@shippingorpickupContinue',20000,true, function(){},"Shipping is selected");
	},
	// Selects Ship to Home
	checkOutProcessShipToHome:function(){
		return this.
					waitForElementVisible('@cart',15000,true,function(){},"About to select Ship to Home ").
					click('.js-shipping-address-continue').
					waitForElementNotVisible('.js-shipping-address-continue',15000,true, function(){},"Ship to Home is selected");
	},
	// Verifies Payment Section
	checkOutProcessPayments:function(){
		return this.
					waitForElementVisible('@paymentSection',15000,true,function(){},"About to Verify Payment section ").
					assert.containsText('@paymentSection',"Card information", "Payment Section is Present").
					waitForElementVisible('@cart',15000,true,function(){},"Go back to the cart ");
	},

	// Removes An Item From Cart
	removeItemFromCart:function(){
		
		return this.
					waitForElementVisible('@removeFromCart',25000,true,function(){},"About to remove item from cart ").
					click('@removeFromCart');
	},

	// Validate and Assert the number of items in the cart
	// Utility Function
	validateNumberOfItemsinCart:function(number){
				var strNumberOfItems='Your cart: '+number+' item'+((number!=1)?'s.':'.');
				var self=this;
				
				return this.
						click('@cart').
						waitForElementVisible('@numOfItemsInCart',15000,true,function(){},"Item Page is Loaded").
						getText('@numOfItemsInCart',function(result){
							self.assert.containsText('@numOfItemsInCart',strNumberOfItems,"Number of Items in Cart"+ number)
						});

	}


  };

module.exports = {
	
  
  
  elements:{
	shippingorpickupContinue: {
		selector: 'button#COAC1ShpOptContBtn' 
	},
	shippingaddressContinue: {
		selector: 'button#COAC2ShpAddrContBtn'
	},
	paymentSection: {
		selector: '.credit-card-inner-section-heading'
	},
	cart: {
		selector: '.wmicon-cart'
	},
	removeFromCart: 'button#CartRemItemBtn',
	numOfItemsInCart: {
		selector: '//h3[@class="cart-list-title"][1]',
		locateStrategy: 'xpath'
	}
  },
  
  commands: [checkoutpagecommands]
};