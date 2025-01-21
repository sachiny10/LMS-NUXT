export default [
  {
    id:'introduction',
    title:'1. Category Master',
    description:`
    Through this section, the admin can manage the categories of products. The product category list helps when adding a product.
    `,
  },
    {
    id:"category",
    title:"2. Add Category ",
    link:'https://demo.inboice.com/app/category',
    description:`
    <ol>
  <li>
    <b>Category Name</b>
    <p>Enter the product name (cannot be changed later).</p>
  </li>
  <li>
    <b>Out of Warranty Charge</b>
    <p>Set charges applied after the product warranty expires.</p>
  </li>
  <li>
    <b>Commission in Paid Service</b>
    <p>Input the service center commission percentage.</p>
  </li>
  <li>
    <b>Slab Adjustment Allowed</b>
    <p>Toggle to allow slab adjustment for service charges.</p>
  </li>
  <li>
    <b>Service Call Rate (TAT wise)</b>
    <p>Define the service charge for calls resolved within a specific turnaround time (e.g., within 48 hours).</p>
  </li>
  <li>
    <b>Service Call Rate (Quantity wise)</b>
    <p>Set service charges based on the number of items handled per call.</p>
  </li>
  <li>
    <b>Sale Discount Rate</b>
    <p>Specify discount slabs for credit and cash purchases.</p>
  </li>
  <li>
    <b>Installation Call Rate (TAT wise)</b>
    <p>Define charges for installation services completed within a specific time.</p>
  </li>
  <li>
    <b>Installation Call Rate (Quantity wise)</b>
    <p>Set rates based on the number of installations done per ticket.</p>
  </li>
</ol>
    `,
    "image":"/images/Category/add.png"
    },
    {
        id:"list",
        title:"3. Category List",
        link:'https://demo.inboice.com/app/category/view',
        description:`

        <ol>
          <li>
    <b>Search Bar</b>
    <p>This bar allows you to search for specific categories based on their name.</p>
  </li>

  <li>
    <b>Edit Category</b>
    <p>Modify the details of an existing category.</p>
  </li>
  <li>
    <b>Block Category</b>
    <p>Deactivate a category, making it unavailable.</p>
  </li>
  <li>
    <b>Delete Category</b>
    <p>Remove the category from the list permanently.</p>
  </li>
</ol>
        `,
        image:"/images/Category/list.png"
    }
]