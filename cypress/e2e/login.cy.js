import { before } from "mocha"
import Login from "../pageObjects/loginPage.js"

describe('login spec', () => {

  let userData;

  //Data Driven Test
  before(()=>{
    cy.fixture("appData").then((data)=>{
      userData=data;
    })
  })

  //Login Page POM 
  it.skip('login-pom',{defaultCommandTimeout:3000},()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM')
    const loginPage = new Login();
    loginPage.setUserName(userData.username);
    loginPage.setPassword(userData.password);
    loginPage.clickSubmit();

    loginPage.verifyLoggedName().then ((x)=>{
    let actName= x.text();
      //BDD
    expect(actName).to.equal(userData.expected);
      //TDD
    assert.equal(actName,userData.expected);

    cy.log("Login Test done!!!!!!!!!!!!!!!!!");

    })
  })


  //Custom Command Test with shadow-Dom
  it('custom-commands-test', ()=>{
    cy.visit("https://demo.nopcommerce.com/")
    //Use Custom Command 
    cy.clickLink("Apple MacBook Pro 13-inch");
   // cy.wait(3000);
    cy.get("div[class='product-name'] h1",{includeShadowDom:true})
      .should('have.text','Apple MacBook Pro 13-inch').and('contain','Apple MacBook')
    cy.log("Custom Command Test done!!!!!!!!!!!!!!!!!");
  })
})