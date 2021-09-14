import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should display welcome message', () => {
  // browser.get('http://localhost:9000/');
   browser.get('http://localhost:4401/');
  });
  it('should display welcome message', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('PizzaOrders');
  });
  it('should display welcome message', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('PizzaOrders');
  });
  const glob= new Date().toLocaleTimeString();
  it('should booked and proper message appeared',function(){      
      page.clickNewOrderButn();
      page.enterName().sendKeys("Test");
      page.enterEmail().sendKeys("a@a.com");
      page.enterAddress().sendKeys(glob)
      page.enterContactNumber().sendKeys("23456789");
      page.selectPizzaSize("Small");
      page.selectPizzaTaste(['Bacon','Pepperoni','Mushroom'])
      page.clickPlaceOrderBtn().click();
      page.validateAlertText("Order Saved!");       
      
  })
  it('should accept order and validate order status',function(){
    page.clickOrderStatus().click();      
    page.clickAccept(glob);
    page.validateOrderComplete(glob);
  })
  it('should order staus complete after marking it complete',function(){     
     page.clickOrderStatus().click(); 
     page.validateMarkOrderComplete(glob);    
     page.validateOrderStatus(glob);
  })
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
