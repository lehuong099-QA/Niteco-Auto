import BrandData from "../fixtures/Brand.json";

class BrandPage {  
    elements = {
        Brandlink:() => cy.get('.content-block__content > p > a'),
        SpecificLetter:() => cy.get('.manufacturer-list > :nth-child(1) > a'),
        SpecificBrand:() => cy.get('.row > :nth-child(1) > a'),
        LetterTitle:() => cy.get('.manufacturer-detail__title'),
        // cy.get('.manufacturer-listing__header--title')
       
    }

    clickBrandLink()
    {
        this.elements.Brandlink().click();
    }
    
    assertlink()    //
    {
        cy.url().should("equal", BrandData.Brand.urllink);
    }

    clickSpecificLetter()   //
    {
        this.elements.SpecificLetter().click();
    }

    clickSpecificBrand()
    {
        this.elements.SpecificBrand().click();
    }

    assertSpecificLetter(text)  //
    {
        this.elements.LetterTitle()
        .invoke ("text")
        .should("eq",text);
    }
    assertSpecificBrand(text)
    {
        this.elements.SpecificBrand()
        .invoke ("text")
        .should("eq",text);
    }
    assertbrandlink()    //
    {
        cy.url().should("equal", BrandData.Brand.urlBrand);
    }



}

export default BrandPage