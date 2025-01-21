export default [
    {
        id:'intro',
        title:'1. Add Spare',
        link:'https://demo.inboice.com/app/spare',
        description:`
            <ol>
        <li>
            <b>Category:</b>
            <p>Specifies the product category to which the spare part belongs.</p>
        </li>
        <li>
            <b>Spare Model:</b>
            <p>The model or specific version of the spare part.</p>
        </li>
        <li>
            <b>Specification:</b>
            <p>Details about the spare part's characteristics, such as size, color, wattage, or other relevant specifications.</p>
        </li>
        <li>
            <b>Barcode ID:</b>
            <p>A unique identifier for the spare part, typically used for inventory management and tracking.</p>
        </li>
        <li>
            <b>Pricing Details:</b>
            <p>Fields for entering pricing information, including GST percentage, price with or without GST, and scrap price with or without GST.</p>
        </li>
        <li>
            <b>Other Details:</b>
            <p>Additional fields for entering other relevant information about the spare part, such as HSN code, warranty days, and additional details.</p>
        </li>
        <li>
            <b>Upload Image:</b>
            <p>Allows users to upload an image of the spare part for visual reference.</p>
        </li>
        <li>
            <b>Reset:</b>
            <p>Clears all the entered data in the form fields, allowing users to start a new spare part creation process.</p>
        </li>
        <li>
            <b>Save & Inactivate:</b>
            <p>Saves the spare part information but marks it as inactive. The spare part will not be visible or available for use until activated.</p>
        </li>
        <li>
            <b>Save & Activate:</b>
            <p>Saves the spare part information and immediately activates it. The spare part will be available for use and management within the CRM.</p>
        </li>
    </ol>
        `,
        image:'/images/SpareM/add.png'
    },
    {
        id:'qr',
        title:'2. Spare QR list',
        link:'https://demo.inboice.com/app/spare/view/qr',
        description:`
            <ol>
        <li>
            <b>Search Field:</b>
            <p>Allows users to quickly find specific spare parts by entering their name or other relevant criteria.</p>
        </li>
        <li>
            <b>Download Excel File:</b>
            <p>Provides the option to export the entire list of spare parts, including their details, into an Excel spreadsheet for further analysis or reporting.</p>
        </li>
        <li>
            <b>Spare List:</b>
            <p>Displays a table containing information about all the added spare parts. Each row represents a spare part, and columns show details such as name, category, barcode, and other relevant information.</p>
        </li>
        <li>
            <b>Barcode:</b>
            <p>A unique identifier for each spare part, displayed as a barcode image. Users can scan the barcode using a barcode reader to obtain more information about the spare part.</p>
        </li>
        <li>
            <b>Download Barcode Button:</b>
            <p>Provides the option to download the barcode image for a specific spare part in a printable format.</p>
        </li>
        <li>
            <b>Link Associated with Barcode:</b>
            <p>A link that provides additional details about the spare part when scanned or accessed. This may include information about the spare part's expiry date, warranty, and other relevant data.</p>
        </li>
    </ol>
        `,
        image:'/images/SpareM/qr.png'
    },
    {
        id:'list',
        title:'3. Spare List',
        link:'https://demo.inboice.com/app/spare/view',
        description:`
            <ol>
        <li>
            <b>Search Field:</b>
            <p>Allows users to quickly find specific spare parts by entering their name or other relevant criteria.</p>
        </li>
        <li>
            <b>Download Excel File:</b>
            <p>Provides the option to export the entire list of spare parts, including their details, into an Excel spreadsheet for further analysis or reporting.</p>
        </li>
        <li>
            <b>Spare List:</b>
            <p>Displays a table containing information about all the added spare parts.</p>
        </li>
        <li>
            <b>Expanding Toggle Button:</b>
            <p>When clicked, expands or collapses a row to reveal additional details about the corresponding spare part, such as its specification, price, and status.</p>
        </li>
        <li>
            <b>Edit Button:</b>
            <p>Allows users to modify the details of a spare part, including its name, specification, price, or other relevant attributes.</p>
        </li>
        <li>
            <b>Block Button:</b>
            <p>Temporarily deactivates a spare part, making it inaccessible and preventing further use. It can be reactivated later if needed.</p>
        </li>
        <li>
            <b>Delete Button:</b>
            <p>Permanently removes a spare part from the system, deleting all associated data and records. This action is irreversible and should be used with caution.</p>
        </li>
        <li>
            <b>Active Status:</b>
            <p>Indicates whether a spare part is currently active and available for use. An active spare part can be ordered or used in various operations.</p>
        </li>
        <li>
            <b>Eye Icon Button:</b>
            <p>When clicked, displays an image of the spare part, allowing users to visually identify and verify the item.</p>
        </li>
    </ol>
        `,
        image:'/images/SpareM/list.png'
    }
]