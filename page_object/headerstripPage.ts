import { expect, Page } from '@playwright/test'

const productTotalCost = '.headerdetails .block_7 .cart_total'
const numberOfProducts = '.headerdetails .block_7 .label-orange'
const searchEngine = '#filter_keyword'
const searchLogo = '.fa-search'

export class HeaderstripPage{
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }
    async typeTextIntoSearchEngine(text: string){
        await this.page.type(searchEngine, text)
    }

    async checkNumberOfProducts(number: string){
        await expect(this.page.locator(numberOfProducts)).toHaveText(number)
    }

    async checkProductTotalCost(number: string){
        await expect(this.page.locator(productTotalCost)).toHaveText(number)
    }

    async clickSearchLogo(){
        await this.page.click(searchLogo)
    }
}