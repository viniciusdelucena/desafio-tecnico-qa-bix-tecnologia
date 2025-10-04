# BIX E-commerce - QA Technical Challenge

This repository contains the solution for the BIX Tecnologia QA Technical Challenge. It includes the original mini-e-commerce application and a comprehensive QA testing solution developed to ensure its quality, reliability, and functionality.

The primary focus of this challenge was to apply quality assurance principles, including test planning, bug reporting, and the implementation of an end-to-end automated testing suite using **Playwright**.

## 📂 QA Artifacts & Test Documentation

This project is organized into three main QA areas. All documentation was created as part of this challenge.

| Artifact | Description | Location |
| :--- | :--- | :--- |
| 📝 **Test Cases** | Detailed test cases for all major features, including preconditions, execution steps, and expected results. | **[./testCases/](./testCases/)** |
| 🐛 **Bug Reports** | A collection of bug reports written for issues found during the testing phase. | **[./bugReports/](./bugReports/)** |
| 🤖 **Automated Tests** | The full suite of end-to-end automated tests implemented with Playwright, mirroring the test case structure. | **[./tests/](./tests/)** |

---

## 🚀 Test Automation Framework

A complete end-to-end testing framework was built from the ground up to validate the application's critical user flows.

### Technology

* **Framework**: **Playwright**
* **Language**: **JavaScript**
* **Runner**: **Playwright Test**

### Key Implementation Steps

* **Framework Setup**: The project was configured with Playwright, including the installation of all necessary dependencies (`@playwright/test`) and the setup of the `playwright.config.ts` file.
* **Comprehensive Test Coverage**: Automated tests were implemented for all major features of the application:
    * **User Authentication**: Login (positive/negative), logout, session persistence, and route protection.
    * **Shopping Cart**: Product addition, quantity management, total calculations, and stock validation.
    * **Discount Coupons**: Application of valid coupons (fixed and percentage) and validation of invalid/expired coupons.
    * **Inventory Management**: UI adaptability based on stock, and stock updates after purchases.
* **Version Control**: A `.gitignore` file was configured to exclude test reports and temporary files, ensuring a clean repository.

### Running the Automated Tests

To run the tests, ensure the application is running via Docker.

```bash
# First, install project dependencies
npm install

# Run all tests in the terminal (headless mode)
npx playwright test

# Run tests in UI Mode for a visual interface
npx playwright test --ui

# Run tests in Debug Mode for step-by-step inspection
npx playwright test --debug
```

### Future Improvements & Refactoring Plan

The current test suite is fully functional but was implemented directly to ensure coverage. The key planned improvement is a complete refactoring using the **Page Object Model (POM)**.

This architectural enhancement will:
* **Reduce Code Duplication**: Abstract page elements and user actions into reusable classes.
* **Improve Maintainability**: Make tests easier to read and update when the UI changes.
* **Create a Scalable Architecture**: Provide a solid foundation for adding new tests as the application grows.

---

## 📦 Application Details

The following sections provide details on the original mini-e-commerce application.

### Technology Stack

-   **Backend**: Node.js + Express
-   **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
-   **Containerization**: Docker + Docker Compose

### How to Run the Application

**Prerequisites**: Docker and Docker Compose must be installed.

```bash
# Clone the repository
git clone <repository-url>
cd <project-folder>

# Build and run the application using Docker
docker compose up --build

# The application will be available at:
http://localhost:3001
```

### Test Credentials

#### Available Users

-   **Admin**: `admin@test.com` / `admin123`
-   **User**: `user@test.com` / `user123`

#### Discount Coupons

-   `WELCOME10` - 10% discount
-   `SAVE20` - 20% discount
-   `FIXED50` - R$ 50.00 fixed discount
-   `EXPIRED` - Expired coupon (for testing)