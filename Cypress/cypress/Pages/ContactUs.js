//import ContactUsData from "../fixtures/ContactUs.json";
class ContactUsPage {  
    elements = {
        FirstName:() => cy.get('#8fa1dfc4-6c55-4ae4-a843-f1a9376593b7'),
        LastName:() => cy.get('#86fd0825-dcff-4360-8972-fc5f00fb7e02'),
        Email:()=>cy.get('#f605ed5e-efb0-4e16-8576-47b661767b8e'),
        Department: ()=> cy.get('.bn-select__selected-item'),
        OrderConfirm:() =>cy.get('#c8bbcece-21c6-4372-85fe-67a68483451c'),
        Message:() => cy.get('#ea86b844-fc8e-4ad2-b08a-c61b1a6a141e'),
        Submitbtn:() =>cy.get('#0baea710-1e57-4cf7-82b5-6822ee904f99'),
        FirstNameMsg: () =>cy.get('#__field_12633_desc'),
        LastNameMsg:() => cy.get('#__field_12634_desc'),
        EmailMsg:() => cy.get('#__field_12635_desc'),
        MessageMsg:() => cy.get('#__field_12638_desc'),
        successLabel:() =>cy.get('#ed0fd8ce-dbc2-4318-a1e1-cb4b2d957485 > :nth-child(7) > :nth-child(1) > :nth-child(1)')

    }

    clickSubmitBtn()
    {
        this.elements.Submitbtn().click();
    }    
    
    assertMsgForFirstName(msg)
    {
        
        this.elements.FirstNameMsg()
            .invoke ("text")
            .should("eq",msg);
    }   
    assertMsgForLastName(msg)
    {
        
        this.elements.LastNameMsg()
            .invoke ("text")
            .should("eq",msg);
    }  
    assertMsgForEmail(msg)
    {
        
        this.elements.EmailMsg()
            .invoke ("text")
            .should("eq",msg);
    }      
    assertMsgForMessage(msg)
    {
        
        this.elements.MessageMsg()
            .invoke ("text")
            .should("eq",msg);
    }   
    assertContactSuccess(text)
    {
        
        this.elements.successLabel()
            .invoke ("text")
            .should("eq",text);
    }  

    inputValueforFirstName(value)
    {
        this.elements.FirstName()
                .clear()
                .type(value);
    }
    inputValueforLastName(value)
    {
        this.elements.LastName()
                .clear()
                .type(value);
    }
    inputValueforEmail(value)
    {
        this.elements.Email()
                .clear()
                .type(value);
    }

    inputValueforMessage(value)
    {
        this.elements.Message()
                .clear()
                .type(value);
    }

    
}
    export default ContactUsPage