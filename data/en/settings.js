export default [
  {
    id: "intro",
    title: " 1. General Settings",
    link:"https://demo.inboice.com/app/setting",
    description: `
           This is the General Settings page of an Invoice CRM system. It allows users to customize their experience by adjusting features like notification sound, dark theme, QR code text visibility, font size, and popup expiry time.
          `,
    image: "/images/Settings/general.png",
  },
  {
    id: "notification",
    title: "1.1 Notification Sound",
    link:'https://demo.inboice.com/app/setting',
    description: `
    The Notification Sound feature allows users to toggle sound alerts for system notifications. When enabled, a sound will play whenever there is a new notification, helping users stay updated in real-time. If disabled, notifications will appear silently, ensuring a distraction-free environment in quiet settings.
    `,
    image: "/images/Settings/notification.png",
  },

  {
    id: "Dark",
    title: "1.2 Dark Theme",
    link:'https://demo.inboice.com/app/setting',
    description: `
    The Dark Theme feature transforms the interface into a dark color scheme, reducing eye strain in low-light environments. When enabled, it replaces the light background with dark shades while maintaining visibility of text and elements. This mode is ideal for users who prefer a less bright interface.
    `,
    image: "/images/Settings/dark.png",
  },
  {
    id: "customer",
    title: "1.3 Customer Care Pitch Dialog",
    link:'https://demo.inboice.com/app/setting',
    description: `
    When enabled, a dialog box appears at the bottom of the screen, helping customer care agents guide users or pitch product details during a support call.
    `,
    image: "/images/Settings/pitch.png",
  },


  {
    id: "bottom",
    title: "1.4 Bottom Bar Elements:",
    description: `
    Product Registration, Ticket Registration, etc.: These buttons provide predefined conversation starters or responses, allowing agents to quickly address common queries.
    `,
    image: "/images/Settings/bottom.png",
  },

  {
    id: "language",
    title: "1.5 Language English/Hindi",
    description: `
   The language button in the corner allows you to switch between English/Hindi language. This is likely to be useful for users who are not fluent in the default language of the website or application. By clicking on the button, you can select a different language from the available options, and the interface will be translated accordingly.
    `,
    image: "/images/Settings/language.png",
  },

  {
    id: "moving",
    title: "1.6 Moving Pitch Dialog Bar on Top",
    description: `
   By clicking on up arrow button next to the language change button user can move the Pitch Dialog Bar on the Top. As shown in below picture
    `,
    image: "/images/Settings/top.png",
  },
  {
    id: "close",
    title: "1.7 Close Button",
    description: `
   By clicking on cross button next to the up arrow button user can close the Pitch Dialog Bar. As shown in below picture
    `,
    image: "/images/Settings/close.png",
  },

  {
    id: "show",
    title: "1.8 Show texts in QR codes",
    link:'https://demo.inboice.com/app/setting',
    description: `In our CRM, the "Show Texts in QR Codes" button allows users to control whether the name of a product or spare is displayed below the barcode when downloaded from the Product/Spare QR List. When this button is enabled, the name of the product or spare is shown beneath the barcode, making it easy to identify which barcode corresponds to which item. However, when the button is disabled, only the barcode is visible, without any accompanying text. This feature provides flexibility, enabling users to choose whether or not to display item names below the barcodes based on their specific requirements.`,
    image: "/images/Settings/show.png",
  },


  {
    id: "notification",
    title: "1.9 Notification popup expiry time (in seconds)",
    link:'https://demo.inboice.com/app/setting',
    description: `
   You can adjust the Notification popup expiry time in the general settings menu. Look for the 'Notification popup expiry time (in seconds)' section, where you can increase or decrease the duration in seconds. This allows you to customize how long notifications remain visible before automatically disappearing.
    `,
    image: "/images/Settings/popup.png",
  },

  {
    id: "font",
    title: "1.10 Base font size (in pixels)",
    link:'https://demo.inboice.com/app/setting',
    description: `
    In our General Settings, we have a feature that allows users to easily adjust the font size of the text. This ensures enhanced readability and accessibility, catering to different user preferences. You can instantly increase or decrease the font size.
    `,
    image: "/images/Settings/font.png",
    },

    {
      id:'excel',
      title:'1.11 Freeze first row and column in excel export',
      link:'https://demo.inboice.com/app/setting',
      description:`
      Our Invoice CRM web app includes a feature that freezes the first row and first column when exporting data to Excel. This means that even when you scroll through large spreadsheets, the headers (first row) and key identifiers (first column) remain visible, making it easier to navigate and understand your data.
      `,
      image:'/images/Settings/freeze.png'
    },
    {
      id:'SMS',
      title:'2. SMS & Email Settings',
      link:'https://demo.inboice.com/app/setting/sms-and-email',
      description:`
      Here we have templates for all types of messages that are sent to the customer's phone and email. From this tab, we can turn all these messages on and off. Here we can also edit the templates.
      `,
      image:'/images/Settings/sms.png'
    },
    {
      id:'web',
      title:'3. Web Hooks',
      link:'https://demo.inboice.com/app/setting/hook',
      description:`
      This features is not enabled for you yet or in beta testing
      `,
      image:'/images/Settings/web.png'
    },
    {
      id:'output',
      title:'4. Output API',
      link:'https://demo.inboice.com/app/setting/api',
      description:`
      Experimental Feature
      `,
      image:'/images/Settings/output.png'
    },

  {
    id: "theme",
    title: "5. Branding/Theme",
    link:'https://demo.inboice.com/app/setting/branding',
    description: ` This settings page allows you to personalize the appearance of your Invoice CRM software, including the logo, its background, and its position on the login page. These settings help you align the software’s visual identity with your brand.
 `,
    image: "/images/Settings/theme.png",
  },
  {
    id: "system",
    title: "6. System Configuration",
    link:'https://demo.inboice.com/app/setting/system',
    description: `
    This System Configuration page in the Invoice CRM application provides comprehensive control over various system-level settings. It allows the admin to manage security settings, product/spare configurations, account features, ticket settings, installation preferences, and more. Changes made here affect the entire system, streamlining workflows, security, and service management across the CRM platform.
    `,
    image: '/images/Settings/system.png',
  },
  {
    id:'Security',
    title:'6.1 Bind IP in request',
    description:`

    `,
    image:'/images/Settings/system/security.png'
  },

  {
    id:'barcode',
    title:'6.2 Barcode Mandatory',
    description:`
    When this feature is enabled, the system automatically generates a barcode for every product or spare part added to the Product and Spare Inventory section. This helps in efficient tracking and inventory management. If the feature is disabled, the system does not generate barcodes.
    `,
    image:'/images/Settings/system/barcode.png'
  },

  {
    id:'feedback',
    title:'6.3 Feedback Mandatory to Release Service Pay',
    description:`

    `,
    image:'/images/Settings/system/feedback.png'
  },

  {
    id:'tagged',
    title:'6.4 Release Service Pay for tagged tickets',
    description:`

    `,
    image:'/images/Settings/system/tagged.png'
  },

  {
    id:'hours',
    title:'6.5 Release Service Pay on Action Hours Basis otherwise Closing hours',
    description:`

    `,
    image:'/images/Settings/system/hours.png'
  },

  {
    id:'installation',
    title:'6.6 Enable Installation Tickets',
    description:`

    `,
    image:'/images/Settings/system/installation.png'
  },

  {
    id:'serial',
    title:'6.7 Serial Number is mandatory',
    description:`
    The Serial Number is Mandatory feature ensures that a serial number must be provided while raising, closing, marking as pending, or canceling a ticket.
    `,
    image:'/images/Settings/system/serial.png'
  },

  {
    id:'invoice',
    title:'6.8 Invoice Number is mandatory',
    description:`
    The Invoice Number is Mandatory feature ensures that a Invoice number must be provided while raising, closing, marking as pending, or canceling a ticket.
    `,
    image:'/images/Settings/system/invoice.png'
  },

  {
    id:'mobile',
    title:'6.9 Alternate Mobile is mandatory',
    description:`
    The Alternate Mobile is mandatory feature ensures that a Alternate Mobile must be provided while raising, closing, marking as pending, or canceling a ticket & the Alternate mobile number & mobile number should not be the same.
    `,
    image:'/images/Settings/system/alternate.png'
  },


  {
    id:'email',
    title:'6.10 Email is mandatory',
    description:`
    The Email is mandatory feature ensures that Email must be provided while raising a ticket & adding customers.
    `,
    image:'/images/Settings/system/email.png'
  },


  {
    id:'assign',
    title:'6.11 Auto Assign Center Manager as Technician',
    description:`
    This feature assign job to the technician automatically
    `,
    image:'/images/Settings/system/assign.png'
  },

  {
    id:'closed',
    title:'6.12 OTP is mandatory to mark closed',
    description:`
    The OTP is Mandatory to Mark Closed feature requires users to enter a One-Time Password (OTP) when attempting to close a ticket. This adds an extra layer of security and ensures that only authorized individuals can complete the ticket closure process, preventing unauthorized or accidental ticket closures.
    `,
    image:'/images/Settings/system/otpclosed.png'
  },


  {
    id:'pending',
    title:'6.13 OTP is mandatory to mark Pending',
    description:`
    The OTP is Mandatory to Mark Pending feature requires users to enter a One-Time Password (OTP) when placing a ticket in pending status. This ensures that only authorized personnel can change the ticket's status to pending, enhancing security and preventing unauthorized modifications to ticket workflows.
    `,
    image:'/images/Settings/system/otppending.png'
  },


  {
    id:'self',
    title:'6.14 OTP is mandatory in self service',
    description:`
    This feature makes OTP mandatory while raising a ticket from the self service portal.
    `,
    image:'/images/Settings/system/otpself.png'
  },


  {
    id:'tat',
    title:'6.15 Auto cancellation after TAT expires as per category',
    description:`

    `,
    image:'/images/Settings/system/tat.png'
  },

  {
    id:'technician',
    title:'6.16 Technician Location ',
    description:`
    This feature makes it mandatory to get the location from the technician
    `,
    image:'/images/Settings/system/technician.png'
  },


  {
    id:'required',
    title:'6.17 Required documents/images',
    description:`
    This feature makes it mandatory to provide documents/images.
    `,
    image:'/images/Settings/system/docs.png'
  },

  {
    id: "Broadcast",
    title: "7. Broadcast",
    link:'https://demo.inboice.com/app/setting/broadcast',
    description: `The Broadcast Message feature allows admins to create and publish custom messages that will pop up at the top of every user's dashboard. These messages can be used to inform the team about important updates, changes, or new policies. The feature is fully customizable, enabling the admin to control who receives the message based on centers or roles. It also offers background color customization, allowing messages to be visually distinct and easily noticed. This ensures that essential information is clearly communicated across the organization.
    `,
    image: "/images/Settings/broadcast.png",
  },
];
