

import { expect} from "@playwright/test"

export class OrderPage{

    constructor(page){
        this.page = page
        this.checkOutBtn = page.locator('[id="checkout"]')
        this.firstName = page.locator('[id="first-name"]')
        this.lastName = page.locator('[id="last-name"]')
        this.zipCode = page.locator('[id="postal-code"]')
        this.continueBtn = page.locator('[id="continue"]')
        this.finishBtn = page.locator('[id="finish"]')
        this.confirmMsg = page.locator('//h2')
    }

    async checkOutOpt(){
        await this.checkOutBtn.click()
    }
    async verifyUrl1(){
        await expect(this.page).toHaveURL(/checkout-step-one/)
    }
    async detailsFill(firstName ,lastName,zipCode){
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.zipCode.fill(zipCode)
        await this.continueBtn.click()
        
    }
    async verifyUrl2(){
        await expect(this.page).toHaveURL(/checkout-step-two/)

    }
    async clickOnFinish(){
        await this.finishBtn.click()
    }
    async verifyConfirmation(){
        await expect(this.confirmMsg).toHaveText('Thank you for your order!')
    }
    async takeScreenshot(){
        await this.page.screenshot({path : 'images/ '+ 'sauceDemo-OrderConfirmation.png'})
    }
}






