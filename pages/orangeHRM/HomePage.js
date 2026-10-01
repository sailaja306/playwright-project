
import {expect} from "@playwright/test"

export class HomePage{

    constructor(page){
      this.page = page
      this.dashboardPage = page.locator('.oxd-topbar-header-title')
      this.userdropDown = page.locator('.oxd-userdropdown-tab')


      
    


