import {test , expect} from "@playwright/test";

test("TC_001 Validating Meesho Title & Url" , async ({page})  =>  {test.setTimeout(60000);

    //browser
    await page.goto("https://www.meesho.com" , { 
        waitUntil: "domcontentloaded" , 
        timeout:60000});


    //get title & url
    const pageTitle = await page.title() ;
    const pageUrl = await page.url() ;

    console.log(pageTitle) ;
    console.log(pageUrl);

    //validate both
    await expect(page).toHaveTitle(pageTitle);
    await expect(page).toHaveURL(pageUrl);
    
})