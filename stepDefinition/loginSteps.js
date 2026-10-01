
import {test} from '../fixtures/fixtures'

import {createBdd} from "playwright-bdd"

const {Given, When,Then} = createBdd(test)

Given('I open the SauceDemo', async ({login}) => {
    await login.navigate(process.env.BASE_URL)
  });

When('I enter username', async ({login}) => {
    await login.enterUsername(process.env.USER_NAME)
});

When('I enter password', async ({login}) => {
    await login.enterPassword(process.env.PASSWORD)
});

When('I click on login button', async ({login}) => {
    await login.clickOnLogin()
});

Then('I should see Dashboard Page', async ({login}) => {
    await login.verifyDashboard()
});


Then('I should handle error', async ({}) => {
  // Step: Then I should handle error
  // From: features\login.feature:18:1
});  


//DATA DRIVEN
 
Given('I open the URL', async ({login}) => {
    await login.navigate(process.env.BASE_URL)
  });

When('I enter {string} and {string}', async ({login}, username, password) => {
  await login.enterUsername(username)
  await login.enterPassword(password)
});

Then('I should handle error or dashboard', async ({login}) => {
  await login.verifyDashboard()
});




