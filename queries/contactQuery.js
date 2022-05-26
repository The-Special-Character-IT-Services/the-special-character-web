const ContactQuery = `{
    contactPage{
      bannerHeading{
        title
        description
      }
      faqsHeading{
        title
        description
      }
      faqsAccordian{
        id
        title
        description
      }
      contactDetails{
        id
        icon{
          id
          alternativeText
          url
        }
        contactType
        displayText
        link
      }
    }
  }`;

export default ContactQuery;
