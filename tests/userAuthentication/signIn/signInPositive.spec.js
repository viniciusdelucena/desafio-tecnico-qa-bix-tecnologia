import { test, expect } from '@playwright/test';

test('Successful `Sign in` flow test', async ({ page }) => {
  await page.goto('localhost:3001');
  await page.getByRole('textbox', { name: 'Email' }).fill('user@test.com');
  await page.getByRole('textbox', { name: 'Senha' }).fill('user123');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await expect(page.getByRole('button', { name: 'Sair' })).toBeVisible();
});
