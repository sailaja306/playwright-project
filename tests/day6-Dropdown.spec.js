import {test , expect} from '@playwright/test'

test ("Handling Dropdown " , async ({page})=>{

//Browser
await page.goto('https://testautomationpractice.blogspot.com/')

//Scroll
await page.locator('text=Country').scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)

//Select Dropdown
const dropDown = page.locator('[id="country"]')

//1.Visible
await dropDown.selectOption('India')
await page.waitForTimeout(2000)

//2.lable
await dropDown.selectOption({lable :"Japan"})
await page.waitForTimeout(2000)

//3.value
await dropDown.selectOption({value : "france"})
await page.waitForTimeout(2000)

//4.Index
await dropDown.selectOption({index :2})
await page.waitForTimeout(2000)

//Assert
await expect(page.locator('[id= "country"] option')).toHaveCount(10)
await expect((await page,$$('//select[@id="country"]//option[@value]')).length).toBe(10)


})


test("Handling Multiple Dropdown" , async({page})=>{

//browser
await page.goto('https://testautomationpractice.blogspot.com/')

//scroll
await page.locator('label:has-text("Colors:")').scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)

//select
await page.locator('[id="colors"]').selectOption(["Blue" , "Yellow" , "White"])
await page.waitForTimeout(2000)

//Unselect
await page.locator('[id="colors"]').selectOption([])
await page.waitForTimeout(2000)

//select
await page.locator('[id="colors"]').selectOption([{lable : 'Blue'}, {value :'yellow'}, {index :5}])
await page.waitForTimeout(2000)

})




test.only("Handling Dynamic Dropdown" , async ({page})=>{

//browser
await page.goto("https://ticketnew.com/movies/chennai")

//wait
const searchBox1 = page.locator('//div[text()="Search for movies, cinemas and more"]')

await searchBox1.first().waitFor({state :'visible'})

//click
await searchBox1.first().click()

//search
const searchBox2 = page.locator('//input[contains(@class,"dds-rounded-lg dds-outline-none dds-transition-all"]')

//wait for last matched selector
await searchBox2.last().waitFor()

await searchBox2.last().fill("man")

//wait for all selectors
await page.waitForSelector('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]"//h5')

//Approach -1

// let searchList = await page.$$('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]"//h5')

// for (const element of searchlist) {

// const txt = await element textContent()

//  if(txt.trim() === "Spider-Man: Brand New Day"){
//  await element.click()
//  break
//  }
// }

//Approach - 2

let searchlist = page.locator('//div[contains[@class,"dds-flex dds-flex-col dds-gap-[4px]"//h5')

for(let i=0; 1 < await searchlist.count(); i++){

    const item = await searchlist.nth(i)
    const txt = await item.textContent()

    if(txt.trim() ==="Spider-Man: Brand New Day"){
     await element.click()
     break   
    }
}

//hard wait
await page.waitForTimeout(3000)
})

