import { test, expect } from '@playwright/test';

test('Adding a product to cart respects available stock', async ({ page }) => {
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toContain('Quantidade indisponível. Estoque: 8');
        await dialog.accept();
    });

    await page.goto('localhost:3001');
    await expect(page.getByText('Estoque: 8')).toBeVisible();

    await page.locator('#qty-3').fill('9');
    await page.getByRole('listitem').filter({ hasText: 'Headset — R$ 299,00 Estoque:' }).getByRole('button').click();

});