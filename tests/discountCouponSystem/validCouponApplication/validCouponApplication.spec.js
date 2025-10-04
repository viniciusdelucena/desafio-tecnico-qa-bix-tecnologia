import { test, expect } from '@playwright/test';

test.describe('Valid Coupon Application and Calculation', () =>{

    test.beforeEach(async ({page}) => {
        await page.goto('localhost:3001');
        await page.getByRole('textbox', { name: 'Email' }).fill('user@test.com');
        await page.getByRole('textbox', { name: 'Senha' }).fill('user123');
        await page.getByRole('button', { name: 'Entrar' }).click();
        await expect(page.getByText('Carrinho: 0 itens – Total: R$')).toBeVisible();
        await page.locator('#qty-1').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Keyboard — R$ 199,90 Estoque' }).getByRole('button').click();
    });

    test('Apply a valid percentage discount coupon', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Código do cupom' }).fill('WELCOME10');
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
        await expect(page.locator('#subtotal')).toContainText('199,90');
        await expect(page.getByText('19,99')).toBeVisible();
        await expect(page.getByText('Total: R$ 179,91')).toBeVisible();
    });

    test('Apply a valid fixed value discount coupon', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Código do cupom' }).fill('FIXED50');
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
        await expect(page.locator('#subtotal')).toContainText('199,90');
        await expect(page.getByText('50,00')).toBeVisible();
        await expect(page.getByText('Total: R$ 149,90')).toBeVisible();
    });

    test('Coupon discount recalculates correctly when cart is updated', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Código do cupom' }).fill('WELCOME10');
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
        await expect(page.locator('#subtotal')).toContainText('199,90');
        await expect(page.getByText('19,99')).toBeVisible();
        await expect(page.getByText('Total: R$ 179,91')).toBeVisible();
        await page.locator('#qty-2').fill('1');
        await page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button').click();
        await expect(page.locator('#subtotal')).toContainText('299,40');
        await expect(page.getByText('29,94')).toBeVisible();
        await expect(page.getByText('Total: R$ 269,46')).toBeVisible();
    });

    test('Switch from one valid coupon to another', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Código do cupom' }).fill('WELCOME10');
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
        await expect(page.locator('#subtotal')).toContainText('199,90');
        await expect(page.getByText('19,99')).toBeVisible();
        await expect(page.getByText('Total: R$ 179,91')).toBeVisible();
        await page.getByRole('textbox', { name: 'Código do cupom' }).fill('SAVE20');
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
        await expect(page.locator('#subtotal')).toContainText('199,90');
        await expect(page.getByText('39,98')).toBeVisible();
        await expect(page.getByText('Total: R$ 159,92')).toBeVisible();
    });


});


