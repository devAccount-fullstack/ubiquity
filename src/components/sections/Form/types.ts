declare module 'react-hubspot-form' {
    import * as React from 'react';
  
    export interface FormProps {
      portalId: string;
      formId: string;
      onFormSubmitted?: () => void;
      onFormReady?: () => void;
      loading?: React.ReactNode;
      cssClass?: string;
      submitText?: string;
    }
  
    const ContactHubSpotForm: React.FC<FormProps>;
    export default ContactHubSpotForm;
}
  
