

import {test,expect} from "@playwright/test"

   test ("Handling Simple Alert" , async ({page}) =>{    
    //browser

    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll
    await page.locator('text=Confirmation Alert').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //event listner
    await page.on('dialog', async (a) =>{
        expect(a.type()).toEqual('alert')
        expect(a.message()).toContain('I am an alert box!')
        await page.waitForTimeout(1500)
        await a.accept()
    })
    //click
    await page.locator('[id="alertBtn"]').click()
    await page.waitForTimeout(2500)
})


test("Handling Confirm Alert" , async ({page}) =>{    

 //browser
    
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll
    await page.locator('text=Confirmation Alert').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //event listner
    await page.on('dialog', async (b) =>{
        expect(b.type()).toEqual('confirm')
        expect(b.message()).toContain('Press a button!')
        await page.waitForTimeout(1500)
       // await b.accept()
       await b.dismiss()

    })
    //click
    await page.locator('[id="confirmBtn"]').click()
    await page.waitForTimeout(2500)

})



test("Handling Promt Alert" , async ({page}) =>{    

 //browser
    
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll
    await page.locator('text=Confirmation Alert').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //event listner
    await page.on('dialog', async (c) =>{
        expect(c.type()).toEqual('prompt')
        expect(c.message()).toContain('Please enter your name')
        expect(c.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(1500)
        await c.accept('Sailaja')
    

    })
    //click
    await page.locator('[id="promptBtn"]').click()
    await page.waitForTimeout(2500)

})



