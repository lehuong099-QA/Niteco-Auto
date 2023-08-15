import BrandPage from "../Pages/Brand";
import BrandData from "../fixtures/Brand.json";

let letBrand = new BrandPage();
describe('Brand page', () => {
    //3/ User will redirect to branding listing page when click on [Shop All Our Brands At Once!] 
    it('User will redirect to branding listing page when click on [Shop All Our Brands At Once!]', () => {
        //visit Brand URL
        cy.visit(BrandData.Brand.urloriginal);
        // Click the link
        letBrand.clickBrandLink();
        // Verify redirect to correct link
        letBrand.assertlink();
    })
    //4/ Brand display correctly when user choose specific letter  
    it('Brand display correctly when user choose specific letter ', () => {
        //visit Brand URL
        cy.visit(BrandData.Brand.urloriginal);
        // Click the specific letter
       letBrand.clickSpecificLetter();
        // Verify brand display correctly
       letBrand.assertSpecificLetter(BrandData.Brand.SpecificLetter);

    })
    //5/ User will redirect to brand page when click on specific brand 
    it.only('User will redirect to brand page when click on specific brand', () => {
        //visit Brand URL
        cy.visit(BrandData.Brand.urloriginal);
        // Click the specific letter
        letBrand.clickSpecificLetter();
        // Click the specific brand
       letBrand.clickSpecificBrand();
        // Verify brand display correctly
        letBrand.assertbrandlink(BrandData.Brand.urlBrand);
       

    })



})

