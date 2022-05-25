import { test } from '@playwright/test';
import { AccountLoginPage } from '../page_object/accountLoginPage'
import { CategoryMenuPage } from '../page_object/categoryMenuPage'
import { CheckoutConfirmationPage } from '../page_object/checkoutConfirmationPage'
import { GuestCheckoutFormPage } from '../page_object/guestCheckoutFormPage'
import { HeaderstripPage } from '../page_object/headerstripPage'
import { ProductPage } from '../page_object/productPage';
import { ShoppingCartPage } from '../page_object/shoppingCartPage';
import * as categoryMenuTestdata from "../data/categoryMenu.json"
import * as checkoutConfirmationTestdata from "../data/checkoutConfirmation.json"
import * as guestCheckoutFormTestdata from "../data/guestCheckoutForm.json"
import * as headerstripTestdata from "../data/headerstrip.json"
import * as productTestdata from "../data/product.json"

test.beforeEach(async ({ page }) => {
    let categoryMenuPage = new CategoryMenuPage(page)
    await categoryMenuPage.navigate()
})

test.describe('E2E tests', () => {
    test.only('Check if it is possible to order products', async ({ page }) => {
        let accountLoginPage = new AccountLoginPage(page)
        let categoryMenuPage = new CategoryMenuPage(page)
        let checkoutConfirmationPage = new CheckoutConfirmationPage(page)
        let guestCheckoutFormPage = new GuestCheckoutFormPage(page)
        let headerstripPage = new HeaderstripPage(page)
        let productPage = new ProductPage(page)
        let shoppingCartPage = new ShoppingCartPage(page)

        await categoryMenuPage.clickCategoryMenu(categoryMenuTestdata.apparelAndAccessories.category)
        await categoryMenuPage.clickSubCategory(categoryMenuTestdata.apparelAndAccessories.subcategory[0])
        await categoryMenuPage.clickAddToCart()
  
        await productPage.checkRadioButtonSize(productTestdata.radioButtonSize.UK_3)
        await productPage.clickAddToCart()
  
        await categoryMenuPage.clickCategoryMenu(categoryMenuTestdata.apparelAndAccessories.category)      
        await categoryMenuPage.clickSubCategory(categoryMenuTestdata.apparelAndAccessories.subcategory[1])
        await categoryMenuPage.clickAddToCart()
        
        await productPage.selectSize(productTestdata.selectSize[0])
        await productPage.clickAddToCart()
        
        await headerstripPage.typeTextIntoSearchEngine(headerstripTestdata.makeup.lips[0])
        await headerstripPage.clickSearchLogo()
        await productPage.clickAddToCart()
        await shoppingCartPage.clickCheckoutButton()
        await accountLoginPage.checkAccountGuestRadioButton()
        await accountLoginPage.clickContinueButton()
          
        await guestCheckoutFormPage.typeFirstName(guestCheckoutFormTestdata.firstName)
        await guestCheckoutFormPage.typeLastName(guestCheckoutFormTestdata.lastName)
        await guestCheckoutFormPage.typeEmail(guestCheckoutFormTestdata.email)      
        await guestCheckoutFormPage.typeAddress_1(guestCheckoutFormTestdata.address_1)
        await guestCheckoutFormPage.typeCity(guestCheckoutFormTestdata.city)
        await guestCheckoutFormPage.selectCountry(guestCheckoutFormTestdata.country)
        await guestCheckoutFormPage.selectZone(guestCheckoutFormTestdata.zone)
        await guestCheckoutFormPage.typePostode(guestCheckoutFormTestdata.postcode)
        await guestCheckoutFormPage.clickContinueButton()
  
        await checkoutConfirmationPage.checkNumberOfItems(checkoutConfirmationTestdata.numberOfProducts)
        await checkoutConfirmationPage.clickConfirmOrderButton()
        await checkoutConfirmationPage.checkMessageAboutOrder(checkoutConfirmationTestdata.message)
    })
})