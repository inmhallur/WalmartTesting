/* Home page is the main page for the site. 
*  Functions - 
*		search an item
*		select the first item
*		checkout
*		login
*		logout
*		
*/
var homepagecommands = {
	// search function - Inputs value to searchbox and click search
	search:function(searchStr){
		var self=this;
		return this.
					waitForElementVisible('@searchButton',15000, false, function(){},'Start Execution').
					isVisible('.Modal-closeButton', function(result) {
						self.click('.Modal-closeButton');
					}).
					waitForElementVisible('@searchButton',15000, true, function(){},'Enter Search String in Searchbar').
					setValue('@searchBox',searchStr).
					click('@searchButton').
					waitForElementVisible('@searchButton',15000, true, function(){},'Search Clicked');
	},
	
	// select the first item from the search results
	selectFirstItem: function(){
		return this.
					click('@firstItem').
					waitForElementVisible('@searchButton',15000, true, function(){},'Selected the first displayed item');
	},

	// checkout from Cart and proceed to checkout
	headerCartCheckout:function(){
		return this.
					waitForElementVisible('@searchButton',15000,true,function(){},"About to click Header Cart Checkout").
					click('@headerCart').
					waitForElementVisible('@proceedToCheckOut',25000,true,function(){},"Header Cart Checkout Clicked").
					click('@proceedToCheckOut');
	},
	
	//login
	login:function(useremail,userpassword){
		return this.
					waitForElementVisible('@signin',15000,true,function(){},"SignIn clicked for Account Access ").
					click('@signin').
					waitForElementVisible('@loginBtn',15000,true,function(){},"Checkout Page is successfully loaded").
					setValue('@email',useremail).
					setValue('@pwd',userpassword).
					click('@loginBtn').
					waitForElementNotVisible('@loginBtn',15000, true, function(){},"Should be logged in by now");
	}
  };


module.exports ={
	
  url: 'http://mobile.walmart.com',
  
  elements:{
	headerText:'#top',
	searchBox: '#search',
	searchButton: '.searchbar-submit',
	firstItem: '.js-product-title',
	headerCart: '.header-cart',
	signin: '.header-account-signin',
	modalClose: '.Modal-closeButton', 

	proceedToCheckOut: {
		  selector: '//a[@data-automation-id="checkout"]',
		  locateStrategy: 'xpath'
	},
	email: {
		selector: '//input[@data-automation-id="login-username"]',
		locateStrategy: 'xpath'
	},
	pwd:{
		selector: '//input[@data-automation-id="login-password"]',
		locateStrategy: 'xpath'
	},
	loginBtn: {
		selector: '//button[@data-automation-id="login-sign-in"]',
		locateStrategy: 'xpath'
	}
  },
  
  commands: [homepagecommands]
  
};