import { test, expect } from '@playwright/test';

test('Attempt to checkout while logged out', async ({ page }) => {
    page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toContain('Faça login para finalizar a compra');
            await dialog.accept();
    });
    
    await page.goto('localhost:3001');
    await page.getByRole('listitem').filter({ hasText: 'Keyboard — R$ 199,90 Estoque' }).getByRole('button').click();
    await page.getByRole('button', { name: 'Finalizar Compra' }).click();

});