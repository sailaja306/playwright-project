

import {test , expect} from "@playwright/test"

import {readExcel}  from "../utils/excelReader"
 

test("Reading Data from Excel" , async ({page})=>{

    const data = readExcel('Sheet1')

    //const [data1,data2] = readExcel(['Sheet1' , 'Sheet2'])


//browser
await page.goto('https://www.saucedemo.com/')

//Username
await page.locator('[id="user-name"]').fill(data[0].USERNAME)

//Password
await page.locator('[id="password"]').fill(data[0].PASSWORD)

//loginbutton
await page.locator('[id="login-button"]').click()

//dashboard or verify error
await expect(page.locator('class="title"]')).toBeVisible()



})





