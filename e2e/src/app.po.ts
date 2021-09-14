import { browser, by, element,ExpectedConditions} from 'protractor';


export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  } 

    waitForElementClickable=function(element, timeout = 10000) {
        var until = browser.ExpectedConditions;
        browser.wait(until.elementToBeClickable(element), timeout, 'Element taking too long to appear in the DOM');
    };
    clickNewOrderButn = function () {
      const  newOrderButton = element(by.css("[href='/new-order']"));
      this.waitForElementClickable(newOrderButton);
      newOrderButton.click();
        
    }
    enterName = function () {
      const  nameTextBox=element(by.xpath("//input[@ng-reflect-name='name']"));
      this.waitForElementClickable(nameTextBox);
      return nameTextBox;        
    }
    enterEmail = function () {  
      return  element(by.xpath("//input[@ng-reflect-name='email']"));
    }
    enterAddress = function () {        
      return element(by.xpath("//input[@ng-reflect-name='address']"));        
    }
    enterContactNumber = function () {       
      return element(by.xpath("//input[@ng-reflect-name='phone']"));      
    }
    selectPizzaSize=function(value){
        element(by.xpath("//Button[normalize-space(text())='"+value+"']")).click();
    }
    selectPizzaTaste=function(value){
        for (let i=0; i<value.length; i++) {
            element(by.xpath("//Button[normalize-space(text())='"+value[i]+"']")).click();
          }        
    }
    clickPlaceOrderBtn=function(){
      return element(by.xpath("//Button[normalize-space(text())='Place Order']"));     
    }
    validateAlertText=function(value){
        let  timeoutInMilliseconds = 1000;       
        browser.wait(ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
        const myAlert = browser.switchTo().alert(); 
        expect(myAlert.getText()).toEqual(value);  
        myAlert.accept();        
    }
    clickOrderStatus=function(){
    const  status=element(by.css("[href='/order-status']"));
    this.waitForElementClickable(status);
    return status;
    }
    clickAccept=function(value){
        this.waitForElementClickable(element(by.xpath("//*[starts-with(@class,'table-body table-grid')]/div[text()='"+value+"']/following-sibling::div/span[@class='accept']")));
        element(by.xpath("//*[starts-with(@class,'table-body table-grid')]/div[text()='"+value+"']/following-sibling::div/span[@class='accept']")).click();
    }
    validateOrderComplete=function(value){
        expect(element(by.xpath("//*[starts-with(@class,'table-body table-grid')]/div[text()='"+value+"']/following-sibling::div[@class='table-col mark-completed']")).isDisplayed()).toBeTruthy();
        
    }
    validateMarkOrderComplete=function(value){
        element(by.xpath("//*[starts-with(@class,'table-body table-grid')]/div[text()='"+value+"']/following-sibling::div[@class='table-col mark-completed']")).click();
        
    }
    validateOrderStatus=function(value){
        expect(element(by.xpath("//*[starts-with(@class,'table-body table-grid')]/div[text()='"+value+"']/following-sibling::div/span[@class='completed']"))).toBeTruthy();
        
    }
}
