import { test, expect } from '@playwright/test';

test.describe('Automatic Calculation of Totals', () =>{

    test('Total is calculated automatically and correctly', async ({ page }) => {
        await page.goto('localhost:3001');
        await expect(page.getByText('Carrinho: 0 itens – Total: R$')).toBeVisible();

        await page.locator('#qty-3').fill('2');
        await page.getByRole('listitem').filter({ hasText: 'Headset — R$ 299,00 Estoque:' }).getByRole('button').click();
        await expect(page.locator('#final-total')).toContainText('598,00');
        await page.locator('#qty-2').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button').click();
        await expect(page.locator('#final-total')).toContainText('697,50');
    });

    test('Total updates correctly when a coupon is applied', async ({ page }) => {
        await page.goto('localhost:3001');
        await page.getByRole('textbox', { name: 'Email' }).fill('user@test.com');
        await page.getByRole('textbox', { name: 'Senha' }).fill('user123');
        await page.getByRole('button', { name: 'Entrar' }).click();
        await expect(page.getByText('Carrinho: 0 itens – Total: R$')).toBeVisible();
        await page.locator('#qty-1').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Keyboard — R$ 199,90 Estoque' }).getByRole('button').click();
        await page.locator('#qty-2').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button').click();

        await page.getByRole('textbox', { name: 'Código do cupom' }).fill('SAVE20');
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
        await expect(page.locator('#subtotal')).toContainText('299,40');
        await expect(page.locator('#final-total')).toContainText('239,52');
    });


});


