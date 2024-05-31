class kfcHomePage {
  locators = {
    setLocationValueText: 'div[class="setLocationText"]',
    setLocationValueButton: 'button[data-testid="set-location-button"]',
    tilelist: '[class="menu-cards"]',
    startOrderButton: '[aria-label="Start Order"]',
  };

  url = "/";

  visit(): void {
    cy.visit(this.url);
  }

  verifyLocationText(locationverificationText: string): void {
    cy.get(this.locators.setLocationValueText).should(
      "have.text",
      locationverificationText
    );
  }

  verifyLocationButton(): void {
    cy.get(this.locators.setLocationValueButton)
      .should("be.visible")
      .should("be.enabled");
  }

  verifyTileisValidLink(tile: string): void {
    const hrefvalue = 'a[href="/menu/' + tile + '"]';

    cy.get(hrefvalue)
      .should("exist")
      .then((link) => {
        const href: string = link.prop("href");

        cy.request(href).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  }

  clickstartYourOrder(): void {
    cy.get(this.locators.startOrderButton).click();
  }
}

export default kfcHomePage;
