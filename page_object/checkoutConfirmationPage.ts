import { expect, Page } from '@playwright/test'

var confirmOrderButton = '#checkout_btn'
var products = '.table.confirm_products tr'
var loadingPayment = '#payment .alert-info .fa-refresh'
var message = '.maintext'

export class CheckoutConfirmationPage{
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }
    async checkNumberOfItems(number: number){
        await expect(this.page.locator(products)).toHaveCount(number)
    }

    async clickConfirmOrderButton(){
        await this.page.click(confirmOrderButton)
        await expect(this.page.locator(loadingPayment)).toBeHidden()
    }
    
    async checkMessageAboutOrder(text: string){
        await expect(this.page.locator(message)).toHaveText(text)
    }
}