/// <reference types="cypress" />

//import { CheckboxPage } from "./checkboxPage"

export class BasePage {

    
    clickAnything(obj){
        obj.click()
    }

    enterData(obj, data){
        obj.type(data)
    }


}

//module.exports = new BasePage()