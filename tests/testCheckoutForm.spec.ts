import { test } from '@playwright/test'
import  { AccountLoginPage } from "../page_object/accountLoginPage"
import  { CategoryMenuPage } from "../page_object/categoryMenuPage"
import  { GuestCheckoutFormPage } from "../page_object/guestCheckoutFormPage"
import  { HeaderstripPage } from "../page_object/headerstripPage"
import  { ProductPage } from "../page_object/productPage"
import  { ShoppingCartPage } from "../page_object/shoppingCartPage"
import * as guestCheckoutFormTestdata from "../data/guestCheckoutForm.json"
import * as headerstripTestdata from "../data/headerstrip.json"

test.beforeEach(async ({ page }) => {
    let accountLoginPage = new AccountLoginPage(page)
    let categoryMenuPage = new CategoryMenuPage(page)
    let headerstripPage = new HeaderstripPage(page)
    let productPage = new ProductPage(page)
    let shoppingCartPage = new ShoppingCartPage(page)
    
    await categoryMenuPage.navigate()
    await headerstripPage.typeTextIntoSearchEngine(headerstripTestdata.makeup.lips[0])
    await headerstripPage.clickSearchLogo()
    await productPage.clickAddToCart()
    await shoppingCartPage.clickCheckoutButton()
    await accountLoginPage.checkAccountGuestRadioButton()
    await accountLoginPage.clickContinueButton()
})


test.describe('Tests for guest checkout form', () => {
  test('Check field first name validation', async ({ page }) => {
    let guestCheckoutFormPage = new GuestCheckoutFormPage(page)
      
    await guestCheckoutFormPage.clickContinueButton()
    await guestCheckoutFormPage.checkFirstNameMessageError(true, guestCheckoutFormTestdata.errorMessages.boundaryValues3_32)
    await guestCheckoutFormPage.typeFirstName(guestCheckoutFormTestdata.boundaryValues.two)
    await guestCheckoutFormPage.clickContinueButton()
    await guestCheckoutFormPage.checkFirstNameMessageError(true, guestCheckoutFormTestdata.errorMessages.boundaryValues3_32)
    await guestCheckoutFormPage.typeFirstName(guestCheckoutFormTestdata.boundaryValues.thirtyThree)
    await guestCheckoutFormPage.clickContinueButton()
    await guestCheckoutFormPage.checkFirstNameMessageError(true, guestCheckoutFormTestdata.errorMessages.boundaryValues3_32)
    await guestCheckoutFormPage.typeFirstName(guestCheckoutFormTestdata.boundaryValues.three)
    await guestCheckoutFormPage.clickContinueButton()
    await guestCheckoutFormPage.checkFirstNameMessageError(false, null)
  })

  test('Check field email validation', async ({ page }) => {
    let guestCheckoutFormPage = new GuestCheckoutFormPage(page)

    await guestCheckoutFormPage.clickContinueButton()
    await guestCheckoutFormPage.checkEmailMessageError(true, guestCheckoutFormTestdata.errorMessages.invalidEmail)
    await guestCheckoutFormPage.typeEmail(guestCheckoutFormTestdata.invalidEmail)
    await guestCheckoutFormPage.clickContinueButton()
    await guestCheckoutFormPage.checkEmailMessageError(true, guestCheckoutFormTestdata.errorMessages.invalidEmail)
    await guestCheckoutFormPage.typeEmail(guestCheckoutFormTestdata.email)
    await guestCheckoutFormPage.clickContinueButton()
    await guestCheckoutFormPage.checkEmailMessageError(false, null)
  })

  test('Check field Region/State validation', async ({ page }) => {
    let guestCheckoutFormPage = new GuestCheckoutFormPage(page)

    await guestCheckoutFormPage.clickContinueButton()
    await guestCheckoutFormPage.checkZoneMessageError(true, guestCheckoutFormTestdata.errorMessages.invalidRegion)
    await guestCheckoutFormPage.selectCountry(guestCheckoutFormTestdata.country)
    await guestCheckoutFormPage.selectZone(guestCheckoutFormTestdata.zone)
    await guestCheckoutFormPage.clickContinueButton()
    await guestCheckoutFormPage.checkZoneMessageError(false, null)
  })  
})
