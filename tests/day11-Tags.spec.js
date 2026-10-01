

import {test}from "@playwright/test"

test("Test 1" , {tag : '@smoke'} , async ()=>{
    console.log("SMOKE")
})

test("Test 2 @sanity" , async ()=>{
    console.log("SANITY")
})

test("Test 3" , {tag : '@reg'} , async ()=>{
    console.log("REGRESSION")
})

test("Test 4" , {tag : ["@smoke" , "@sanity"]} , async ()=>{
    console.log("SMOKE with SANITY")
})

test("Test 5" , {tag : ["@smoke" ,"@reg"]} , async ()=>{
    console.log("SMOKE with REG")
})

test("Test 6 @sanity@reg", async ()=>{
    console.log("SANITY with REG")
})

/**
 * npx playwright test --grep "@smoke"
 * npx playwright test --grep "@smoke" --grep-invert "@reg"    -> skip only reg
 *npx playwright test --grep "@smoke" --grep-invert "@reg|@sanity"  -> execute only smoke suite
 *npx playwright test --grep "@smoke" --grep-invert"@reg&sanity" -> execute all combined
 *
 *npx playwright test --grep "TitleName"
 */