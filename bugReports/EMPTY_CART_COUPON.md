# Bug Report: Coupon Can Be Applied to an Empty Cart

**ID:** BUG-02
**Severity:** Medium
**Date Found:** 2025-10-01

**Title:** Coupon application is confirmed on an empty cart without calculating a discount.

---
### Summary
The system fails to validate if the cart is empty before processing a coupon. As a result, it displays a success message confirming the coupon was applied (e.g., "Cupom aplicado: SAVE20"), even though the cart's subtotal is zero and no discount is actually calculated. This creates a confusing and illogical UI state.

### Steps to Reproduce
1. Navigate to the application homepage (`http://localhost:3001`).
2. Ensure the user is logged in (e.g., as `user@test.com`).
3. Verify that the cart is empty (The header shows "Carrinho: 0 Itens").
4. In the "Código do cupom" field in the checkout section, enter a valid coupon code (e.g., `SAVE20`).
5. Click the "Aplicar Cupom" (Apply Coupon) button.

### Expected Result
The system should display an error message stating that a coupon cannot be applied to an empty cart. No success message should appear, and the Subtotal, Discount, and Total fields should all remain `R$ 0,00`.

### Actual Result
The system does not display an error. Instead, it shows a success message ("Cupom aplicado: SAVE20") next to the input field. The Subtotal and Total remain `R$ 0,00`, and no discount amount is calculated or displayed. This creates a conflicting state where a coupon is confirmed as "applied" but has no effect on the zero-value cart.

### Evidence
- **Video:**
  - [Video Proof on YouTube](https://youtu.be/rhXZPFZzwl0)

### Impact
- **Logical Flaw:** The core business logic for discounts is flawed, as it doesn't account for the empty cart edge case.
- **Poor User Experience:** Displaying a success message for an action that has no logical effect is highly confusing and unprofessional.
- **Potential for Downstream Errors:** This inconsistent state could potentially be exploited or cause errors in later stages of a more complex checkout process.