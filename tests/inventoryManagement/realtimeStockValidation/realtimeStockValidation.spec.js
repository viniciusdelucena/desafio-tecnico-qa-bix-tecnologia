import { test, expect } from '@playwright/test';

test.describe('Real-time Stock Validation', () =>{

    test.beforeEach(async ({page}) => {
        await page.goto('localhost:3001');
    });

    test('Attempt to add a product that is already in the cart', async ({ page }) => {
        await page.locator('#qty-2').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button').click();
        await expect(page.getByText('Carrinho: 1 itens – Total: R$ 99,50')).toBeVisible();
        await page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button').click();
        await expect(page.getByText('Carrinho: 2 itens – Total: R$ 199,00')).toBeVisible();
    });

    test('Add the maximum available stock to the cart', async ({ page }) => {
        await page.locator('#qty-3').fill('8');
        await page.getByRole('listitem').filter({ hasText: 'Headset — R$ 299,00 Estoque:' }).getByRole('button').click();
        await expect(page.getByText('Carrinho: 8 itens – Total: R$ 2392,00')).toBeVisible();

    });

});


