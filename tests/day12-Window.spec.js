

/**
 * Browser
 * A browser is a instance its isolated process (Chromium, Firefox, WebKit)
 * 
 * BrowserContext
 * The BrowserContext class acts like a completely fresh, brand-new incognito session.
 * 
 * Page
 * A single browser tab or popup window.
 * 
 */

import {test,expect,chromium,firefox,webkit} from "@playwright/test"

test("Handling MUlti Windows/Tabs" , async ({}) =>{

    //browser
    const browser = await chromium.launch({headless :false, slowMo : 1200, channel : 'msedge'})

    //context
    const context = await browser.newContext({permissions :[]})

    //page
    const page1 = await context.newPage()

    await page1.goto('https://www.amazon.in/')

    await page1.locator('[id="twotabsearchtextbox"]').waitFor({state : 'visible'})
    await page1.locator('[id="twotabsearchtextbox"]').fill("mobile")
    await page1.keyboard.press('Enter')
    await expect(page1).toHaveURL(/mobile/)


    const page2 = await context.newPage()

    await page2.goto('https://www.flipkart.com/')

    const popup = page2.locator('//span[text()="X"]')

    if(await popup.isVisible()){
        await popup.click()
    }

    await page2.locator('//input[@name="q"  and not(@readonly)]').fill('Laptops')
    await page2.keyboard.press('Enter')

})



test.only("Handling Multi Tabs" , async ({browser}) =>{
    test.setTimeout(90000)

    //context
    const context = await browser.newContext()   //window like incognito mode

    //page
    const page = await context.newPage()

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator('text=OrangeHRM, Inc').waitFor({state:'visible'})

    //capture a new event and get the page
    const [newPage] = await Promise.all([
        context.waitForEvent('page') ,
        page.locator('text=OrangeHRM, Inc').click()
        ])

     await newPage.waitForLoadState('load')
     
     await newPage.locator('text=Allow all').click()

     await newPage.locator('[name="EmailHomePage"]').fill("sailaja.kotina@gmail.com")

     await newPage.locator('[id="Form_submitForm_action_request"]').first().click()

     await newPage.waitForTimeout(3000)


     //same tab go back
     await newPage.goBack()

     await newPage.waitForTimeout(3000)

     //same tab go forward 
     await newPage.goForward()

     await newPage.waitForTimeout(3000)

     //refresh a current page
     await newPage.reload()

     await newPage.waitForTimeout(3000)

     //switch to previous tab

     await page.bringToFront()

     await page.getByPlaceholder('Username').fill('Admin')
     await page.getByPlaceholder('Password').fill('admin123')
     await page.getByRole('button' , {name :'Login'}).click()

     

})

