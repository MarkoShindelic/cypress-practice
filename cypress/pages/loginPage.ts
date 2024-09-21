import { BasePage } from "./basePage";

export class LoginPage extends BasePage{


    //get username field
    usernameField(){
        return cy.get('#username')
    }

    //get password field
    passwordField(){
        return cy.get('#password')
    }

    //get login button
    loginBtn(){
        return cy.get('button.radius')
    }

}