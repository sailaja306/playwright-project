import {test,expect} from "@playwright/test"


test("Handle Radio Button & Check Box" ,async ({page}){

//browser
await page.goto("https://testautomationpractice.blogspot.com/")

//wait
await page.waitForSelector('.post-title.entry-title')

//fill 
await page.locator('[id="name"]').fill('Sailaja')
await page.waitForTimeout(2000)

//email
await page.locator('id="email"]').pressSequentially('sailaja.kotina@gmail.com')
await page.waitForTimeout(2000)


//RadioButton
await page.locator('id="female"]').check({scroll :'auto'})

//Assert
await expect(page.locator('[id="female"]')).toBeChecked()

await expect(await page.locator('[id="female"]').isChecked()).toBeTruthy()

//CheckBox
await page.locator('[id="sunday"]').check()

//Assert
await expect(page.locator('id="sunday"]')).toBeChecked()

//multiple checkBox
let mutipleChecks =[
    page.locator('id="tuesday"]'),page.locator("thursday").page.locator('input#saturday')
]

//Select checkBoxes
for (const element of multipleChecks) {
    await element.check()
    await expect(element).toBeChecked()
    await page.waitForTimeout(1500)

    //Unselect selected checkboxes
    for (const element of multipleChecks) {
        await element.uncheck()
        await expect(element).not.toBeChecked()
        await page.waitForTimeout(1500)
    }
}
})