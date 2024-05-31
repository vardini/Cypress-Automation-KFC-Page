class orderPage {
  locators = {
    deliveryButton:
      '[data-testid="disposition-order-click-handler-Disposition - Delivery"]',
    pickUpButton:
      '[data-testid="disposition-order-click-handler-Disposition - Pickup"]',
    dineInButton:
      '[data-testid="disposition-order-click-handler-Disposition - Dine in"]',
    searchLocationTextField: '[data-testid="store-search-input"]',
    useThisAddress: '[data-testid="use-this-address"]',
    confirmDeliveryLocationButton: '[data-testid="btn-confirm"]',
    confirmScheduleButton: '[data-testid="confirm-button-handler"]',
    editLocationInScheduleOrder: '[data-testid="edit-location-test"]',
    editOrderTypeInScheduleOrder: '[data-testid="edit-disposition-test"]',
    deliveryTimeDropdownButton: '[data-testid="time-input-handler"]',
    deliveryTimeSelectOptions: '[class="schedule-time-list-container"] li',
  };

  clickDeliveryButton(): this {
    cy.get(this.locators.deliveryButton).click();

    return this;
  }

  clickPickUpButton(): this {
    cy.get(this.locators.pickUpButton).click();

    return this;
  }

  clickDineInButton(): this {
    cy.get(this.locators.dineInButton).click();

    return this;
  }

  inputLocationDetails(location: string): this {
    cy.get(this.locators.searchLocationTextField).clear();
    cy.wait(3000);
    cy.get(this.locators.searchLocationTextField).type(location);
    cy.wait(7000);
    cy.get(this.locators.searchLocationTextField).type("{enter}");

    // cy.get(this.locators.useThisAddress).click();

    return this;
  }

  clickConfirmDeliveryLocationButton(): this {
    cy.get(this.locators.confirmDeliveryLocationButton).click();

    return this;
  }

  editLocationInScheduleOrder(): this {
    cy.get(this.locators.editLocationInScheduleOrder).click();

    return this;
  }

  editOrderTypeInScheduleOrder(): this {
    cy.get(this.locators.editOrderTypeInScheduleOrder).click();

    return this;
  }

  selectDeliveryTime(): this {
    cy.get(this.locators.deliveryTimeDropdownButton).click();
    cy.get(this.locators.deliveryTimeSelectOptions).eq(0).click();

    return this;
  }

  confirmOrder(): this {
    cy.get(this.locators.confirmScheduleButton).click();

    return this;
  }
}

export default orderPage;
