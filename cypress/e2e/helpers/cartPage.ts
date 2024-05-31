class cartPage {
  private readonly gst: number = 0.05;
  private readonly deliveryCharge: number = 38.08;

  locators = {
    checkoutButtonWithTotal: '[data-testid="navigation-checkout-desktop"]',
  };

  url = "/cart";

  visit(): void {
    cy.visit(this.url);
  }

  verifyTotalAmount(prices: number[]): void {
    let sum: number = 0;

    prices.forEach((num) => {
      sum += num;
    });

    const totalWithGST: number = sum + sum * this.gst + this.deliveryCharge;
    cy.contains(totalWithGST);
  }
}

export default cartPage;
