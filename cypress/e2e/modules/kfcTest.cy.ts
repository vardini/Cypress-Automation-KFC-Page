import KfcHomePage from "../helpers/kfcHomePage";
import KfcDealsPage from "../helpers/kfcDealsPage";
import MenuPage from "../helpers/menuPage";
import OrderPage from "../helpers/orderPage";
import CartPage from "../helpers/cartPage";

const kfcHomePage = new KfcHomePage();
const kfcDealsPage = new KfcDealsPage();
const menuPage = new MenuPage();
const orderPage = new OrderPage();
const cartPage = new CartPage();

describe("Verify the KFC Home page location details and Deals page menu tiles", () => {
  let UITextsJson: {
    startYourOrderText: string;
    locationText: string;
    locationInputTextMumbai: string;
    locationInputTextChennai: string;
  };
  // let itemDetailsJson: { id: string; name: string; price: number };

  before(() => {
    cy.fixture("UITexts").then((UITexts) => {
      UITextsJson = UITexts;
    });

    // cy.fixture("itemDetails").then((itemDetails) => {
    //   itemDetailsJson = itemDetails;
    // });
  });

  it("Verify the location text and button in home page is displayed correcly", () => {
    kfcHomePage.visit();
    kfcHomePage.verifyLocationText(UITextsJson.locationText);
    kfcHomePage.verifyLocationButton();
  });

  it("Verify the category menu tiles in Home page have valid links", () => {
    const expectedTiles: string[] = [
      "value-snackers",
      "peri-peri-chicken",
      "chicken-rolls",
    ];

    kfcHomePage.visit();
    expectedTiles.forEach((tile) => {
      kfcHomePage.verifyTileisValidLink(tile);
    });
  });

  it("Verify the Kfc deals page ", () => {
    kfcDealsPage.visit();
    kfcDealsPage
      .clickFindAKfcButton()
      .verifyStartOrderText(UITextsJson.startYourOrderText);
  });

  it("Select location and delivery time ", () => {
    kfcHomePage.visit();
    cy.clearLocalStorage();
    cy.wait(3000);
    kfcHomePage.clickstartYourOrder();
    orderPage
      .clickDeliveryButton()
      .inputLocationDetails(UITextsJson.locationInputTextChennai);
    cy.wait(3000);
    orderPage.clickConfirmDeliveryLocationButton();
    orderPage.selectDeliveryTime().confirmOrder();
  });

  it("Edit the location to a different Location", () => {
    kfcHomePage.visit();
    cy.clearLocalStorage();
    cy.wait(3000);
    kfcHomePage.clickstartYourOrder();
    orderPage
      .clickDeliveryButton()
      .inputLocationDetails(UITextsJson.locationInputTextChennai);
    cy.wait(3000);
    orderPage.clickConfirmDeliveryLocationButton();
    orderPage.selectDeliveryTime().confirmOrder();
    cy.wait(2000);

    menuPage.changeLocation();
    orderPage.inputLocationDetails(UITextsJson.locationInputTextMumbai);
    orderPage.clickConfirmDeliveryLocationButton();
  });

  it("Add items to cart and verify total value in cart", () => {
    kfcHomePage.visit();
    cy.clearLocalStorage();
    cy.wait(3000);
    kfcHomePage.clickstartYourOrder();
    orderPage
      .clickDeliveryButton()
      .inputLocationDetails(UITextsJson.locationInputTextMumbai);
    cy.wait(3000);
    orderPage.clickConfirmDeliveryLocationButton();
    orderPage.selectDeliveryTime().confirmOrder();

    const itemsToAdd: string[] = ["L-404135", "L-404068"];

    itemsToAdd.forEach((item) => {
      menuPage.addToCartItem(item);
    });
    const itemsPrices: number[] = [448.57, 500.34];
    cartPage.visit();
    cartPage.verifyTotalAmount(itemsPrices);
  });
});
