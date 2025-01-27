export default [
    {
        id:"intro",
        title:'1. Introduction',
        link:'https://demo.inboice.com/app/access-group',
        description:`
        The Access Group feature in the Invoice CRM allows administrators to efficiently manage user roles and permissions. The first input box, Access Group Name, lets the admin assign a unique name to the group for easy identification. The second input, Access Group Type, determines the role or level of access for the group, tailoring it to specific requirements. Additionally, the Access Group Description field enables the admin to provide a brief explanation about the group for better organization and clarity. Administrators can also manage Module Permissions, granting or restricting access to specific modules such as Customers, Calls, Tickets, Jobs, Reports, and Accounts. This feature offers flexibility in defining user roles based on organizational needs. Once the configuration is complete, the admin has two options: Save & Inactivate or Save & Activate. The Save & Inactivate button saves the group settings without making it immediately active, keeping it in an inactive state for later use. On the other hand, the Save & Activate button saves the configuration and instantly applies the permissions, making the group operational in the system. These features ensure a streamlined approach to managing user access while maintaining control over system functionalities.

        `,
        image:"/images/Access/access.png"
    },


    {
      id:"list",
      title:"2 .Access Group List",
      link:'https://demo.inboice.com/app/access-group/view',
      description:`
      The Access Group List page in Invoice CRM provides a centralized platform for managing and monitoring access groups. At the top right corner, a search bar allows users to quickly locate specific access groups by entering their names, ensuring efficient navigation. A refresh button is also available, enabling users to reload the page and view any recent updates or changes made to the access groups. Additionally, a download button allows users to export the entire list of access groups as an Excel file, which is useful for analysis, reporting, or record-keeping. The main section of the page displays the access group list, showing essential details like group names, center types, statuses, and the last updated information. Each access group includes an edit button, which lets users modify its details, such as the name, center type, or permissions, ensuring flexibility in access management. Furthermore, the page indicates the status of each group with green "Active" labels for operational groups and red "Blocked" labels for disabled ones. Blocked groups are inactive and cannot be used within the system. This comprehensive page design ensures that users can easily view, search, edit, and manage access groups to maintain a well-organized system.
      `,
      image:"/images/Access/list.png"
    }
]