import { test, expect } from '@playwright/test';

test('Session persists after page reload', async ({ page }) => {
    await page.goto('localhost:3001');
    await page.getByRole('textbox', { name: 'Email' }).fill('user@test.com');
    await page.getByRole('textbox', { name: 'Senha' }).fill('user123');
    await page.getByRole('button', { name: 'Entrar' }).click();  
    
    await page.reload();
    await expect(page.getByRole('button', { name: 'Sair' })).toBeVisible();
});