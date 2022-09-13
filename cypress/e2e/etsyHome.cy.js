/// <reference types="cypress" />

import LoginPage from '../pageObjects/login.cy'
import LogoutPage from '../pageObjects/logout.cy'

describe('Etsy Web Testing', function() {

 
  beforeEach(function(){
 

       cy.visit('http://automationpractice.com/index.php')
          
       cy.fixture('loginCredentials').then(function(data){

        this.data=data
       
            })


  })

  
  context("Login Section", function () {

it("valid userOne sign in successfully", function ()  {
  const loginPage = new LoginPage()
  const logoutPage = new LogoutPage()
  
  loginPage.signIn()
  loginPage.fillEmail(this.data.emailOne)
  loginPage.fillPassword(this.data.passwordOne)
  loginPage.submitBtn()
  cy.get('.info-account').should("exist")
  logoutPage.signOut()
})

it("valid userTwo sign in successfully", function ()  {
  const loginPage = new LoginPage()
  const logoutPage = new LogoutPage()
  
  loginPage.signIn()
  loginPage.fillEmail(this.data.emailTwo)
  loginPage.fillPassword(this.data.passwordTwo)
  loginPage.submitBtn()
  cy.get('.info-account').should("exist")
  logoutPage.signOut()
})
it("valid userThree sign in successfully", function ()  {
  const loginPage = new LoginPage()
  const logoutPage = new LogoutPage()
  
  loginPage.signIn()
  loginPage.fillEmail(this.data.emailThree)
  loginPage.fillPassword(this.data.passwordThree)
  loginPage.submitBtn()
  cy.get('.info-account').should("exist")
  logoutPage.signOut()
})
it("Invalid userThree sign in not allowed", function ()  {
  const loginPage = new LoginPage()
  
  loginPage.signIn()
  loginPage.fillEmail(this.data.emailFour)
  loginPage.fillPassword(this.data.passwordFour)
  loginPage.submitBtn()
  cy.get('#center_column > :nth-child(2)').should("exist")
})


// it("valid userTwo sign in successfully", function ()  {
//   cy.get('.login').click()
//   cy.get('#email').type(this.data.emailTwo)
//   cy.get('#passwd').type(this.data.passwordTwo)
//   cy.get('#SubmitLogin > span').click()
//   cy.get('.info-account').should("exist")
//   cy.get('.logout').click()
// })

// it("valid userThree sign in successfully ", function ()  {
//   cy.get('.login').click()
//   cy.get('#email').type(this.data.emailThree)
//   cy.get('#passwd').type(this.data.passwordThree)
//   cy.get('#SubmitLogin > span').click()
//   cy.get('.info-account').should("exist")
//   cy.get('.logout').click()
// })

// it("Invalid userFour sign in error message should be displayed ", function ()  {
//   cy.get('.login').click()
//   cy.get('#email').type(this.data.emailFour)
//   cy.get('#passwd').type(this.data.passwordFour)
//   cy.get('#SubmitLogin > span').click()
//   cy.get('#center_column > :nth-child(2)').should("exist")
  
// })
  })
})