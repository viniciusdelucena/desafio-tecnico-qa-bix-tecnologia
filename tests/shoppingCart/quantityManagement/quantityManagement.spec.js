import { test, expect } from '@playwright/test';

test.describe('Product addition and Quantity management', () =>{

    test.beforeEach(async ({page}) => {
        await page.goto('localhost:3001');
        await expect(page.getByText('Carrinho: 0 itens – Total: R$')).toBeVisible();
    });

    test('Add a single product to the cart', async ({ page }) => {
        await page.locator('#qty-2').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button').click();
        await expect(page.getByText('Carrinho: 1 itens – Total: R$')).toBeVisible();
        await expect(page.locator('#subtotal')).toContainText('99,50');

    });

    test('Add multiple units of the same product', async ({ page }) => {
        await page.locator('#qty-1').fill('3');
        await page.getByRole('listitem').filter({ hasText: 'Keyboard — R$ 199,90 Estoque' }).getByRole('button').click();
        await expect(page.getByText('Carrinho: 3 itens – Total: R$')).toBeVisible();
        await expect(page.locator('#subtotal')).toContainText('599,70');
    });

    test('Add different products to the cart', async ({ page }) => {
        await page.locator('#qty-1').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Keyboard — R$ 199,90 Estoque' }).getByRole('button').click();
        await page.locator('#qty-2').fill('2');
        await page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button').click();
        await expect(page.getByText('Carrinho: 3 itens – Total: R$')).toBeVisible();
        await expect(page.locator('#subtotal')).toContainText('398,90');
    });

});


