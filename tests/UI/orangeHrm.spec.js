
import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/orangeHRM/LoginPage.js";

test.describe("OrangeHRM Login Tests", () => {

  test("Verify dashboard after valid login", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    
    await login.username.fill("Admin");
    await login.password.fill("admin123");
    await login.loginButton.click();

    // verify dashboard
    await expect(login.dashboard).toBeVisible();
    console.log(await login.dashboard.textContent(), "is Visible");
  });

  test("Verify error message with invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();

    await login.username.fill("Admin");
    await login.password.fill("wrong123");
    await login.loginButton.click();

    // verify error
    await expect(login.errorMsg).toBeVisible();
    await expect(login.errorMsg).toHaveText("Invalid credentials");
    console.log(await login.errorMsg.textContent());
  });

  test("Verify error for empty fields", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.loginButton.click();
    
    const requiredErrors = page.locator('.oxd-input-field-error-message');
    await expect(requiredErrors.first()).toBeVisible();
  });

});





