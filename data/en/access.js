export default [
    {
        id:"intro",
        title:'1. Introduction',
        link:'https://demo.inboice.com/app/access-group',
        description:`
        The Access Group Master in Invoice CRM allows administrators to create and manage access groups with specific permissions for various modules, such as Customers, Calls, Tickets, Jobs, Reports, and Accounts. Admins can assign tailored access levels to groups based on their role, enhancing security and workflow efficiency. Additionally, admins can control the group's status with "Save & Activate" or "Save & Inactivate" options for immediate or delayed activation.


        <ol>
  <li>
    <b>Access Group Name</b>
    <p>The first input box where the admin can assign a name to the access group, helping identify it for future reference.</p>
  </li>
  <li>
    <b>Access Group Type</b>
    <p>In the second input box, the admin specifies the type of access group, which determines the group’s role or level of access.</p>
  </li>
  <li>
    <b>Access Group Description</b>
    <p>The third input box allows the admin to add a brief description of the access group for better understanding and management.</p>
  </li>
  <li>
    <b>Module Permissions</b>
    <p>The admin can assign or restrict permissions to specific modules like Customers, Calls, Tickets, Jobs, Reports, and Accounts, giving flexibility in user access.</p>
  </li>
  <li>
    <b>Save & Inactivate</b>
    <p>A button to save the group configuration without activating it immediately, keeping it inactive.</p>
  </li>
  <li>
    <b>Save & Activate</b>
    <p>A button to save the group and immediately activate its permissions, allowing the access group to take effect in the system.</p>
  </li>
</ol>

        `,
        image:"/images/Access/access.png"
    },


    {
      id:"list",
      title:"2 .Access Group List",
      link:'https://demo.inboice.com/app/access-group/view',
      description:`
      the Access Group List page within Inboice CRM. This page allows users to view, search, edit, and manage access groups within the system.
        <ol>
    <li>
      <b>Search</b>
      <p>The search bar at the top right corner enables users to quickly find specific access groups by searching for their names.</p>
    </li>
    <li>
      <b>Refresh button</b>
      <p>Clicking this button refreshes the page, ensuring that any recent changes made to access groups are displayed.</p>
    </li>
    <li>
      <b>Download button</b>
      <p>This button allows users to export the entire list of access groups as an Excel file for further analysis or storage.</p>
    </li>
    <li>
      <b>Access group list</b>
      <p>The main section of the page displays a list of all available access groups, including their names, center types, statuses, and last updated information.</p>
    </li>
    <li>
      <b>Edit button</b>
      <p>Clicking the edit button next to an access group allows users to modify its details, such as its name, center type, and permissions.</p>
    </li>
    <li>
      <b>Active/Blocked status</b>
      <p>The status of an access group is indicated by a green "Active" or red "Blocked" label. Blocked access groups are disabled and cannot be used.</p>
    </li>
  </ol>
      `,
      image:"/images/Access/list.png"
    }
]