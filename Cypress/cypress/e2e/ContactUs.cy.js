import ContactUsPage from "../Pages/ContactUs";
import ContactUsData from "../fixtures/ContactUs.json";

let letContactUs = new ContactUsPage();
describe('ContactUs page', () => {
    //1/ Error message display when user input invalid data 
    it('Verify error msg display when user doesnot input value for require fields', () => {
      //visit PDP URL
      cy.visit(ContactUsData.ContactUs.url);
      // Don't input then click submit btn
      letContactUs.clickSubmitBtn();
      // assert error message for required fields;
      letContactUs.assertMsgForFirstName(ContactUsData.ContactUs.Message.MSG1);
      letContactUs.assertMsgForLastName(ContactUsData.ContactUs.Message.MSG1);
      letContactUs.assertMsgForEmail(ContactUsData.ContactUs.Message.MSG1);
      letContactUs.assertMsgForMessage(ContactUsData.ContactUs.Message.MSG1);
      // input wrong email template
      letContactUs.inputValueforEmail(ContactUsData.ContactUs.Information[0].EmailAddress);
      // click Submit button
      letContactUs.clickSubmitBtn();
      // assert error message for email template;
      letContactUs.assertMsgForEmail(ContactUsData.ContactUs.Message.MSG2);

    })
    //2/ User can submit successfully when user input valid data 
    it('User can submit successfully when user input valid data', () => {
      //visit PDP URL
      cy.visit(ContactUsData.ContactUs.url);
      // Input valid value for requirement fields
      letContactUs.inputValueforFirstName(ContactUsData.ContactUs.Information[1].FirstName);
      letContactUs.inputValueforLastName(ContactUsData.ContactUs.Information[1].LastName);
      letContactUs.inputValueforEmail(ContactUsData.ContactUs.Information[1].EmailAddress);
      letContactUs.inputValueforMessage(ContactUsData.ContactUs.Information[1].Message);
      // Click submit btn
      letContactUs.clickSubmitBtn();
      // Verify The form has been submitted successfully.
      letContactUs.assertContactSuccess(ContactUsData.ContactUs.ContactSuccessfully);

  
  
    })




})
