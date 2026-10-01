import {test , expect} from "@playwright/test";

test(" Handling Login Page" , async function ({page}){   

    //Browser
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    //username $ password
    await page.locator('[id="username"]').fill("student")
    await page.locator('[name="password"]').fill("Password123")

    //login button
    await page.locator('button#submit').click()

    //Dashboard validation

    await expect(page.locator('[class="post-title"]')).toBeVisible()
    await expect(page.locator('[class="post-title"]')).toHaveText("Logged In Successfully")
})
