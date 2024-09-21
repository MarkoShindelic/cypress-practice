//const basePage = require('./basePage')
import { BasePage } from "./basePage"


 export class CheckboxPage extends BasePage {


    //const checkbox1 = cy.get('#checkboxes > :nth-child(1)')

    //get first checkbox
    checkboxOne(){
        return cy.get('#checkboxes > :nth-child(1)')
    }
    
}

