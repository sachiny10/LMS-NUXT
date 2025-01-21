export default [
  {
    id: "Done Tickets",
    title: "1. Done Tickets",
    description: `
        The "Done Tickets" tab provides a centralized view of all completed service requests, categorized by their final status. Within this tab, you'll find sub-tabs for "All Done Tickets," "Closed Tickets," "Canceled Tickets," "Tagged Tickets," and "Flagged Tickets." Each sub-tab houses specific types of completed tickets:
        `,
    image: "/images/Ticket/done/done-tickets.png",
  },
  {
    id: "all",
    title: "1.1 All Done Tickets",
    link:'https://demo.inboice.com/app/ticket/view/done/all',
    description: `
      This tab displays a comprehensive list of all finalized service requests, regardless of their specific status. It includes tickets that have been resolved, canceled, or otherwise completed within the system, offering a full view of completed tasks.
      <ol>
      <li>
<b>Search Field</b>
<p>Search tickets easily by entering details like the customer's name, mobile number, or ticket ID in the search input field. This allows quick access to specific tickets without scrolling through the entire list.</p>
</li>
<li>
<b>Excel Download Button</b>
<p>Download the complete ticket list in Excel format. This feature enables users to export data for external use, such as reporting or analysis, with a simple click.</p>
</li>
<li>
<b>Refresh Button</b>
<p>By clicking the refresh button, users can update the ticket list to reflect any changes made, ensuring that the latest ticket data is displayed on the page.</p>
</li>
<li>
<b>Filter Button</b>
<p>Use the filter button to apply specific criteria and view only the tickets that match the selected filters. This feature helps in narrowing down the list to relevant tickets based on user needs.</p>
</li>
<li>
<b>Expand Button</b>
<p>Clicking on the expand button next to each ticket reveals more detailed information about the ticket, including additional notes and specifics of the service request.</p>
</li>
<li>
<b>Comments and Jobs Button</b>
<p>This button provides access to the comments section and job-related information for the ticket, helping users track interactions and tasks performed during the service request.</p>
</li>
<li>
<b>Eye Button</b>
<p>View photos of the product associated with the ticket by clicking the eye button. This feature allows users to visually inspect the product for which the service request was raised.</p>
</li>
</ol>
      `,
    image: "/images/Ticket/done/all.png",
  },

  {
    id:'closed',
    title:'1.2 Closed Tickets',
    link:'https://demo.inboice.com/app/ticket/view/done/closed',
    description:`These tickets represent service requests that have been successfully resolved and closed. Once a ticket is marked as closed, it indicates that the service has been fully completed and no further action is required.`,
    image:'/images/Ticket/done/closed.png'
  },

  {
    id:'canceled',
    title:'1.3 Canceled Tickets',
    link:'https://demo.inboice.com/app/ticket/view/done/canceled',
    description:`These tickets were initiated but were subsequently canceled before being fully processed. Canceled tickets may include requests that were withdrawn by the customer or deemed unnecessary during the service process.`,
    image:'/images/Ticket/done/canceled.png'
  },
  {
    id:'tagged',
    title:'1.3 Tagged Tickets',
    link:'https://demo.inboice.com/app/ticket/view/done/tagged',
    description:`These tickets have been assigned specific tags or labels for easy categorization and filtering. Tags help in organizing and retrieving tickets based on custom criteria, making it easier to manage service requests.`,
    image:'/images/Ticket/done/tagged.png'
  },
  {
    id:'flagged',
    title:'1.4 Flagged Tickets',
    link:'https://demo.inboice.com/app/ticket/view/done/flagged',
    description:`These tickets have been flagged for special attention or further investigation. Flagging is typically used to indicate high-priority tickets or those that require additional oversight or follow-up actions.`,
    image:'/images/Ticket/done/flagged.png'
  },




  {
    id: "open Tickets",
    title: "2. Open Tickets",
    link:'https://demo.inboice.com/app/ticket/view/open/all',
    description: `
        This tab displays all tickets that are currently open and have been raised but not yet resolved &  allows service centers to add jobs, view comments, resend SMS to the center, resend SMS to the customer, assign or change the technician, and edit the ticket.
        `,
    image: "/images/Ticket/open/allopen.png",
  },
  {
    id:"all open",
    title:'2.1 All Open Tickets',
    link:'https://demo.inboice.com/app/ticket/view/open/all',
    description:`
    This tab shows all open tickets that have been raised but not yet resolved, enabling service centers to manage tasks effectively. Users can add jobs, view comments, resend SMS notifications to both centers and customers, assign or change technicians, and edit ticket details. The search field allows quick retrieval of tickets by center or customer name, mobile number, or ticket ID. Additional features include exporting data with the Excel download button, refreshing the ticket list, applying filters, expanding ticket details, printing tickets, and using the action button for various management tasks.
    `,
    image:'/images/Ticket/open/all-open.png'
  },



  {
    id: "New Tickets",
    title: "2.2 New Tickets",
    link:'https://demo.inboice.com/app/ticket/view/open/new',
    description: `
The New Tickets tab displays all newly created tickets in the system, including both All New Tickets and Unassigned Tickets that have not been assigned to a technician. It helps track incoming requests requiring action or assignment.
      `,
    image: "/images/Ticket/open/new-tickets.png",
  },

  {
    id:'all new',
    title:'2.2.1 All New Tickets',
    link:'https://demo.inboice.com/app/ticket/view/open/new',
    description:`The new tickets section offers a streamlined approach to managing service requests with several key functionalities for user convenience. A search field allows users to quickly find tickets by entering details such as the center's name, customer's name, mobile number, or ticket ID, eliminating the need to browse through the entire list. The Excel download button provides an easy way to export the full ticket list for reporting or further analysis. Users can also keep their data current by clicking the refresh button to update the ticket list with recent changes. The filter button helps refine the ticket view by applying specific criteria, ensuring relevant results are displayed. Detailed ticket information, such as service type, OTP, priority, and quantity, can be viewed by using the expand button. For documentation or sharing, the print button at the end of each ticket enables users to print the complete ticket details on a single page. Additionally, the action button next to the print button provides several functions, including adding jobs, viewing comments, resending SMS notifications to the center or customer, assigning or changing technicians, and editing ticket details.
`,
image:'/images/Ticket/open/all-new-tickets.png'
  },


  {
    id:'unassigned',
    title:'2.2.2 Unassigned Tickets',
    link:'https://demo.inboice.com/app/ticket/view/open/unassigned',
    description:`
    The unassigned tickets tab displays all tickets that have not been assigned to a technician. From this tab, users can assign these tickets to the appropriate technician for further action.
    `,
    image:'/images/Ticket/open/unassigned.png'
  },




  {
    id: "Pending Tickets",
    title: "2.3 Pending Tickets",
    link:'https://demo.inboice.com/app/ticket/view/open/pending',
    description: `
    The Pending Tickets section in the Invoice CRM provides a consolidated view of all tickets that are currently in a pending state. This section helps users manage unresolved or paused service requests that require further action. It includes tickets awaiting spare parts, customer inputs, or technician availability. Users can view essential ticket details such as the ticket ID, service center, customer information, product details, and the current status of the ticket.
      `,
    image: '/images/Ticket/open/pending-tickets.png',
  },

  {
    id:'all-pending',
    title:'2.3.1 All Pending Tickets',
    link:'https://demo.inboice.com/app/ticket/view/open/pending',
    description:`
    The 'All Pending Tickets' section in the Invoice CRM includes several key features designed for efficient ticket management. The search field enables users to quickly locate tickets by entering relevant details such as the center's name, customer's name, mobile number, or ticket ID, making it easy to find specific tickets without manually scrolling through the list. An Excel download button allows the entire ticket list to be exported for external use, supporting activities like reporting and analysis. The refresh button ensures the ticket list is updated to reflect any recent changes, displaying the most current ticket data. A filter button helps users apply specific criteria to display only tickets matching the chosen filters, aiding in focused review. The expand button offers detailed insights into individual tickets, revealing information like service type, OTP, priority, and quantity. At the end of each ticket, a print button provides a convenient way to print all details on a single page, neatly organizing customer information, service details, and current status for documentation. Next to it, the action button offers versatile options such as adding jobs, viewing comments, resending SMS notifications to both service centers and customers, assigning or changing the technician, and editing ticket details as needed. These comprehensive features streamline ticket management and improve workflow efficiency.
    `,
    image:'/images/Ticket/open/all-pending.png'
  },

  {
    id:'re-open',
    title:'2.3.3 All Re-Opened Tickets',
    link:'https://demo.inboice.com/app/ticket/view/open/re-opened',
    description:`The 'All Re-Opened Tickets' section in the Invoice CRM offers essential features to enhance ticket management. Users can utilize the search field to find specific tickets effortlessly by inputting details like the center's name, customer's name, mobile number, or ticket ID, bypassing the need to scroll through extensive lists. The Excel download button facilitates the export of the complete ticket list for external purposes such as reporting or analysis. A refresh button keeps the ticket list up-to-date by reflecting recent changes for accurate viewing. The filter button is available to apply specific criteria, allowing users to focus on tickets that meet chosen filters. Expanding a ticket reveals detailed information, including service type, OTP, priority, and quantity. For seamless documentation, a print button at the end of each ticket prints all ticket details, presenting customer information, service specifics, and status on a single page. The adjacent action button includes various functionalities: adding jobs, viewing comments, resending SMS notifications to service centers or customers, assigning or changing technicians, and editing ticket details. These features collectively streamline management and boost operational efficiency.`,
    image:'/images/Ticket/open/re-opened.png'
  },

  {
    id: "search  ticket",
    title: "3. Ticket Search",
    link:'https://demo.inboice.com/app/ticket/search',
    description: `
    The Search Ticket tab in the CRM allows users to quickly locate any ticket by entering either the ticket ID or the customer's registered mobile number, ensuring fast access to ticket details.
      `,
    image: "/images/Ticket/search/search.png",
  },
];
