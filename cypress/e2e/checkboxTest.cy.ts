/// <reference types="cypress" />

import { checkboxPage } from "../pages/index";

describe('first', () => { 

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
    });
    
    it('click checkbox one test', () => {
        
        checkboxPage.clickAnything(checkboxPage.checkboxOne())

        checkboxPage.checkboxOne().should('be.checked')

    });


 })