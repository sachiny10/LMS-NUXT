export default [
  {
    id: "Introduction",
    title: "1. Overview",
    link:'https://demo.inboice.com/app/spare-inventory/view/stock',
    description: `
        The Spare Inventory section in your CRM is designed to efficiently manage and track the lifecycle of spare parts. It includes key functionalities such as monitoring "Spare Stock" to keep track of inventory levels, "Spare Consumption" to record the usage of spares during services, and "Spare PO" (Purchase Orders) for ordering new stock when levels are low. The "Stock Updates" tab allows for adjustments to stock quantities, and the "Scrap Returns" tab helps manage the return or disposal of unusable or damaged spare parts. This section ensures precise control over spare inventory and optimizes resource management.
        `,
    image: "/images/SpareIn/intro.png",
  },
  {
    id: "spare stock",
    title: "2. Spare Stocks",
    link:'https://demo.inboice.com/app/spare-inventory/view/stock',
    description: `
    The Spare Inventory List section provides a comprehensive view of spares, including stock quantities and scrap counts, organized by center for a clear overview of inventory levels across various locations. The search functionality allows users to quickly find specific centers by name, streamlining data analysis. The refresh button ensures the data is up-to-date, while the Download Excel Sheet button enables users to export the entire list for further analysis. Additionally, the filter functionality allows users to refine the data by selecting a specific center or spare from dropdown lists, aiding in the identification of shortages or surpluses across different locations or spares.
        `,
    image: "/images/SpareIn/stocks.png",
  },
  {
    id: "spare consumptions",
    title: "3. Spare Consumptions",
    link:'https://demo.inboice.com/app/spare-inventory/view/consumption',
    description: `
    This interface is designed for managing spare inventory transactions and consumption, offering a comprehensive overview of spare usage across different centers. The search functionality allows users to quickly locate specific transactions by entering an ID or center name, facilitating quick identification of spare usage for particular jobs or centers. The "Refresh" button ensures that the information displayed is always current, reflecting the latest spare transactions. Users can also export the full list of transactions using the "Download Excel Sheet" button for deeper analysis or reporting. Additionally, the filter functionality enables users to refine the list by selecting specific criteria, such as center name or spare name, for a more targeted view of spare usage.
        `,
    image: "/images/SpareIn/consumptions.png",
  },
  {
    id: "spare PO",
    title: "4. Spare PO",
    description: `
        The Spare PO section in the Inboice CRM. This section is designed to manage the entire lifecycle of spare part purchase orders, from creation to closure. Key features include creating new POs, tracking their status through various pending stages (manager, store, and entry), and viewing both closed and canceled POs. This interface streamlines the approval process and provides a clear audit trail for spare part procurement.
        `,
        image:'/images/SpareIn/sparePO.png'
  },
  {
    id:'add',
    title:'4.1 Add Spares Parts PO',
    link:'https://demo.inboice.com/app/spare-inventory/po/add',
    description:`
    To create a spare part request, select the recipient and desired center, specify shipping details and the requested date. Choose the spare part and quantity, and add more rows for additional items. Add any relevant notes or instructions. Finally, either reset the form or save and send it for approval, which will move it to the "Manager Pending POs" tab.
    `,
    image:'/images/SpareIn/add.png'
  },
  {
    id:'Manager',
    title:'4.2 Manager Pending POs',
    link:'https://demo.inboice.com/app/spare-inventory/po/view/new',
    description:`
    The "Search Input" field allows you to search for specific requests by ID, From Center, or To Center. The "Refresh Button" updates the list, and the "Download Excel Button" exports it. You can filter requests by From Center, To Center, and Spare, and apply the filters using the "Filter Button." The "List of Requests" table displays pending requests with details like ID, centers, shipment time, and status. The "Edit Button" modifies requests, the "Approve Button" moves them to the "Store Pending POs" tab, the "Cancel Button" cancels them, and the "Print Button" prints them.
    `,
    image:'/images/SpareIn/manager.png'
  },
  {
    id:'Store',
    title:'4.3 Store Pending POs',
    link:'https://demo.inboice.com/app/spare-inventory/po/pending',
    description:`
    The "Search Input" field lets you find specific requests by ID, From Center, or To Center. The "Refresh Button" updates the list, and the "Download Excel Button" exports it. You can filter requests by From Center, To Center, and Spare, applying filters with the "Filter Button." The "List of Requests" table shows pending requests with details like ID, centers, shipment time, and status. The "Edit Button" modifies requests, the "Approve Button" moves them to the "Entry Pending POs" tab, the "Cancel Button" cancels them, and the "Print Button" prints them.
    `,
    image:'/images/SpareIn/store.png'
    },
    {
        id:'Entry',
        title:'4.4 Entry Pending POs ',
        link:'https://demo.inboice.com/app/spare-inventory/po/closed',
        description:`
        The "Search Input" field allows you to find specific requests by ID, From Center, or To Center. The "Refresh Button" updates the list, and the "Download Excel Button" exports it. You can filter requests by From Center, To Center, and Spare, applying filters with the "Filter Button." The "List of Requests" table displays pending requests with details like ID, centers, shipment time, and status. Clicking on a specific request provides detailed information about the requested and fulfilled spare quantities. The "Received Button" marks a request as received and closes it, while the "Print Button" prints a hard copy of the received spare parts list.
        `,
        image:'/images/SpareIn/entry.png'
        },

        {
            id:'closed',
            title:'4.5 View closed POs',
            link:'https://demo.inboice.com/app/spare-inventory/po/recieved',
            description:`
            The "View Closed POs" tab provides a comprehensive view of all spare part purchase orders that have been successfully completed. Once a request has been marked as "received" in the "Entry Pending POs" tab, it is moved to this section.
            `,
            image:'/images/SpareIn/closed.png'
        },
        
        {
            id:'Canceled',
            title:'4.6 View Canceled POs',
            link:'https://demo.inboice.com/app/spare-inventory/po/canceled',
            description:`
            The "View Canceled POs" tab provides a centralized view of all spare part purchase orders that have been canceled at any stage of the approval process. This includes requests that were canceled by the manager or The store.
            `,
            image:'/images/SpareIn/canceled.png'

        },

  {
    id: "stock updates",
    title: "5.Stock Updates",
    link:'https://demo.inboice.com/app/spare-inventory/update/add',
    description: `
        The Stock Updates section’s "Update Stock" tab allows users to adjust spare stock levels at selected centers. Updates require manager approval, then admin approval. Approved updates appear in "View Done Updates," while rejections move to "View Canceled Updates," ensuring a structured, accountable inventory process.
        
        `,
    image: "/images/SpareIn/stockupdate.png",
  },
  {
    id:'Update ',
    title:'5.1 Update Stocks',
    link:'https://demo.inboice.com/app/spare-inventory/update/add',
    description:`
    The Update Stock tab in the Stock Updates section enables users to manage spare part inventory by adjusting stock levels for specific centers.The stock update form features a dropdown to select the center where the update applies, another dropdown to specify the reason (with a mandatory comment for "Other"), and a spare part selection dropdown. Users can input fresh and scrap stock quantities, and add multiple rows for bulk updates. A comment box is available for additional details, and the "Reset" button clears all fields. The "Save & Submit" button saves the input and sends the request for manager approval.
    `,
    image:'/images/SpareIn/update.png'
  },


  {
    id:'manager',
    title:'5.2 Manager Pending',
    link:'https://demo.inboice.com/app/spare-inventory/update/view',
    description:`
    The Manager Pending tab displays stock update requests awaiting manager approval, providing an organized view of each request's details, including center, spare part, and reason for update. Managers can use search, refresh, and filter tools to easily locate specific requests. Each request includes options to edit, approve, or cancel. Approved requests proceed to the admin for final approval, while canceled ones move to the View Canceled Update tab.
    `,
    image:'/images/SpareIn/manager.png'
  },

  {
    id:'admin',
    title:'5.3 Admin Pending Update ',
    link:'https://demo.inboice.com/app/spare-inventory/update/view/pending',
    description:`
    The Admin Pending Update tab displays stock update requests awaiting admin approval, providing an organized view of each request's details, including center, spare part, and reason for update. Managers can use search, refresh, and filter tools to easily locate specific requests. Each request includes options to edit, approve, or cancel. Approved requests proceed to the admin for final approval, while canceled ones move to the View Canceled Update tab.
    `,
    image:'/images/SpareIn/admin.png'
  },
  {
    id:'Done',
    title:'5.4 View Done Update',
    link:'https://demo.inboice.com/app/spare-inventory/update/view/closed',
    description:`
    The "View Done Updates" tab provides a comprehensive view of all spare part stock update requests that have been successfully completed. Once a request has been approved by both the manager and the admin, it is moved to this section. This tab serves as a historical record of past stock update activities. It allows users to track the completion status of previous requests, review update details, and analyze historical data for future reference.
    `,
    image:'/images/SpareIn/viewclosed.png'
  },
  {
    id:'canceled',
    title:'5.5 View Canceled Update',
    link:'https://demo.inboice.com/app/spare-inventory/update/view/canceled',
    description:`The "View Canceled Updates" tab displays a list of spare part stock update requests that were canceled at some point during the approval process. These requests were either rejected by the manager or the admin. This tab serves as a historical record of canceled updates, allowing users to track the reasons for cancellation and identify potential areas for improvement in the future.`,
    image:'/images/SpareIn/viewcanceled.png'
  },

  {
    id: "scrap",
    title: "6. Scrap Returns",
    link:'https://demo.inboice.com/app/spare-inventory/return/add',
    description: `
        The Scrap Return section is a crucial feature in the Inboice CRM that enables the efficient management of defective spare part returns. This section streamlines the return process, ensuring that defective parts are promptly collected, assessed, and disposed of or recycled appropriately.The process begins by creating a return request, where detailed information about the defective parts, including the quantity, reason for return, and shipping details, is provided. Once submitted, the request undergoes a rigorous approval process involving both the manager and the admin. Upon approval, the request is forwarded to the entry team, who can then finalize the return process. If the return request is rejected at any stage, it is moved to the "View Canceled Returns" tab, allowing for further investigation and analysis. Successfully processed return requests are archived in the "View Closed Returns" tab for future reference and reporting.
        `,
        image:'/images/SpareIn/scrap-return.png'
  },
  {
    id:'add',
    title:'6.1 Add Spare parts Return',
    link:'https://demo.inboice.com/app/spare-inventory/return/add',
    description:`The "Add Spare Parts Return" tab is the starting point for initiating a spare part return request. This tab allows users to create detailed return requests, specifying the defective spare parts, their quantities, and the reason for return. By providing accurate information, users can ensure smooth processing of the return request and timely resolution of issues.`,
    image:'/images/SpareIn/addscrap.png'
  },
  {
    id:'',
    title:'6.2 Manager Pending',
    link:'https://demo.inboice.com/app/spare-inventory/return/view',
    description:`Once submitted, the request undergoes a rigorous approval process involving the manager. At this stage, the request comes for the manager's approval, where the manager can approve, cancel, or edit it.
    `,
    image:'/images/SpareIn/scrapmanager.png'
  },
  {
    id:'admin',
    title:'6.3 Admin Pending Return',
    link:'https://demo.inboice.com/app/spare-inventory/return/view/pending',
    description:`
    After the manager's approval, it proceeds to the admin for approval, where the admin can either cancel or approve it.
    `,
    image:'/images/SpareIn/scrapadmin.png'
  },
  {
    id:'Entry',
    title:'6.4 Entry Pending Return',
    link:'https://demo.inboice.com/app/spare-inventory/return/view/closed',
    description:`
   After the admin's approval, it appears in the Entry tab, where the entry user can mark the request as received.
    `,
    image:'/images/SpareIn/scrapentry.png'
  },
  {
    id:'closed',
    title:'6.5 View Closed return',
    link:'https://demo.inboice.com/app/spare-inventory/return/view/recieved',
    description:`
    After being marked as received by the entry tab user, the request is closed and appears in this tab.
    `,
    image:'/images/SpareIn/scrapclosed.png'
  },
  {
    id:'canceled',
    title:'6.6 View Canceled return',
    link:'https://demo.inboice.com/app/spare-inventory/return/view/canceled',
    description:`
    When a request is canceled by the manager or the admin, it appears in this tab.
    `,
    image:'/images/SpareIn/scrapcanceled.png'
  }
];
