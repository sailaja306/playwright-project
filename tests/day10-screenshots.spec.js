

import {test} from "@playwright/test"

test("Handling Normal Page" , async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForTimeout(3000)

    //screen
    await page.screenshot({path :'images/' + 'VisiblePage.png'})

})


test("Handling Full Page" , async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForTimeout(3000)

    //screen
    await page.screenshot({path :'images/' + 'fullPage.jpg' , fullPage :true})
})


test("Handling Locator Page" , async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForTimeout(3000)

    //screen
    await page.locator('[name="start"]')
    .screenshot({path : 'images/' + 'locatorPage.jpeg'})

})

test("Handling Highlight Page" , async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //wait
    await page.waitForTimeout(3000)

    //screen
    const start = page.locator('[name="start"]')

    await start.scrollIntoViewIfNeeded()

    await start.highlight()
    await page.waitForTimeout(3000)

    await page.screenshot({path : 'image/' + 'highlightedArea.png'})

})