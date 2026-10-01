
export class LoginPage{

constructor(page){
    this.page = page
    this.usernameField = page.locator('[id="user-name"]')
    this.passwordField = page.locator('[id="password"]')
    this.loginButton   = page.locator('[id="login-button"]')
    this.productHead  = page.locator('[class="title"]')
    this.errorMsg      = page.locator('//h3[@data-test="error"]')

}
 //open a browser
 async navigate(){
 await this.page.goto('https://www.saucedemo.com/')   
 }

//enter username
async enterUsername(user){
    await this.usernameField.fill(user)
}

//enter password
async enterPassword(pass){
    await this.passwordField.fill(pass)

}

//user cliclin on login button

async clickOnLogin(){
    await this.loginButton.click()
}

 // then verify dashboard or error msgs

  async verifyDashboard(){

    const message = await this.errorMsg
if(await message.isVisible()){
    console.log(await this.errorMsg.textContent())
}
else{
    console.log(await this.productHead.textContent() , "is visible")
}
 
}
    
}
