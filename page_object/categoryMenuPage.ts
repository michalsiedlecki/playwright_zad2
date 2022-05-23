import { expect, Page } from '@playwright/test'


var urlContactUs = 'https://automationteststore.com/'
var addToCart = '.productcart .fa'
var apparelAndAccessories =  '#categorymenu'
var apparelAndAccessoriesCategory = '.col-md-2'

export class CategoryMenuPage{
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    async navigate(){
        await this.page.goto(urlContactUs)
    }

    async clickCategoryMenu(category: string){
        await this.page.click(`css=${apparelAndAccessories} >> text=${category}`)
    }

    async clickSubCategory(subCategory: string){
        await this.page.locator(`css=${apparelAndAccessoriesCategory} >> text=${subCategory}`).click()
    }

    async clickAddToCart(){
        await this.page.click(addToCart)
    }
}