import {test,expect} from  "@playwright/test"

test ('Handling Builtin Locators' , async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //alt
    const orangeLogo = page.getByAltText('company-branding')
    await expect(orangeLogo).toBeVisible()

    //placeholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill("admin123")

    //role
    await page.getByRole('button' , {name : " Login "}).click()

    //wait for
    await page.waitForLoadState('load')

    //text
    const username = page.locator('.oxd-userdropdown-name').textContent()
    
    await expect(username).toBeVisible()

    //lable
    await expect(page.getByLabel('Sidepanel')).toBeVisible()

    //title
    await page.getByTitle('Help').click()
 
    //test id
    // playwright.dev
})