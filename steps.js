import {Given,When,Then} from 'cucumber';

Given(/^I am on login page$/, function(){
browser.url("http://automationpractice.com/index.php");
});

When(/^I login with default user$/, function(){
browser.element("//input[@id='email']").setValue("shwetha");
browser.element("//input[@id='passwd']").setValue("Tention123");
browser.element("//button[@id='SubmitLogin']").click();

});

Then(/^I should see a homepage$/, function(){
var strUrl =browser.getUrl();
console.log("URL is : "+strUrl);

    });