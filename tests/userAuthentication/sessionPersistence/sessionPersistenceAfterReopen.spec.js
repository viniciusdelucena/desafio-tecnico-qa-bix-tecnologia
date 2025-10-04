import { test, expect } from '@playwright/test';

test('Session persists after closing and reopening tab', async ({ context }) => {
    const page = await context.newPage();

    await page.goto('localhost:3001');
    await page.getByRole('textbox', { name: 'Email' }).fill('user@test.com');
    await page.getByRole('textbox', { name: 'Senha' }).fill('user123');
    await page.getByRole('button', { name: 'Entrar' }).click();  
    
    await page.close();
    const newPage = await context.newPage();

    await newPage.goto('localhost:3001');
    await expect(newPage.getByRole('button', { name: 'Sair' })).toBeVisible();
});