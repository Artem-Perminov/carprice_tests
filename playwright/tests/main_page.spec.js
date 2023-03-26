// @ts-check
const { test, expect, chromium } = require('@playwright/test');
const { formStepOne } = require('../fixtures/selectors');
const { formStepTwo } = require('../../cypress/fixtures/selectors');

test.describe('Main page, get auto rating button', () => {
  let browser;
  let page;

  test('Data entry and transition to the second step', async () => {
    browser = await chromium.launch();
    page = await browser.newPage();

    await page.goto('https://carprice.ru/');

    await page.locator(formStepOne.brand).click();
    await page.locator(formStepOne.brandOptions).click();
    await page.locator(formStepOne.year).click();
    await page.locator(formStepOne.yearOptions).click();
    await page.locator(formStepOne.model).click();
    await page.locator(formStepOne.modelOptions).click();
    await page.locator(formStepOne.emailInput).fill('qwerty123@asd.com');
    await page.locator(formStepOne.getPriceButton).click();

    await expect(page.locator(formStepTwo.citySelect)).toBeVisible();
  });
});
