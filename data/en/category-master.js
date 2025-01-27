export default [
  {
    id: 'introduction',
    title: '1. Category Master',
    description: `
    Through this section, the admin can manage the categories of products. The product category list helps when adding a product.
    `,
  },
  {
    id: "category",
    title: "2. Add Category ",
    link: 'https://demo.inboice.com/app/category',
    description: `
    The Category Name specifies the product name, which cannot be changed later. The Out of Warranty Charge defines the charges applicable once the product’s warranty expires. For service-related settings, the Commission in Paid Service allows you to set the percentage of commission for service centers. The Slab Adjustment Allowed toggle lets you enable or disable slab adjustments for service charges. Service charges can be configured based on specific criteria. The Service Call Rate (TAT wise) sets charges for calls resolved within a defined turnaround time (e.g., 48 hours), while the Service Call Rate (Quantity wise) determines rates based on the number of items handled per call. Similarly, the Installation Call Rate (TAT wise) defines installation charges based on completion time, and the Installation Call Rate (Quantity wise) sets rates based on the number of installations per ticket. Additionally, the Sale Discount Rate enables you to define discount slabs for credit and cash purchases, ensuring flexibility in pricing strategies. These parameters collectively allow for comprehensive control over product pricing, service charges, and discount configurations, ensuring streamlined and efficient operations.
    `,
    "image": "/images/Category/add.png"
  },
  {
    id: "list",
    title: "3. Category List",
    link: 'https://demo.inboice.com/app/category/view',
    description: `
    Search Bar allows users to quickly locate specific categories by entering their names. The Edit Category option enables modifying the details of an existing category, ensuring information remains accurate and up-to-date. The Block Category feature allows deactivating a category, making it temporarily unavailable for use. Lastly, the Delete Category option permanently removes a category from the list, ensuring efficient management and removal of outdated or irrelevant entries. These features simplify category management and enhance overall efficiency.
        `,
    image: "/images/Category/list.png"
  }
]