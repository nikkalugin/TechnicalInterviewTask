import { test, expect } from '@playwright/test';

test.describe('Login tests', () => {
    test.beforeEach(async ({ page }) => {
        // Precondition: Відкрити вебсторінку https://www.saucedemo.com/.
        await page.goto('');
    });
    test('Successful Login with Valid Credentials', async ({ page }) => {
        // Знайдіть поле Username та ввести в поле значення standard_user.
        await page.locator('#user-name').fill('standard_user');

        // Знайдіть поле Password та ввести в поле значення secret_sauce.
        await page.locator('#password').fill('secret_sauce'); 

        // Знайдіть кнопку Login та натиснить її.
        await page.locator('#login-button').click();

        // Переконайтеся, що сторінка "Products" відчинена.
        await expect(page.locator('.title')).toHaveText('Products');
    });
    
    test('Error Message for Invalid Username Credential', async ({ page }) => {
        // Знайдіть поле Username та ввести в поле значення standard_use.
        await page.getByPlaceholder('Username').fill('standard_use');

        // Знайдіть поле Password та ввести в поле значення secret_sauce.
        await page.getByPlaceholder('Password').fill('secret_sauce'); 

        // Знайдіть кнопку Login та натиснить її.
        await page.getByRole('button').click();

        // Переконайтеся, що з'явилася помилка "Epic sadface: Username and password do not match any user in this service".
        await expect(page.locator('.error-message-container.error')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('Error Message for Invalid Password Credential', async ({ page }) => {
        // Знайдіть поле Username та ввести в поле значення standard_user.
        await page.getByPlaceholder('Username').fill('standard_user');

        // Знайдіть поле Password та ввести в поле значення secret_sauc.
        await page.getByPlaceholder('Password').fill('secret_sauc');

        // Знайдіть кнопку Login та натиснить її.
        await page.getByRole('button').click();

        // Переконайтеся, що з'явилася помилка "Epic sadface: Username and password do not match any user in this service".
        await expect(page.getByRole('heading').first()).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('Error Message for Empty Credentials', async ({ page }) => {
        // Знайдіть кнопку Login та натиснить її.
        await page.getByRole('button').click();

        // Переконайтеся, що з'явилася помилка "Epic sadface: Username is required".
        await expect(page.locator('.error-message-container.error')).toHaveText('Epic sadface: Username is required');
    });

    test('Error Message for Empty Password Credentials', async ({ page }) => {
        // Знайдіть поле Username та ввести в поле значення standard_user.
        await page.getByPlaceholder('Username').fill('standard_user');

        // Знайдіть кнопку Login та натиснить її.
        await page.getByRole('button').click();

        // Переконайтеся, що з'явилася помилка "Epic sadface: Password is required".
        await expect(page.locator('.error-message-container.error')).toHaveText('Epic sadface: Password is required');
    });

    test('Error Message for Empty Username Credentials', async ({ page }) => {
        // Знайдіть поле Password та ввести в поле значення secret_sauce.
        await page.getByPlaceholder('Password').fill('secret_sauce');

        // Знайдіть кнопку Login та натиснить її.
        await page.getByRole('button').click();

        // Переконайтеся, що з'явилася помилка "Epic sadface: Username is required".
        await expect(page.locator('.error-message-container.error')).toHaveText('Epic sadface: Username is required');
    });

    test('Password Input Masking', async ({ page }) => {
        // Переконайтеся, що поле "Password" має type = "password".
        await expect(page.getByPlaceholder('Password')).toHaveAttribute('type', 'password');
    });
});

test.describe('Purchase tests', () => {
    test.beforeEach(async ({ page }) => {
        // Precondition: Відкрити вебсторінку https://www.saucedemo.com/.
        await page.goto('');

        // Знайдіть поле Username та ввести в поле значення standard_user.
        await page.locator('#user-name').fill('standard_user');

        // Знайдіть поле Password та ввести в поле значення secret_sauce.
        await page.locator('#password').fill('secret_sauce');

        // Знайдіть кнопку Login та натиснить її.
        await page.locator('#login-button').click();

        // Переконайтеся, що сторінка "Products" відчинена.
        await expect(page.locator('.title')).toHaveText('Products');
    });
    test('Complete Flow for Purchasing', async ({ page }) => {
        // Оберіть 1ий продукт "Sauce Labs Backpack" та натисніть кнопку "Add To Cart" на полі цього продукту.
        await page.locator('#add-to-cart-sauce-labs-backpack').click();

        // Оберіть 5ий продукт "Sauce Labs Fleece Jacket" та натисніть кнопку "Add To Cart" на полі цього продукту.
        await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();

        // Знайдіть кнопку "Кошика" та натисніть її.
        await page.locator('.shopping_cart_link').click();

        // Переконайтеся, що сторінка "Your Cart" відчинена та обрані продукти з сторінки "Products" присутні.
        await expect(page.locator('.title')).toHaveText('Your Cart');
        await expect(page.locator('.cart_item .inventory_item_name').nth(0)).toHaveText('Sauce Labs Backpack');
        await expect(page.locator('.cart_item .inventory_item_name').nth(1)).toHaveText('Sauce Labs Fleece Jacket');

        // Знайдіть кнопку "Checkout" та натисніть її.
        await page.getByRole('button', { name: 'Checkout' }).click();

        // Переконайтеся, що сторінка "Checkout: Your Information" відчинена.
        await expect(page.locator('.title')).toHaveText('Checkout: Your Information');

        // Знайдіть поле First Name та ввести в поле значення Test First Name.
        await page.getByPlaceholder('First Name').fill('Test First Name');

        // Знайдіть поле Last Name та ввести в поле значення Test Last Name.
        await page.getByPlaceholder('Last Name').fill('Test Last Name');

        // Знайдіть поле Zip/Postal Code та ввести в поле значення Test Zip/Postal Code.
        await page.getByPlaceholder('Zip/Postal Code').fill('Test Zip/Postal Code');

        // Знайдіть кнопку "Continue" та натиснить її.
        await page.locator('#continue').click();

        // Переконайтеся, що сторінка "Checkout: Overview" відчинена та обрані продукти з сторінки "Products" присутні.
        await expect(page.locator('.title')).toHaveText('Checkout: Overview');
        await expect(page.locator('.cart_item .inventory_item_name').nth(0)).toHaveText('Sauce Labs Backpack');
        await expect(page.locator('.cart_item .inventory_item_name').nth(1)).toHaveText('Sauce Labs Fleece Jacket');

        // Знайдіть кнопку Finish та натиснить її.
        await page.getByRole('button', { name: 'Finish' }).click();

        // Переконайтеся, що сторінка "Checkout: Complete!" відчинена та присутні повідомлення об успішном замовленні.
        await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
        await expect(page.locator('.complete-text')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });
});