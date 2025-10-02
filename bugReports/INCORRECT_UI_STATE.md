# Bug Report: Incorrect Cart State Displayed After Switching Users

**ID:** BUG-01
**Severity:** High
**Date Found:** 2025-10-01

**Title:** Incorrect cart state from previous user is displayed in the header immediately after logging in.

---
### Summary
The frontend UI does not properly clear the cart's state when a user logs out and a new user logs in on the same browser. This results in the new user momentarily seeing the previous user's cart contents in the header, which only corrects itself after a full page refresh.

### Steps to Reproduce
1. Navigate to the application homepage (`http://localhost:3001`).
2. In the login form, enter email `user@test.com` and password `user123`.
3. Click the "Entrar" (Login) button.
4. Locate the "Keyboard" product on the page.
5. In the quantity field for "Keyboard", enter `2`.
6. Click the "Adicionar" (Add) button.
7. Verify the cart summary in the page header now shows "Carrinho: 2 Itens".
8. Log out of the `user@test.com` account.
9. In the login form, now enter email `admin@test.com` and password `admin123`.
10. Click the "Entrar" (Login) button.

### Expected Result
After `admin@test.com` logs in, their shopping cart should immediately and correctly display its true state (e.g., "Carrinho: 0 Itens", assuming their cart is empty).

### Actual Result
Immediately after `admin@test.com` logs in, the cart summary in the header incorrectly persists the state from the previous session, still showing "Carrinho: 2 Itens". The correct state is only displayed after a manual page refresh.

### Evidence
A video demonstrating the bug can be found at the following link:
- [Video Proof on YouTube](https://www.youtube.com/watch?v=9Oiky58DGnc)

### Impact
- **Poor User Experience:** This behavior is extremely confusing and can lead to user frustration and lack of trust in the application.
- **Potential for Errors:** A user might try to interact with the "ghost" cart, leading to unpredictable behavior or errors.