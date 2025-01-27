export default [
    {
        id:"intro",
        title:"1. Add Center",
        link:'https://demo.inboice.com/app/center',
        description:`
            <ol>
        <li>
            <b>Purpose:</b>
            <p>To create and manage various types of centers within the CRM system.</p>
        </li>
        <li>
            <b>Fields and Descriptions:</b>
            <ul>
                <li>
                    <b>Center Type:</b>
                    <p>Specifies the category or function of the center, such as service center, admin, scrap store, spare store, product store, supplier, and more. Determines the specific features and functionalities available for the center.</p>
                </li>
                <li>
                    <b>Center Name:</b>
                    <p>A unique identifier for the center. Should be descriptive and easily recognizable.</p>
                </li>
                <li>
                    <b>Center Code:</b>
                    <p>A numerical or alphanumeric code assigned to the center. Used for internal identification and tracking purposes.</p>
                </li>
                <li>
                    <b>Contact Person Mobile:</b>
                    <p>The primary mobile number of the person responsible for the center. Used for communication and coordination.</p>
                </li>
                <li>
                    <b>Email:</b>
                    <p>The email address of the contact person. Used for official communication and notifications.</p>
                </li>
                <li>
                    <b>Select Existing User as Manager or Add New User:</b>
                    <p>Option to either assign an existing user as the manager of the center or create a new user account specifically for the manager role. The manager will have administrative privileges over the center.</p>
                </li>
                <li>
                    <b>Address:</b>
                    <p>The physical address of the center. Includes street address, city, state, district, and pincode.</p>
                </li>
                <li>
                    <b>Other Details:</b>
                    <p>Additional information fields such as alternate phone number, GSTIN (Goods and Services Tax Identification Number), and PAN (Permanent Account Number). May be required for specific business or regulatory purposes.</p>
                </li>
            </ul>
        </li>
        <li>
            <b>Actions:</b>
            <ul>
                <li>
                    <b>Reset:</b>
                    <p>Clears all the entered data in the form fields. Used to start a new center creation process or make changes without affecting existing data.</p>
                </li>
                <li>
                    <b>Save & Inactivate:</b>
                    <p>Saves the center information but marks it as inactive. The center will not be visible or accessible in the system until activated.</p>
                </li>
                <li>
                    <b>Save & Activate:</b>
                    <p>Saves the center information and immediately activates it. The center will be available for use and management within the CRM.</p>
                </li>
            </ul>
        </li>
        </li>
    </ol>
        
        `,
        image:"/images/Center/center.png"
        },
        {
            id:"list",
            title:"2. Center List ",
            link:'https://demo.inboice.com/app/center/view',
            description:`
            <ol>
        <li>
            <b>Search Field:</b>
            <p>Allows users to quickly find specific centers by entering their name or other relevant criteria.</p>
        </li>
        <li>
            <b>Download Excel File:</b>
            <p>Provides the option to export the entire list of centers, including their details, into an Excel spreadsheet for further analysis or reporting.</p>
        </li>
        <li>
            <b>Center List:</b>
            <p>Displays a table containing information about all the added centers. Each row represents a center, and columns show details such as name, type, mobile number, rating, slab adjustment, service level, area ID, and status.</p>
        </li>
        <li>
            <b>Expanding Toggle Button:</b>
            <p>When clicked, expands or collapses a row to reveal additional details about the corresponding center, including its address, email, and other relevant information.</p>
        </li>
        <li>
            <b>Edit Button:</b>
            <p>Allows users to modify the details of a center, such as its name, contact information, or other relevant attributes.</p>
        </li>
        <li>
            <b>Block/Inactive Button:</b>
            <p>Temporarily deactivates a center, making it inaccessible and preventing further use. It can be reactivated later if needed.</p>
        </li>
        <li>
            <b>Delete Button:</b>
            <p>Permanently removes a center from the system, deleting all associated data and records. This action is irreversible and should be used with caution.</p>
        </li>
        <li>
            <b>Active Status:</b>
            <p>Indicates whether a center is currently active and functional. An active center can be used and accessed within the CRM system.</p>
        </li>
    </ol>
            `,
            image:"/images/Center/list.png"
        },
        {
            id:"slabs",
            title:"3. Category Wise Rates",
            link:'https://demo.inboice.com/app/center/payout',
            description:`
                <ol>
        <li>
            <b>Service Center Selection:</b>
            <p>Allows users to choose a specific service center from the list of available centers.</p>
        </li>
        <li>
            <b>Product Listing:</b>
            <p>Displays a list of products associated with the selected service center.</p>
        </li>
        <li>
            <b>Slab Adjustment Input:</b>
            <p>Indicates whether slab adjustment is enabled for the selected center. If enabled, users can modify the slab rates for products.</p>
        </li>
        <li>
            <b>Slab Rate Updates:</b>
            <p>Allows users to modify the slab rates for each product within the selected center. Changes can be made to the charge, commission, payable amount, and deduction percentages for different time intervals.</p>
        </li>
        <li>
            <b>Update Button:</b>
            <p>Saves the updated slab rates for the products associated with the selected center. The changes will take effect immediately.</p>
        </li>
            `,
            image:"/images/Center/slab.png" 
        }
]