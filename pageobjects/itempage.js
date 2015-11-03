/* Item page is the page displaying details of the page along with color options and allowing to add to cart. 
*  Functions - 
*		getItemDetails
*		addToCart
*		
*/

var itempagecommands = {
	//Gets Item details and prints the name of the item selected in console
	getItemDetails:function(){
		return this.waitForElementVisible('@productName',15000,true,function(){},"Item Page is Loaded").
					getText('@productName',function(result){
						console.log('Item Name selected is'+result.value);
					});
	},
	
	// Adds the selected Item to cart
	// Items might or might not have variants - Code has been written to support variant. 
	addToCart: function(){
		var self=this;
		return this.
					waitForElementVisible('@productVariantSelection',3000,false,function(result){
						if(result.value){ // Product Variant is available
							self.click('@productVariantSelection')
						}
					}).
					click('@addToCartButton').
					waitForElementVisible('@proceedToCheckOut',25000,true,function(){},"About to Add item to cart");

	}	  
  };

module.exports = {
	
  
  
  elements:{
	addToCartButton: {selector: '//button[@id="WMItemAddToCartBtn"]',
				  locateStrategy: 'xpath'
	},
	productName: '.product-name',
	productVariantSection: '.js-bot-variants-and-cta-section',
	productVariantSelection: {
		selector: '//span[@class="variant-swatch"][1]',
		locateStrategy: 'xpath'
	},
	proceedToCheckOut: {
		selector: '//a[@data-automation-id="checkout"]',
		locateStrategy: 'xpath'
	}
  },
  
  commands: [itempagecommands]

  
};