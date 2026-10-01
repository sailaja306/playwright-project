
import { expect } from "@playwright/test"

export class LoginPage{

constructor(page){
    this.page = page
    this.username = page.locator('[name="username"]')
    this.password = page.locator('[name="password"]')
    this.loginButton   = page.locator('button[type="submit"]')
    this.errorMsg      = page.locator('.oxd-alert-content-text')
    this.dashboard = page.getByRole('heading',{name:'Dashboard'})
}
 //open a browser
 async navigate(){
 await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')   
 }
//enter username
async enterUsername(user){
    await this.username.fill(user)
}
//enter password
async enterPassword(pass){
    await this.password.fill(pass)
}

//user clickin on login button
async clickOnLogin(){
    await this.loginButton.click()
}
 // then verify dashboard 
 async verifyDashboard(){
    await expect(this.dashboard).toBeVisible()
       console.log(await this.dashboard.textContent() , "is Visible")   
    }

  //verify error message
 async verifyError(){
   await expect(this.errorMsg).toBeVisible()
      console.log(await this.errorMsg.textContent())   
    }

}
   













