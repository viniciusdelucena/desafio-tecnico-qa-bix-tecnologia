import { test, expect } from '@playwright/test';

test.describe('Coupon Validation', () =>{

    test.beforeEach(async ({page}) => {
        await page.goto('localhost:3001');
        await page.getByRole('textbox', { name: 'Email' }).fill('user@test.com');
        await page.getByRole('textbox', { name: 'Senha' }).fill('user123');
        await page.getByRole('button', { name: 'Entrar' }).click();
        await expect(page.getByText('Carrinho: 0 itens – Total: R$')).toBeVisible();
    });

    test('Attempt to apply an expired coupon', async ({ page }) => {
        await page.locator('#qty-2').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button').click();
        await page.getByRole('textbox', { name: 'Código do cupom' }).fill('EXPIRED');
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
        await expect(page.getByText('Coupon is expired')).toBeVisible();
    });

    test('Attempt to apply a non-existent coupon', async ({ page }) => {
        await page.locator('#qty-2').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button').click();
        await page.getByRole('textbox', { name: 'Código do cupom' }).fill('INVALID123');
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
        await expect(page.getByText('Invalid coupon code')).toBeVisible();
    });

    test('Attempt to apply a coupon to an empty cart', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Código do cupom' }).fill('WELCOME10');
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
        await expect(page.getByText('Cupom aplicado: WELCOME10')).toBeHidden();
    });


});


