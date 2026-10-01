// Generated from: features\login.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Validate Login Functionality', () => {

  test('User login with valid credentials', { tag: ['@smoke'] }, async ({ Given, When, Then, And, login }) => { 
    await Given('I open the SauceDemo', null, { login }); 
    await When('I enter username', null, { login }); 
    await When('I enter password', null, { login }); 
    await And('I click on login button', null, { login }); 
    await Then('I should see Dashboard Page', null, { login }); 
  });

  test('User login with invalid credentials', { tag: ['@sanity'] }, async ({ Given, When, Then, And, login }) => { 
    await Given('I open the SauceDemo', null, { login }); 
    await When('I enter username', null, { login }); 
    await When('I enter password', null, { login }); 
    await And('I click on login button', null, { login }); 
    await Then('I should handle error'); 
  });

  test.describe('Multi set of datas', () => {

    test('Example #1', { tag: ['@reg'] }, async ({ Given, When, Then, And, login }) => { 
      await Given('I open the URL', null, { login }); 
      await When('I enter "standard_user" and "secret_sauce"', null, { login }); 
      await And('I click on login button', null, { login }); 
      await Then('I should handle error or dashboard', null, { login }); 
    });

    test('Example #2', { tag: ['@reg'] }, async ({ Given, When, Then, And, login }) => { 
      await Given('I open the URL', null, { login }); 
      await When('I enter "locked_out_user" and "secret_sauce"', null, { login }); 
      await And('I click on login button', null, { login }); 
      await Then('I should handle error or dashboard', null, { login }); 
    });

    test('Example #3', { tag: ['@reg'] }, async ({ Given, When, Then, And, login }) => { 
      await Given('I open the URL', null, { login }); 
      await When('I enter "wrong username" and "wrong password"', null, { login }); 
      await And('I click on login button', null, { login }); 
      await Then('I should handle error or dashboard', null, { login }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I open the SauceDemo","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I enter username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click on login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see Dashboard Page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":13,"tags":["@sanity"],"steps":[{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I open the SauceDemo","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I enter username","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I enter password","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I click on login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should handle error","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":29,"tags":["@reg"],"steps":[{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given I open the URL","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I enter \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"secret_sauce\"","children":[{"start":29,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And I click on login button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should handle error or dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":30,"tags":["@reg"],"steps":[{"pwStepLine":32,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given I open the URL","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I enter \"locked_out_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":8,"value":"\"locked_out_user\"","children":[{"start":9,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":30,"value":"\"secret_sauce\"","children":[{"start":31,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And I click on login button","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should handle error or dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":31,"tags":["@reg"],"steps":[{"pwStepLine":39,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given I open the URL","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I enter \"wrong username\" and \"wrong password\"","stepMatchArguments":[{"group":{"start":8,"value":"\"wrong username\"","children":[{"start":9,"value":"wrong username","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":29,"value":"\"wrong password\"","children":[{"start":30,"value":"wrong password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And I click on login button","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should handle error or dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end