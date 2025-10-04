import { test, expect } from '@playwright/test';

test.describe('Sign in negative scenarios', () =>{

    test.beforeEach(async ({page}) => {
        await page.goto('localhost:3001');
    });

    test('Login with incorrect password', async ({ page }) => {
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toContain('Invalid credentials');
            await dialog.accept();
        });

        await page.getByRole('textbox', { name: 'Email' }).fill('user@test.com');
        await page.getByRole('textbox', { name: 'Senha' }).fill('wrongpassword');
        await page.getByRole('button', { name: 'Entrar' }).click();   
        await expect(page.getByRole('button', { name: 'Entrar' })).toBeVisible();
    });

    test('Login with a non-existent email', async ({ page }) => {
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toContain('Invalid credentials');
            await dialog.accept();
        });

        await page.getByRole('textbox', { name: 'Email' }).fill('nosuchuser@test.com');
        await page.getByRole('textbox', { name: 'Senha' }).fill('anypassword');
        await page.getByRole('button', { name: 'Entrar' }).click();   
        await expect(page.getByRole('button', { name: 'Entrar' })).toBeVisible();
    });

    test('Login with blank fields', async ({ page }) => {
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toContain('Email and password are required');
            await dialog.accept();
        });

        await page.getByRole('button', { name: 'Entrar' }).click();   
        await expect(page.getByRole('button', { name: 'Entrar' })).toBeVisible();
    });

    test('Login with invalid email format', async ({ page }) => {
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toContain('Invalid credentials');
            await dialog.accept();
        });

        await page.getByRole('textbox', { name: 'Email' }).fill('usertest');
        await page.getByRole('textbox', { name: 'Senha' }).fill('anypassword');
        await page.getByRole('button', { name: 'Entrar' }).click();   
        await expect(page.getByRole('button', { name: 'Entrar' })).toBeVisible();
    });

});


