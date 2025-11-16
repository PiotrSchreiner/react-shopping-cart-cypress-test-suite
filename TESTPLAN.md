# 🛒 Test Plan: E2E Automation for React Shopping Cart

This document outlines the testing approach, architecture, and key E2E scenarios for the `react-shopping-cart` application. The strategy follows modern best practices (Screenplay Pattern) and aims to maximize readability, maintainability, and reusability of the test code.

---

## 1. 🎯 Project Objectives

The main goal of this repository is to demonstrate advanced UI test automation skills using Cypress and TypeScript.

| Objective          | Description                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| Architecture Focus | Implement a Hybrid POM/Screenplay Pattern to separate **what** (Screenplay) from **where** (Page Object). |
| Code Quality       | Use TypeScript for type safety and enhanced IDE support.                                                  |
| Coverage           | Full end-to-end coverage of critical e-commerce core functionalities.                                     |
| Presentation       | The repository serves as proof of professional, well-structured test engineering.                         |

---

## 2. 🏗️ Test Architecture (Screenplay-Hybrid)

We use a layered architecture to ensure maintainability, flexibility, and reusability of test assets. This structure reflects the recommendations from the test automation PDF.

| Layer                     | Purpose                                                                                                              | Example File               | Corresponds to PDF Recommendation |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------------------- |
| Tests/Specs               | Defines the flow and business logic (**what** should be done). Only uses tasks.                                      | `e2e/checkout.cy.ts`       | Test case (Scenario)              |
| Tasks (Screenplay)        | Combines multiple actions into a logical step (e.g., "Add product to cart"). Serves as the central action layer.     | `tasks/AddItemToCart.ts`   | App Action                        |
| Interactions (Screenplay) | Encapsulates individual, generic actions (e.g., "Click element", "Type text"). Often implemented as custom commands. | `interactions/ClickOn.ts`  | Helper/Custom Command             |
| Page Objects (Locators)   | Defines selectors (**where** to interact). Contains no logic. Acts as a "locator repository" for higher layers.      | `pages/ProductListPage.ts` | Lightweight POM                   |

---

## 3. 🧪 Critical E2E Test Cases (Scenarios)

The following test cases define the minimum requirement for a complete e-commerce test suite and will be implemented using the Screenplay architecture.

### Category: Product and Filter Management

| ID      | Scenario Name                        | Focus                                                                           |
| ------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| E2E-001 | Load and verify product listing      | Checks if all products are loaded and displayed correctly.                      |
| E2E-002 | Apply size filter                    | Verifies that products are correctly filtered after selecting a size (S, M, L). |
| E2E-003 | Clear filter and reset product count | Checks if clearing the filter restores the original product list.               |
| E2E-004 | Apply sorting (e.g., Lowest Price)   | Verifies correctness of the price sorting logic (`price_low_to_high`).          |

### Category: Cart Flow (Add, Update, Remove)

| ID      | Scenario Name                            | Focus                                                                                       |
| ------- | ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| E2E-005 | Add product successfully                 | Clicks "Add to Cart" and checks if the product appears in the cart modal.                   |
| E2E-006 | Increase quantity and update total price | Increases the quantity of an item in the cart and verifies total price recalculation.       |
| E2E-007 | Remove product from cart                 | Removes an item and verifies whether the cart is empty or recalculated correctly.           |
| E2E-008 | Add the same product repeatedly          | Checks if adding the same product increases quantity instead of creating a duplicate entry. |

### Category: Checkout and Validation

| ID      | Scenario Name                  | Focus                                                                                            |
| ------- | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| E2E-009 | Start checkout process         | Clicks the checkout button and verifies the display of the order success message.                |
| E2E-010 | Empty cart and checkout button | Checks whether the checkout button is disabled or hidden when the cart is empty (negative test). |

---

## 4. 📁 Planned File Structure (Cypress / Playwright)

The architecture is implemented in separate directories within the test framework folder (e.g., `/cypress`) to enforce separation of concerns.
