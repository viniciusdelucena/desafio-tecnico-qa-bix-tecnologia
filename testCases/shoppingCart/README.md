# Test Cases for Shopping Cart Feature

This document outlines the test cases for the Shopping Cart functionality of the BIX Mini E-commerce application. These tests verify product addition, stock validation, automatic calculations, and cart clearing upon checkout.

## 1. Product Addition and Quantity Management

| Test ID | Test Title | Preconditions | Execution Steps | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CART-01** | **Add a single product to the cart** | User is on the homepage.<br>The shopping cart is empty. | 1. Locate the "Mouse" product.<br>2. In the quantity field, enter `1`.<br>3. Click the "Adicionar" (Add) button. | The cart summary in the header must update to "Carrinho: 1 Itens".<br>The Subtotal and Total in the checkout section must display `R$ 99,50`. | **High** |
| **CART-02** | **Add multiple units of the same product** | User is on the homepage.<br>The shopping cart is empty. | 1. Locate the "Keyboard" product.<br>2. In the quantity field, enter `3`.<br>3. Click the "Adicionar" (Add) button. | The cart summary in the header must update to "Carrinho: 3 Itens".<br>The Subtotal and Total must be correctly calculated as `R$ 599,70` (3 x 199.90). | **High** |
| **CART-03** | **Add different products to the cart** | User is on the homepage.<br>The shopping cart is empty. | 1. Locate the "Keyboard" product.<br>2. In the quantity field, enter `1`.<br>3. Click the "Adicionar" button.<br>4. Locate the "Mouse" product.<br>5. In the quantity field, enter `2`.<br>6. Click the "Adicionar" button. | The cart summary in the header must update to "Carrinho: 3 Itens" (1 Keyboard + 2 Mouse).<br>The Subtotal and Total must be correctly calculated as `R$ 398,90` (199.90 + 2 * 99.50). | **High** |

## 2. Stock Validation (Re-validation in Cart context)

| Test ID | Test Title | Preconditions | Execution Steps | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CART-04** | **Adding a product to cart respects available stock** | User is on the homepage.<br>The "Headset" product has a stock of 8.<br>The shopping cart is empty. | 1. Locate the "Headset" product.<br>2. In the quantity field, attempt to enter `9`.<br>3. Click the "Adicionar" (Add) button. | The system must prevent adding more than 8 units.<br>An error message should be displayed, or the quantity field should be auto-corrected to `8`. The cart should not contain more than 8 units of "Headset". | **High** |

## 3. Automatic Calculation of Totals

| Test ID | Test Title | Preconditions | Execution Steps | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CART-05** | **Total is calculated automatically and correctly** | User is on the homepage.<br>The shopping cart is empty. | 1. Locate the "Headset" product.<br>2. In the quantity field, enter `2`.<br>3. Click the "Adicionar" button.<br>4. Locate the "Mouse" product.<br>5. In the quantity field, enter `1`.<br>6. Click the "Adicionar" button. | The Subtotal and Total must be automatically calculated and displayed as `R$ 697,50` (2 * 299.00 + 99.50). | **High** |
| **CART-06** | **Total updates correctly when a coupon is applied** | The cart contains one "Keyboard" (`R$ 199,90`) and one "Mouse" (`R$ 99,50`).<br>User is logged in. | 1. In the "Código do cupom" field, enter `SAVE20`.<br>2. Click the "Aplicar Cupom" (Apply Coupon) button. | The Subtotal must remain `R$ 299,40`.<br>A discount of `R$ 59,88` (20%) must be displayed.<br>The final Total must be updated to `R$ 239,52`. | **High** |

## 4. Automatic Cart Clearing

| Test ID | Test Title | Preconditions | Execution Steps | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CART-07** | **Cart is cleared automatically after a successful checkout** | User `user@test.com` is logged in.<br>The cart contains one "Keyboard". | 1. Locate the "Finalizar Compra" (Complete Purchase) button.<br>2. Click the "Finalizar Compra" button.<br>3. Wait for the purchase confirmation. | After the purchase is confirmed, the cart summary in the header must reset to "Carrinho: 0 Itens".<br>The Subtotal, Discount, and Total fields in the checkout section must all reset to `R$ 0,00`. | **High** |