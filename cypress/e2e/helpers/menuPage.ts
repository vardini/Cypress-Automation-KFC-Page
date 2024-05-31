class menuPage {
  locators = {
    changeLocationButton: '[aria-label="Change"]',
    editLocationButton: '[data-testid="edit-location-test"]',
  };

  url = "/menu";

  visit(): void {
    cy.visit(this.url);
  }

  changeLocation(): void {
    cy.get(this.locators.changeLocationButton).click();
    cy.get(this.locators.editLocationButton).click();
  }

  addToCartItem(itemNumber: string): void {
    // const itemLocator = '[id="' + itemNumber + '"]';
    const itemAddToCartLocator =
      '[data-testid="add-to-cart-' + itemNumber + '"]';

    cy.get(itemAddToCartLocator).scrollIntoView().click();
  }
}

export default menuPage;
