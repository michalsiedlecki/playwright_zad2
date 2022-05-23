import { expect, Page } from '@playwright/test'

const addToCart = '.cart'
const selectSize = '#option352'
export class ProductPage{
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }
    async checkRadioButtonSize(size: string){
        await this.page.check(size)
        expect(await this.page.isChecked(size)).toBeTruthy()
    }
    
    async clickAddToCart(){
        await this.page.click(addToCart)
    }

    async selectSize(size: string){
        await this.page.selectOption(selectSize, size)
    }

}