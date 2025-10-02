# Bug Report: Cart Item Details Are Not Displayed on the Page

**ID:** BUG-03
**Severity:** High
**Date Found:** 2025-10-02

**Title:** Cart contents are not listed, preventing users from verifying or managing items before checkout.

---
### Summary
After adding multiple different products to the shopping cart, the application correctly updates the total item count and the final subtotal. However, there is no component or section on the UI that displays a list of the individual items in the cart (e.g., product name, quantity, price per unit). This is a critical usability flaw as users cannot verify or manage their cart's contents before completing a purchase.

### Steps to Reproduce
1. Navigate to the application homepage (`http://localhost:3001`).
2. In the login form, enter email `user@test.com` and password `user123`.
3. Click the "Entrar" (Login) button.
4. Verify the shopping cart is empty in the header summary.
5. Locate the "Keyboard" product.
6. In the quantity field for "Keyboard", enter `1`.
7. Click the "Adicionar" (Add) button.
8. Locate the "Mouse" product.
9. In the quantity field for "Mouse", enter `2`.
10. Click the "Adicionar" (Add) button.
11. Observe the entire page, looking for a list of the items that were just added.

### Expected Result
A clearly visible section should appear on the page, listing each distinct item in the cart. This list should include:
- The product name (e.g., "Keyboard", "Mouse").
- The quantity of each item (e.g., 1, 2).
- The price per unit.
- Ideally, an option to remove an item or edit its quantity.

### Actual Result
The cart summary in the header correctly updates to show the total number of items (e.g., "Carrinho: 3 Itens"), and the checkout section shows the correct total price (e.g., "Total: R$ 398,90"). However, no list of the actual items ("1x Keyboard", "2x Mouse") is displayed anywhere on the page. The user has no way to see what is inside their cart.

### Evidence
A video demonstrating the bug can be found at the following link:
- [Video Proof on YouTube](https://youtu.be/5VfZ9ble3oc)

### Impact
- **Prevents Order Verification:** Users cannot confirm the items and quantities they are about to purchase, increasing the risk of incorrect orders.
- **Prevents Cart Management:** Users are unable to perform basic actions like removing a single item or adjusting quantities after they have been added.
- **Poor User Experience:** This behavior is highly counter-intuitive and deviates significantly from the standard functionality expected of any e-commerce platform, leading to a frustrating and untrustworthy user experience.