# Cypress Automation - KFC Order Flow

## Overview

This project contains end-to-end automated tests for the KFC website using Cypress. The automation validates the customer journey of placing an order from a selected location.

The framework follows the **Page Object Model (POM)** design pattern to improve test maintainability, readability, and scalability.

## Tech Stack

* Cypress
* JavaScript / TypeScript
* Page Object Model (POM)

## Test Coverage

The automated test verifies:

* Location selection
* Navigation through the KFC ordering flow
* Order placement workflow
* End-to-end user journey validation

## Project Structure

```text
cypress/
├── e2e/
│   └── kfcTest.cy.test
├── pages/
├── fixtures/
├── support/
└── screenshots/
```

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd Cypress-Automation-KFC-Page
npm install
```

## Running the Tests

### Open Cypress Test Runner

```bash
npx cypress open
```

### Execute the Test

1. Launch Cypress using the command above.
2. Select **kfcTest.cy.test** from the test runner.
3. Run the test to execute the end-to-end KFC order flow.

## Design Pattern

This project uses the **Page Object Model (POM)** pattern, where page interactions and locators are maintained separately from test scripts. This approach provides:

* Better code reusability
* Easier maintenance
* Improved readability
* Reduced duplication

## Author

Created for automating and validating the KFC online ordering experience using Cypress.
