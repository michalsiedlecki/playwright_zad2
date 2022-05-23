import { Page } from '@playwright/test'


var checkoutButton = '#cart_checkout1'
var quantity = '.table-striped .align_center [type=text]'
var update = '#cart_update'

export class ShoppingCartPage{
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }
    async clickCheckoutButton(){
        await this.page.click(checkoutButton)
    }
    
    async typeProductQuantity(number: string){
        await this.page.fill(quantity, number)
    }

    async updateShoppingCart(){
        await this.page.click(update)
    }
}