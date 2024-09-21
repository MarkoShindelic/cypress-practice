/// <reference types="cypress" />

//import { CheckboxPage } from "./checkboxPage"
//import { LoginPage } from "./pages/loginPage";

export class BasePage {

    //loginPage = new LoginPage();

    clickAnything(obj){
        obj.click()
    }

    enterData(obj, data){
        obj.type(data)
    }

}
