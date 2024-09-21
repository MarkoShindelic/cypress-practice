import { loginPage } from "../pages";
import { securePage } from "../pages"; 

describe('login page tests', () => { 


        beforeEach(() => {
            cy.visit(Cypress.env('URL')+'login')
        });
        
        it('login valid credentials', () => {
            
            cy.fixture('validLoginData').then(value => {
                loginPage.enterData(loginPage.usernameField(),value.username)
                loginPage.enterData(loginPage.passwordField(), value.password)
            })

            loginPage.clickAnything(loginPage.loginBtn())

            securePage.loginMsg().should('contain', 'You logged into a secure area!')
            securePage.clickAnything(securePage.logoutBtn())
            cy.get('#flash').should('contain', 'You logged out of the secure area!')
        });

        it('login invalid credentials', () => {

            cy.fixture('invalidLoginData').then(value => {
                loginPage.enterData(loginPage.usernameField(),value.username)
                loginPage.enterData(loginPage.passwordField(), value.password)
            })

            loginPage.clickAnything(loginPage.loginBtn())
            cy.get('#flash').should('contain', 'Your username is invalid!')

        });

        it('login with empty password', () => {
            
            cy.fixture('validLoginData').then(value => {
                loginPage.enterData(loginPage.usernameField(),value.username)
            })

            loginPage.clickAnything(loginPage.loginBtn())
            cy.get('#flash').should('contain', 'Your password is invalid!')

        });

        it('loging with empty username', () => {
            cy.fixture('validLoginData').then(value => {
                
                loginPage.enterData(loginPage.passwordField(), value.password)
            })

            loginPage.clickAnything(loginPage.loginBtn())
            cy.get('#flash').should('contain', 'Your username is invalid!')
        });



 })