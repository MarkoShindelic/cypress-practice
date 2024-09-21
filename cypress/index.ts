/*Handles all the imports and exports and initilizes page bjects*/

import { BasePage } from "./basePage";
import { CheckboxPage } from "./pages/checkboxPage";
import { LoginPage } from "./pages/loginPage";
import { SercurePage } from "./pages/securePage";

export const basePage = new BasePage();
export const checkboxPage = new CheckboxPage();
export const loginPage = new LoginPage();
export const securePage = new SercurePage();
