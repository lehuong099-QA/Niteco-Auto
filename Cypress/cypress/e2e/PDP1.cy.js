import PrdData from "../fixtures/products.json";
// import userData from "../fixtures/User.json";
import PdpPage from "../Pages/PDP1";

let letpdppage = new PdpPage();
describe('PDP page', () => {
  it.only('QDP apply successfully when user checkout enoungh QTY', () => {
    //visit PDP URL
    cy.visit(PrdData.productQDP.url);
    // open login page by clicking the myaccount icon
    // letpdppage.OpenLoginpage();
    // // login
    //letpdppage.ClickSignInOnPage(userData.user.username,userData.user.password);
    // choose variant
    for(let variant of PrdData.productQDP.variantItems)
    {
      letpdppage.choosevariant(variant);
    }
    // assert QDP label display
    letpdppage.assertQDPLabelDisplay();
    // input QTY
    letpdppage.inputQTY(PrdData.productQDP.quantityDiscounts[0].quantity);
    // Click to add to cart btn
    letpdppage.clickonAddToCartbtn();
    // assert item value in minicart display correctly
    letpdppage.assertItemPriceEqual(PrdData.productQDP.quantityDiscounts[0].totalAmount);
    // new QTY into cart
    letpdppage.inputQTYinMinicart(PrdData.productQDP.quantityDiscounts[1].quantity+3);
    //assert new price is applied
    letpdppage.assertItemPriceEqual(PrdData.productQDP.quantityDiscounts[1].totalAmount + 3*PrdData.productQDP.quantityDiscounts[1].pricePerUnit);
    // proceed to checkout
    letpdppage.clickonProceedtoCheckoutbtn();
    //login
    //letpdppage.ClickSignInOnPopup(userData.user.username,userData.user.password);
    
  })

})