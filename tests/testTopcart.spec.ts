import { test } from '@playwright/test';
import  { CategoryMenuPage } from "../page_object/categoryMenuPage"
import  { HeaderstripPage } from "../page_object/headerstripPage"
import  { ProductPage } from "../page_object/productPage"
import  { ShoppingCartPage } from "../page_object/shoppingCartPage"
import * as headerstripTestdata from "../data/headerstrip.json"

test.beforeEach(async ({ page }) => {
    let categoryMenuPage = new CategoryMenuPage(page)
    await categoryMenuPage.navigate()
})

test.describe('E2E tests', () => {
    test('Check if number of products and costs works properly', async ({ page }) => {
        let headerstripPage = new HeaderstripPage(page)
        let productPage = new ProductPage(page)
        let shoppingCartPage = new ShoppingCartPage(page)

        await headerstripPage.typeTextIntoSearchEngine(headerstripTestdata.makeup.lips[0])
        await headerstripPage.clickSearchLogo()
        await productPage.clickAddToCart()
        await headerstripPage.checkNumberOfProducts('1')
        await headerstripPage.checkProductTotalCost('$5.00')
        await shoppingCartPage.typeProductQuantity('3')
        await shoppingCartPage.updateShoppingCart()
        await headerstripPage.checkNumberOfProducts('3')
        await headerstripPage.checkProductTotalCost('$15.00')
    })
  })