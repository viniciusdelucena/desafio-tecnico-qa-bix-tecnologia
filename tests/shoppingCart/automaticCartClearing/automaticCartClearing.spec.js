import { test, expect } from '@playwright/test';

test('Cart is cleared automatically after a successful checkout', async ({ page }) => {
    await page.goto('localhost:3001');
    await page.getByRole('textbox', { name: 'Email' }).fill('user@test.com');
    await page.getByRole('textbox', { name: 'Senha' }).fill('user123');
    await page.getByRole('button', { name: 'Entrar' }).click();
    await page.locator('#qty-1').fill('1');
    await page.getByRole('listitem').filter({ hasText: 'Keyboard — R$ 199,90 Estoque' }).getByRole('button').click();
    await expect(page.getByText('Carrinho: 1 itens – Total: R$')).toBeVisible();

    await page.getByRole('button', { name: 'Finalizar Compra' }).click();
    await expect(page.getByText('Carrinho: 0 itens – Total: R$')).toBeVisible();
});