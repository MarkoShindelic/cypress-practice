import { BasePage } from "./basePage";

export class SercurePage extends BasePage{

    //get login message
    loginMsg(){
        return cy.get('#flash')
    }

    //get login button
    logoutBtn(){
        return cy.get('.radius')
    }

}