export default [
    {
        id:'intro',
        title:'1. Add Product',
        link:'https://demo.inboice.com/app/product',
        description:`
<ol>
  <li>
    <b>Brand Name</b>
    <p>Select the brand of the product from the available options. The brand name helps categorize the product under a specific manufacturer or company, making it easier to manage and search for products later on.</p>
  </li>
  <li>
    <b>Category</b>
    <p>Choose the product category from the predefined categories. Categorizing products helps organize them based on their type, ensuring a smoother workflow for future product management, searching, and reporting.</p>
  </li>
  <li>
    <b>Model</b>
    <p>Input the model name or number of the product. The model name uniquely identifies a specific version of a product under a brand, providing important product details that are relevant to customers and service agents alike.</p>
  </li>
  <li>
    <b>Color</b>
    <p>Enter the product’s color, design, or pattern. Providing this information helps in further identifying the product and is crucial for customers looking for specific variants of the same product in different colors or designs.</p>
  </li>
  <li>
    <b>Size</b>
    <p>Provide the size, dimensions, or measurements of the product. This could include parameters like length, width, height, or volume depending on the product type. Accurate size information ensures correct fitting, especially for physical items like appliances or clothing.</p>
  </li>
  <li>
    <b>Barcode/Unique ID</b>
    <p>Enter a unique number such as an EAN, UPC, or custom unique identifier for the product. This barcode is crucial for tracking inventory, scanning at point of sale, and ensuring there is no duplication in product records within the CRM.</p>
  </li>

  <li>
    <b>Repair Service</b>
    <p>If your product offers repair services, enable this option to activate that service within your CRM. If the product is instead eligible for replacement under warranty or another service, disable the repair service and configure it for replacement only.</p>
  </li>
  <li>
    <b>Warranty</b>
    <p>Enter the warranty period for the product in days. This warranty information is essential for customer support, determining whether a product is eligible for free repairs, replacements, or maintenance within the specified time frame.</p>
  </li>
  <li>
    <b>Spare</b>
    <p>Select the relevant spare part associated with the product, if applicable. The spare part information ensures that repairs or replacements are carried out using the correct parts, reducing downtime and ensuring customer satisfaction.</p>
  </li>

  <li>
    <b>GST Rate</b>
    <p>Select the applicable GST (Goods and Services Tax) percentage for the product. Correct GST rates ensure accurate pricing and tax reporting, which is essential for compliance with government regulations.</p>
  </li>
  <li>
    <b>Price</b>
    <p>Input the price of the product, either including or excluding GST, depending on your pricing structure. Accurately entering the product price ensures proper billing and helps customers know exactly how much they need to pay.</p>
  </li>
  <li>
    <b>Scrap Price</b>
    <p>Enter the scrap price of the product, which refers to the price at which the product can be sold as scrap. This price can be inclusive or exclusive of GST, depending on how you manage scrap sales in your inventory system.</p>
  </li>

  <li>
    <b>HSN</b>
    <p>Provide the HSN (Harmonized System of Nomenclature) code, typically 4 to 6 digits long. This code is essential for tax categorization and ensures that the correct tax rates are applied when selling products, making the process legally compliant.</p>
  </li>
  <li>
    <b>Pieces</b>
    <p>Input the quantity of the product being added, specifying the number of pieces or units in each packaging. This helps in tracking inventory levels and managing stock efficiently, especially when selling or distributing products in bulk.</p>
  </li>
  <li>
    <b>Details</b>
    <p>Enter a detailed description of the product, including any additional features, specifications, or important information. This description can be referenced by customer support teams and sales agents to better understand the product and its key selling points.</p>
  </li>
  <li>
    <b>Image</b>
    <p>Upload an image of the product. A clear product image helps visually identify the item in the CRM system, which can be helpful for customer interactions, especially in online sales or product listings.</p>
  </li>

  <li>
    <b>Reset</b>
    <p>Clicking the reset button will clear all the input fields in the form. This is useful if you need to start over or have made a mistake while entering product details and want to re-enter them from scratch.</p>
  </li>
  <li>
    <b>Save & Inactivate</b>
    <p>This button allows you to save the product but keep it inactive, meaning it won’t be visible or available in the CRM for use or sale until it is activated. This is useful for adding products that aren’t ready to go live yet.</p>
  </li>
  <li>
    <b>Save & Activate</b>
    <p>This button allows you to save the product and immediately activate it, making it available for transactions and visible in the CRM system. This is useful for products that are ready for sale or use right after being added.</p>
  </li>
</ol>


        `,
        image:'/images/ProductM/add.png'
    },
    {
        id:'qr',
        title:'2. Product QR List',
        link:'https://demo.inboice.com/app/product/view/qr',
        description:`
        <ol>
  <li>
    <b>Product List:</b>
    <p>Displays a list of products organized by category and name.</p>
  </li>
  <li>
    <b>Search Functionality:</b>
    <p>Allows users to search for specific products by name.</p>
  </li>
  <li>
    <b>Excel Export:</b>
    <p>Provides an option to download the product list as an Excel file.</p>
  </li>
  <li>
    <b>Barcode Display:</b>
    <p>Shows the barcode for each product.</p>
  </li>
  <li>
    <b>Barcode Link:</b>
    <p>Clicking on the eye icon reveals the product's link, which leads to a website with warranty information and other details.</p>
  </li>
  <li>
    <b>Barcode Download:</b>
    <p>The download button enables users to download the barcode image for offline use.</p>
  </li>
</ol>
        `,
        image:'/images/ProductM/qr.png'

    },
    {
      id:'list',
      title:'3. Product List',
      link:'https://demo.inboice.com/app/product/view',
      description:`
      <ol>
  <li>
    <b>Product List:</b>
    <p>This section displays a comprehensive list of all the products added to the system. Each product entry includes detailed information such as its category, brand, model, color, size, price, GST, service status, and current status (active or blocked).</p>
  </li>
  <li>
    <b>Search Functionality:</b>
    <p>The search bar at the top right corner of the screen allows users to quickly find specific products by entering keywords related to their name or other attributes. This saves time and effort in locating desired products.</p>
  </li>
  <li>
    <b>Excel Export:</b>
    <p>The export button enables users to download the entire product list in an Excel format. This feature is useful for creating reports, analyzing data, or sharing information with others.</p>
  </li>
  <li>
    <b>Product Editing:</b>
    <p>The edit button next to each product allows users to modify the product's details. This includes updating information like the product's name, category, price, or any other relevant attribute.</p>
  </li>
  <li>
    <b>Product Blocking:</b>
    <p>The block button allows users to temporarily deactivate a product. This can be useful for products that are out of stock, discontinued, or require maintenance. Blocked products will not be visible in the main product list.</p>
  </li>
  <li>
    <b>Product Deletion:</b>
    <p>The delete button permanently removes a product from the system. This action should be used with caution as it cannot be undone.</p>
  </li>
  <li>
    <b>Active Status:</b>
    <p>The "Active" status indicates that the product is currently available and can be sold or used. The "Blocked" status indicates that the product is temporarily unavailable or deactivated.</p>
  </li>
  <li>
    <b> Eye button </b>
    <p> The interface allows users to view, zoom, and download high-resolution product images for detailed inspection and offline reference.</p>
  </li>
</ol>
      `,
      image:'/images/ProductM/list.png'
    }
]