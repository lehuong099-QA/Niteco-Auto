import Converter from "../utils/converter";
let converter = new Converter();

class PdpPage {  
    elements = {
        qdpLabel:() => cy.get('.tablet-sticky-bottom > .variant__volume-discount > .pdp-favorite'),
        variantOption: (option) => cy.get("input[value='" + option + "']"),
        qty:()=>cy.get('#qty'),
        addToCartbtn:() => cy.get('.pdp-info__btn > .btn'),
        itemPriceInMiniCart:() => cy.get('.mini-cart__product-price--cost'),
        qtyinMiniCart:()=>cy.get('.mini-cart__product-quantity > .input'),
        proceedToCheckOutbtn: () => cy.get(':nth-child(2) > .mini-cart__btn-to-checkout'),
        // login via login popup
        usernametxt1: () =>cy.get('#dialog-checkout > .bn-dialog-container > [dropdown-panel-container=""] > .bn-dialog__body > .login > .login__right > .login__right__wrapper > .login__auth > .login__form > :nth-child(1) > .input'),
        Passwordtxt1: () => cy.get('#dialog-checkout > .bn-dialog-container > [dropdown-panel-container=""] > .bn-dialog__body > .login > .login__right > .login__right__wrapper > .login__auth > .login__form > :nth-child(2) > .input'),
        signinbtn1:() => cy.get('#dialog-checkout > .bn-dialog-container > [dropdown-panel-container=""] > .bn-dialog__body > .login > .login__right > .login__right__wrapper > .login__auth > .login__form > .btn'),
        // login via login page
        myaccounticon:() => cy.get('.header__util-account-btn > .btn-flat'),
        loginicon:() => cy.get('.has-prev-url > a'),
        usernametxt: () => cy.get('.login__form > :nth-child(1) > .input'),
        Passwordtxt:() => cy.get('.login__form > :nth-child(2) > .input'),
        signinbtn: () => cy.get('.login__form > .btn')
    }
    OpenLoginpage()
    {
        this.elements.myaccounticon().click();
        this.elements.loginicon().click();
    }    

    assertQDPLabelDoNotDisplay()
    {
        this.elements.qdpLabel()
            .should("not.visible");
    }
    assertQDPLabelDisplay()
    {
        this.elements.qdpLabel()
            .should("be.visible");
    }
    choosevariant(variantname)
    {
        this.elements.variantOption(variantname)
                .click();
    }
    inputQTY(qty)
    {
        this.elements.qty()
                .clear()
                .type(qty);
    }
    clickonAddToCartbtn()
    {
        this.elements.addToCartbtn().click();
    }    
    assertItemPriceEqual(expectedPrice) {
        this.elements.itemPriceInMiniCart()
            .invoke("text") //1,042
            .then(priceText=>{
                let actualPrice = converter.extractAmountFromPriceString(priceText);    //1042
                expect(actualPrice).to.be.closeTo(expectedPrice, 0.001);
            })
    }
    inputQTYinMinicart(qty)
    {
        cy.wait(1000);
        cy.intercept('POST', "**/DefaultCart/ChangeCartItem").as('changeCartItem')
        this.elements.qtyinMiniCart()
                .clear({force: true})
                .type(qty,{force: true})
                .type("{enter}",{ force: true });
        cy.wait('@changeCartItem').its('response.statusCode').should('eq', 200)

    }
    clickonProceedtoCheckoutbtn()
    {
        this.elements.proceedToCheckOutbtn().click();
    }
    ClickSignInOnPage (username, password)
    {   
    this.elements.usernametxt().type(username);
    this.elements.Passwordtxt().type (password);
    this.elements.signinbtn().click();
    }
    ClickSignInOnPopup (username, password)
    {   
    this.elements.usernametxt1().type(username,{ delay: 100 });
    cy.wait(1000);
    this.elements.Passwordtxt1().type (password,{ delay: 100 });
    this.elements.signinbtn1().click();
    }
}
    export default PdpPage