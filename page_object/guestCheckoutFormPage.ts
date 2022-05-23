import { expect, Page } from '@playwright/test'

const firstName = '#guestFrm_firstname'
const lastName = '#guestFrm_lastname'
const email = '#guestFrm_email'
const address_1 = '#guestFrm_address_1'
const city = '#guestFrm_city'
const country = '#guestFrm_country_id'
const zone = '#guestFrm_zone_id'
const postcode = '#guestFrm_postcode'
const continueButton = '.btn.btn-orange.pull-right.lock-on-click'

export class GuestCheckoutFormPage{
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    async typeFirstName(text: string){
        await this.page.fill(firstName, text)
    }

    async checkFirstNameMessageError(visible: boolean, messageText: string){
        if(visible == true){
            //cy.get(firstName).parents('.form-group').find('.help-block').should('contain', messageText)
            await this.page.locator(`text=${messageText}`)
        }else {
            //cy.get(firstName).parents('.form-group.has-error').should('not.exist')
            await this.page.isHidden('.form-group.has-error')
        }
    }

    async typeLastName(text: string){
        await this.page.fill(lastName, text)
    }

    async typeEmail(text: string){
        await this.page.fill(email, text)
    }

    async checkEmailMessageError(visible: boolean, messageText: string){
        if(visible == true){
            //cy.get(email).parents('.form-group').find('.help-block').should('contain', messageText)
            await this.page.locator(`text=${messageText}`)
        }else {
            //cy.get(email).parents('.form-group.has-error').should('not.exist')
            await this.page.isHidden('.form-group.has-error')
        }
    }

    async typeAddress_1(text: string){
        await this.page.fill(address_1, text)
    }

    async typeCity(text: string){
        await this.page.fill(city, text)
    }

    async selectCountry(text: string){
        await this.page.selectOption(country, { label: text })
    }

    async selectZone(text: string){
        await this.page.selectOption(zone, { label: text })
    }

    async checkZoneMessageError(visible: boolean, messageText: string){
        if(visible == true){
            //cy.get(zone).parents('.form-group').find('.help-block').should('contain', messageText)
            await this.page.locator(`text=${messageText}`)
        }else {
            //cy.get(zone).parents('.form-group.has-error').should('not.exist')
            await this.page.isHidden('.form-group.has-error')
        }
    }

    async typePostode(text: string){
        await this.page.fill(postcode, text)
    }

    async clickContinueButton(){
        await this.page.click(continueButton)
    }

}