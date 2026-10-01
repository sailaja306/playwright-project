
import {test , expect} from "@playwright/test"

test("Handling SauceDemo" , async function ({page}) {

    //browser
    await page.goto('https://www.saucedemo.com/')
    
//validate page title
await expect(page).toHaveTitle('Swag Labs')
  
//username and password
await page.locator('#user-name').fill('standard_user')

await page.locator('#password').fill('secret_sauce')

// login button
await page.locator('#login-button').click()

//validate dashboard
await expect(page.getByText('Products')).toBeVisible()

//select a product
await page.locator('//div[text()="Sauce Labs Backpack"]').first().click()

//select on cart option
await page.locator('.shopping_cart_link').click()

//handle checkout flow
await page.locator('#checkout').click()

//Fill the fake firstname, lastname,zipcode

await page.locator('#first-name').fill('Sailaja')
await page.locator('#last-name').fill('Test')
await page.locator('#postal-code').fill('60005')
await page.locator('#continue').click()

//Verify Checkout Overview
await expect(page.locator('.title')).toHaveText('Checkout: Overview')

//Finally click on Finish option
await page.locator('//button[@id="finish"]').click()

//verify the successful display message
await expect(page.getByText('Thank you for your order!')).toBeVisible()


})
