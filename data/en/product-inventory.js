export default  [
    {
        id:'Introduction',
        title:'1. Overview',
        link:'https://demo.inboice.com/app/product-inventory/view/stock',
        description:`
        The Product Inventory section in your CRM is designed to efficiently manage product lifecycle and stock levels. It includes essential tabs such as "Product Stock" for monitoring inventory, "Product PO" (Purchase Orders) for restocking items, and "Product Updates" for making necessary adjustments or changes to the product database. The "Scrap Returns" tab helps manage defective or unsellable products, ensuring they're removed from active inventory. This section helps businesses maintain precise stock control, track product availability, and manage product orders and returns, ultimately streamlining inventory management for operational efficiency.
        `,
        image:'/images/ProductIn/intro.png'
    },
    {
        id:'product stock',
        title:'2. Product Stocks',
        link:'https://demo.inboice.com/app/product-inventory/view/stock',
        description:`
        The "Product Stocks" tab in the Product Inventory section offers a comprehensive and user-friendly view of inventory levels across different centers, allowing users to search, filter, and analyze product data effectively. This section provides detailed lists of product stock quantities and scrap counts, organized by center for clarity. Key features include a search input for quickly locating centers, a refresh button to update data, and a download option for exporting data to an Excel sheet for further analysis. Advanced filter options enable users to view data by specific centers or products, aiding in pinpointing inventory shortages or surpluses.
        `,
        image:'/images/ProductIn/stocks.png'

    },
    
        {
            id:'Product PO',
            title:'3. Product PO',
            link:'https://demo.inboice.com/app/product-inventory/po/add',
            description:`
           The Product PO section in the Inboice CRM. This section is designed to manage the entire lifecycle of Product purchase orders, from creation to closure. Key features include creating new POs, tracking their status through various pending stages (manager, store, and entry), and viewing both closed and canceled POs. This interface streamlines the approval process and provides a clear audit trail for product procurement.
            `,
            image:'/images/ProductIn/product-po.png'
            
        },
        {
            id:'add',
            title:'3.1 Add Product PO',
            link:'https://demo.inboice.com/app/product-inventory/po/add',
            description:`
           To create a product request, select the intended recipient in the "Product Receiver" field and choose the required center in the "Requested To" field. Provide details about the preferred shipping method and courier service under "Shipping/Courier Details," and specify the desired shipment date in "Requested Date." Use the product selection dropdown to choose the product from your inventory and specify the number of units needed. By clicking "Add Row," you can include additional products without creating separate orders. Add any relevant notes in the "Comment/Instruction" field. Use the "Reset" button to clear the form or click "Save & Send for Approval" to submit the request, which then moves to the "Manager Pending POs" tab for approval.
            `,
            image:'/images/ProductIn/add.png'
            
        },
        {
            id:'manager',
            title:'3.2 Manager Pending POs',
            link:'https://demo.inboice.com/app/product-inventory/po/view/new',
            description:`
            After adding the product PO, the request appears in this tab for the manager's approval. Here, the manager can approve, cancel, or edit it.
            The "Search Input" field allows users to look up specific requests by ID, From Center, or To Center, while the "Refresh Button" updates the list with any recent changes. Use the "Download Excel Button" to export the full list of pending requests for further analysis or reporting. Filters such as "From Center," "To Center," and "Product" help narrow down requests, applied by clicking the "Filter Button." The "List of Requests" table displays pending requests, including details like ID, centers, shipment time, and status. Users can modify requests using the "Edit Button," approve them with the "Approve Button" to move them to the "Store Pending POs" tab, cancel with the "Cancel Button," or print using the "Print Button."
            `,
            image:'/images/ProductIn/manager.png'
        },
        {
            id:'store',
            title:'3.3 Store Pending POs',
            link:'https://demo.inboice.com/app/product-inventory/po/pending',
            description:`
            After the manager's approval, it appears in the store tab for store's approval.Here, store can approve and cancel.
            `,
            image:'/images/ProductIn/store.png'
        },
        {
            id:'entry',
            title:'3.4 Entry Pending POs',
            link:'https://demo.inboice.com/app/product-inventory/po/closed',
            description:`
            After the store's approval, the request appears in this tab. Here, the entry user can mark the request as received.
            `,
            image:'/images/ProductIn/entry.png'
        },
        {
            id:'Closed',
            title:'3.5 View Closed POs',
            link:'https://demo.inboice.com/app/product-inventory/po/recieved',
            description:`The "View Closed POs" tab provides a comprehensive view of all product purchase orders (PO) that have been successfully completed. Once a request has been marked as "received" in the "Entry Pending POs" tab, it is moved to this section.`,
            image:'/images/ProductIn/viewclosed.png'
        },
        {
            id:'canceled',
            title:'3.6 View Canceled POs',
            link:'https://demo.inboice.com/app/product-inventory/po/canceled',
            description:`The "View Canceled POs" tab provides a centralized view of all product purchase orders (PO) that have been canceled at any stage of the approval process. This includes requests that were canceled by the manager or the store.`,
            image:'/images/ProductIn/viewcanceled.png'
        },

        {
            id: "stock updates",
            title: "4. Stock Updates",
            link:'https://demo.inboice.com/app/product-inventory/update/add',
            description: `
                The Stock Updates section’s "Update Stock" tab allows users to adjust Product stock levels at selected centers. Updates require manager approval, then admin approval. Approved updates appear in "View Done Updates," while rejections move to "View Canceled Updates," ensuring a structured, accountable inventory process.
                `,
            image: "/images/ProductIn/stock-update.png",
          },


          {
            id:'Update',
            title:'4.1 Update Stocks',
            link:'https://demo.inboice.com/app/product-inventory/update/add',
            description:`
            The Update Stock tab in the Stock Updates section enables users to manage product inventory by adjusting stock levels for specific centers. Users can select a center, specify the reason for the update, and enter quantities for fresh or scrap stock. After providing necessary details and comments, users can submit the update request for a structured approval process, ensuring inventory accuracy and accountability across the organization.
            `,
            image:'/images/ProductIn/update.png'
          },
          {
            id:'manager',
            title:'4.2 Manager Pending',
            link:'https://demo.inboice.com/app/product-inventory/update/view',
            description:`
            The Manager Pending tab displays stock update requests awaiting manager approval, providing an organized view of each request's details, including center, product, and reason for update. Managers can use search, refresh, and filter tools to easily locate specific requests. Each request includes options to edit, approve, or cancel. Approved requests proceed to the admin for final approval, while canceled ones move to the View Canceled Update tab.
            `,
            image:'/images/ProductIn/manager.png'
          },
          {
            id:'admin',
            title:'4.3 Admin Pending Update',
            link:'https://demo.inboice.com/app/product-inventory/update/view/pending',
            description:`
            The Admin Pending Update tab displays stock update requests awaiting admin approval, providing an organized view of each request's details, including center, product, and reason for update. Managers can use search, refresh, and filter tools to easily locate specific requests. Each request includes options to edit, approve, or cancel. Approved requests proceed to the View Done Updates tab, while canceled ones move to the View Canceled Update tab.
            `,
            image:'/images/ProductIn/admin.png'
          },
          {
            id:'done',
            title:'4.4 View Done Update',
            link:'https://demo.inboice.com/app/product-inventory/update/view/closed',
            description:`
            The "View Done Updates" tab provides a comprehensive view of all product stock update requests that have been successfully completed. Once a request has been approved by both the manager and the admin, it is moved to this section. This tab serves as a historical record of past stock update activities. It allows users to track the completion status of previous requests, review update details, and analyze historical data for future reference.
            `,
            image:'/images/ProductIn/viewdone.png'
          },
          {
            id:'canceled',
            title:'4.5 View Canceled Update',
            link:'https://demo.inboice.com/app/product-inventory/update/view/canceled',
            description:`The "View Canceled Updates" tab displays a list of product stock update requests that were canceled at some point during the approval process. These requests were either rejected by the manager or the admin. This tab serves as a historical record of canceled updates, allowing users to track the reasons for cancellation and identify potential areas for improvement in the future.`,
            image:'/images/ProductIn/viewcanceled.png'
          },

          {
            id: "scrap",
            title: "5. Scrap Returns",
            link:'https://demo.inboice.com/app/product-inventory/return/add',
            description: `
                The Scrap Return section is a crucial feature in the Inboice CRM that enables the efficient management of defective product returns. This section streamlines the return process, ensuring that defective products are promptly collected, assessed, and disposed of or recycled appropriately.The process begins by creating a return request, where detailed information about the defective parts, including the quantity, reason for return, and shipping details, is provided. Once submitted, the request undergoes a rigorous approval process involving both the manager and the admin. Upon approval, the request is forwarded to the entry team, who can then finalize the return process. If the return request is rejected at any stage, it is moved to the "View Canceled Returns" tab, allowing for further investigation and analysis. Successfully processed return requests are archived in the "View Closed Returns" tab for future reference and reporting.
                `,
                image:'/images/ProductIn/scrap-return.png'
          },
          {
            id:'add',
            title:'5.1 Add Product Return ',
            link:'https://demo.inboice.com/app/product-inventory/return/add',
            description:`
            The "Add Product Return" tab is the starting point for initiating a product return request. This tab allows users to create detailed return requests, specifying the defective products, their quantities, and the reason for return. By providing accurate information, users can ensure smooth processing of the return request and timely resolution of issues.
            `,
            image:'/images/ProductIn/addscrap.png'
          },
          {
            id:'manager',
            title:'5.2 Manager Pending',
            link:'https://demo.inboice.com/app/product-inventory/return/view',
            description:`
            After adding the product return, the request appears in this tab for the manager's approval. Here, the manager can approve, cancel, or edit it.
            The "Search Input" field allows users to search for specific requests by ID, From Center, or To Center. Filters such as "From Center," "To Center," and "Product" help narrow down the list of requests based on specific criteria, which can be applied by clicking the "Filter Button." The "List of Requests" table displays pending requests with details like ID, centers, fulfillment time, and status. To view more details, click on a specific request. Users can modify requests using the "Edit Button," approve them with the "Approve Button" to move to the next stage, cancel with the "Cancel Button," or print a hard copy using the "Print Button."
            `,
            image:'/images/ProductIn/managerscrap.png'
          },
          {
            id:'admin',
            title:'5.3 Admin Pending Return',
            link:'https://demo.inboice.com/app/product-inventory/return/view/pending',
            description:`
            After the manager's approval, the return request appears in this tab for the admin's approval. Here, the admin can approve & cancel.
            `,
            image:'/images/ProductIn/adminscrap.png'
          },
          {
            id:'entry',
            title:'5.4 Entry Pending Return',
            link:'https://demo.inboice.com/app/product-inventory/return/view/closed',
            description:`
            After the admin's approval, the request moves to the entry's approval, appearing in this tab. Here, the entry user can mark the request as received and approve it as well.
            `,
            image:'/images/ProductIn/entryscrap.png'
          },
          {
            id:'closed',
            title:'5.6 View Closed Return',
            link:'https://demo.inboice.com/app/product-inventory/return/view/recieved',
            description:`
            After being marked as received by the entry user, the request is closed and appears in this tab. It also appears in this tab after the entry user's approval.
            `,
            image:'/images/ProductIn/closedscrap.png'
          },
          {
            id:'canceled',
            title:'5.7 View Canceled Return',
            link:'https://demo.inboice.com/app/product-inventory/return/view/canceled',
            description:`
            View cancelled Return tab contains the list of requests cancelled by manager, admin which the user can print out. Facility to search the approved requests and filter the list is also available on this tab.
            `,
            image:'/images/ProductIn/canceledscrap.png'
          }
]