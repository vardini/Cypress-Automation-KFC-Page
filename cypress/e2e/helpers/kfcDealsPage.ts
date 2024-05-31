class kfcDealsPage {
  locators = {
    findAKfcButton: '[aria-label="Find a KFC"]',
    startYourOrder: '[data-testid="contenttext-component"]',
  };

  url = "/offers";

  visit(): void {
    cy.visit(this.url);
  }

  clickFindAKfcButton(): this {
    cy.get(this.locators.findAKfcButton).click();

    return this;
  }

  verifyStartOrderText(startYourOrderText: string): this {
    cy.get(this.locators.startYourOrder).contains(startYourOrderText);

    return this;
  }
}

export default kfcDealsPage;
