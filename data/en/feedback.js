export default [
    {
        id:'introduction',
        title:'1. Significance of The Button',
        link:'https://demo.inboice.com/app/setting/system',
        description:`
        In our CRM, when the "Feedback Mandatory to Release Service Pay" option is enabled, closed, canceled, and tagged tickets will automatically move into the "Urgent Feedback" section. Specifically, closed tickets will appear in the "Urgent Closed" tab, canceled tickets in the "Urgent Canceled" tab, and tagged tickets in the "Urgent Tagged" tab. However, if this option is disabled, these tickets will be saved in the "Optional Feedback" section instead. Closed tickets will go into the "Add Closed (Optional)" tab, canceled tickets into the "Add Canceled (Optional)" tab, and tagged tickets into the "Add Tagged (Optional)" tab.
        `,
        image:'/images/Feedback/button.png'
    },
    {
        id:'urgent feedback',
        title:'1.1 Add Closed tab in Urgent Feedback tab',
        link:'https://demo.inboice.com/app/feedback/add/closed',
        description:`
        The search functionality in your Invoice CRM allows users to quickly retrieve tickets by entering specific details like the center's name, customer's name, mobile number, or ticket ID. This enables fast access without scrolling through extensive lists. The Excel download button exports the ticket list for external use, while the refresh button ensures the data is up to date. Users can apply filters to view tickets based on specific criteria. In the "Add Closed (Urgent)" section, the <b>"Update and Approval"</b> button opens a new tab for actions like collecting feedback, updating ticket details, approving tickets for payment, or flagging tickets for review. Additional options include putting tickets on hold, reopening incomplete service tickets, and viewing associated product lists.
        `,
        image:'/images/Feedback/closedurgent.png'
    },
    {
        id:'canceled feedback',
        title:'1.2 Add Canceled tab in Urgent Feedback tab',
        link:'https://demo.inboice.com/app/feedback/add/canceled',
        description:`The search functionality in your Invoice CRM allows users to quickly retrieve tickets by entering specific details like the center's name, customer's name, mobile number, or ticket ID. This enables fast access without scrolling through extensive lists. The Excel download button exports the ticket list for external use, while the refresh button ensures the data is up to date. Users can apply filters to view tickets based on specific criteria. In the "Add Canceled (Urgent)" section, the <b>"Update and Approval"</b> button opens a new tab for actions like collecting feedback, updating ticket details, approving tickets for payment, or flagging tickets for review. Additional options include putting tickets on hold, reopening incomplete service tickets, and viewing associated product lists.
        `,
        image:'/images/Feedback/canceledurgent.png'
    },
    {

      id:'tagged feedback',
      title:'1.3 Add tagged tab in Urgent Feedback tab',
      link:'https://demo.inboice.com/app/feedback/add/tagged',
      description:`The search functionality in your Invoice CRM allows users to quickly retrieve tickets by entering specific details like the center's name, customer's name, mobile number, or ticket ID. This enables fast access without scrolling through extensive lists. The Excel download button exports the ticket list for external use, while the refresh button ensures the data is up to date. Users can apply filters to view tickets based on specific criteria. In the "Add Tagged (Urgent)" section, the <b>"Update and Approval"</b> button opens a new tab for actions like collecting feedback, updating ticket details, approving tickets for payment, or flagging tickets for review. Additional options include putting tickets on hold, reopening incomplete service tickets, and viewing associated product lists.
      `,
      image:'/images/Feedback/taggedurgent.png'
    },
    {
      id:'optional feedback',
      title:'2. Optional Feedback',
      link:'https://demo.inboice.com/app/feedback/optional/closed',
      description:` 
      <p>In our CRM, the process for handling tickets in the "Optional Feedback" section's closed, canceled, and tagged tabs is the same as in the "Urgent Feedback" section. You can collect customer feedback, use the "Update & Approve" or "Approve Only" buttons to release payment, place tickets on hold, re-open tickets if service is incomplete, or flag tickets for further review. The key difference is that the tickets in the "Optional Feedback" section do not require mandatory feedback to be fully closed, whereas in the "Urgent Feedback" section, feedback is mandatory for ticket closure and payment release.</p>
      `,
      image:'/images/Feedback/closedoptional.png'
    },
    {
      id:'holded feedback',
      title:'3. Holded Feedback',
      link:'https://demo.inboice.com/app/feedback/hold/closed',
      description:`
      <p>In our CRM, when handling tickets, there are "Hold Closed," "Hold Canceled," and "Hold Tagged" ticket types. These tickets move into their respective tabs when a closed, canceled, or tagged ticket is put on hold. For example, when a closed ticket is placed on hold, it moves to the "Hold Closed" tab; similarly, canceled and tagged tickets move to the "Hold Canceled" and "Hold Tagged" tabs, respectively. These held tickets can then be processed and approved in the same manner as tickets in the feedback sections. You can use options like "Update & Approve," "Approve Only," "Re-open," "Flag/Report," or "Hold" to manage them, ensuring flexible handling of ticket statuses while on hold.</p>
      `,
      image:'/images/Feedback/holded.png'
    },
    {
      id:'done feedback',
      title:'4. Done Feedback',
      link:'https://demo.inboice.com/app/feedback/view/closed',
      description:`
      <p>In the "Done Feedback" section of your CRM, there are multiple tabs such as "View Closed," "View Canceled," "View Tagged," and "View Flagged." Each tab contains tickets that correspond to their nature: closed, canceled, tagged, or flagged. These tickets have already been approved with customer feedback. In each of these tabs, at the end of every ticket, there is a "Comments" button. By clicking this button, you can view all comments related to the respective ticket, from the initial creation to the final closure. This feature allows you to track the entire conversation and updates made during the ticket's lifecycle.</p>
      `,
      image:'/images/Feedback/done.png'
    },
    {
      id:'add sales',
      title:'5. Add Sales/Order Review',
      link:'https://demo.inboice.com/app/feedback/review/add',
      description:'This features is not enabled for you yet or in beta testing',
      image:'/images/Feedback/addsales.png'
    },
    {
      id:'view sales',
      title:'6. View Sales/Order Review',
      link:'https://demo.inboice.com/app/feedback/review/view',
      description:'This features is not enabled for you yet or in beta testing',
      image:'/images/Feedback/viewsales.png'
    }
]