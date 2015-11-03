# WalmartTesting
End to End Walmart Test Automation based on Nightwatch.js and Selenium WebDriver Standalone Server

<h3>Requirements:</h3>
<li>Download the selenium server jar file selenium-server-standalone-2.x.x.jar from the Selenium releases page: https://selenium-release.storage.googleapis.com/index.html <BR/>
<li>Install Nightwatch and Node.js referring to https://github.com/nightwatchjs/nightwatch <BR/><BR/>

<h3> Execute Test Automation </h3>
<li>Verify the driver locations are all correct in nightwatch.json
<li> Execute from command line/ CI tools > nightwatch --env chrome

<h3> Approach and Overview </h3>
<h4> Technical Choice </h4>
<li>Selenium Webdriver is the most robust and reliable choice for seamless portablity across various browsers (Chrome, Safari, IE, Firefox etc) and devices(android and ios).
<li>NightWatch.js is one of the best javascript frameworks based on Node.js used for Selenium Webdriver based testing. 
Even though I am more comfortable with Automation framework implementation in Java, I chose to try my hands on with Nightwatch.js as I understood from  Chitra Nightwatch.js is the target state for our team.

<h4>Whats the design benefits?</h4>
<li>Page objects model - Encapsulation of elements and the methods closer in objects</li>
<li>Reusable methods - Employed Randomization of search string, dynamic validation of number of elements</li>
<li>Accomodating Alternate Flows -  Clicking Modal Window if present, Selecting Product Variant if presented</li>

<h4>Whats Pending?</h4>
<li>Dynamic Selection of the Product Variant - If the variant is not presented (E.g. tv), it counts this as a failed assertion</li>
<li>More Assertions like comparing the product names, Logout functionality - Did not implement just for the lack of time</li>
<li>Parallelization of these test cases with different data instead of randomization </li>
<li>Testing completed in Firefox and Chrome. Testing in Safari, Android and iOS is pending</li>


    
