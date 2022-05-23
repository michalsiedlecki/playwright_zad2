import { expect, Page } from '@playwright/test'

var accountGuestRadioButton = '#accountFrm_accountguest'
var continueButton = 'text=Continue'

export class AccountLoginPage{
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    async checkAccountGuestRadioButton(){
        await this.page.check(accountGuestRadioButton)
        expect(await this.page.isChecked(accountGuestRadioButton)).toBeTruthy()
    }

    async clickContinueButton(){
        await this.page.click(continueButton)
    }
}