import { test, expect } from '@playwright/test';

test.describe('UI Adaptability for Stock Availability', () =>{

    test.beforeEach(async ({page}) => {
        await page.goto('localhost:3001');
    });
    
    test('"Add" button is disabled for out-of-stock items', async ({ page }) => {
        //TO-DO
    });

    test('"Add" button is enabled for in-stock items', async ({ page }) => {
        await expect(page.getByText('Mouse — R$ 99,50 Estoque: 25 Adicionar')).toBeVisible();
        await expect(page.getByRole('listitem').filter({ hasText: 'Mouse — R$ 99,50 Estoque: 25' }).getByRole('button')).toBeEnabled();
    });

});


