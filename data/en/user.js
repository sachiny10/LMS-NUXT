export default [
    {
        id:'intro',
        title:"1. Add User",
        link:'https://demo.inboice.com/app/user',
        description:`
          <ol>
        <li>
            <b>Center:</b>
            <p>Specifies the center to which the user will be associated. This determines the user's access and permissions.</p>
        </li>
        <li>
            <b>Access Group/Rule:</b>
            <p>Assigns the user to a specific access group or rule, which defines the user's privileges and capabilities within the system.</p>
        </li>
        <li>
            <b>Full Name:</b>
            <p>The user's full name, which will be displayed in the user list and other areas of the system.</p>
        </li>
        <li>
            <b>Mobile Number:</b>
            <p>The user's primary mobile phone number, used for communication and verification purposes.</p>
        </li>
        <li>
            <b>Email:</b>
            <p>The user's email address, used for communication and login purposes.</p>
        </li>
        <li>
            <b>AutoGenerate Password:</b>
            <p>Automatically generates a random password for the user. Users can also choose to set their own password manually.</p>
        </li>
        <li>
            <b>Other Details:</b>
            <p>Additional information fields such as Aadhaar number, PAN number, father's name, date of birth, and address.</p>
        </li>
        <li>
            <b>Bank Details:</b>
            <p>Optional fields for entering the user's bank account information, including the name of the account, bank name, IFSC code, account number, and account type.</p>
        </li>
        <li>
            <b>Reset:</b>
            <p>Clears all the entered data in the form fields, allowing users to start a new user creation process.</p>
        </li>
        <li>
            <b>Save & Inactivate:</b>
            <p>Saves the user information but marks the user as inactive. The user will not be able to log in until activated.</p>
        </li>
        <li>
            <b>Save & Activate:</b>
            <p>Saves the user information and immediately activates the user. The user can then log in to the system using their credentials.</p>
        </li>
    </ol>
        `,
        image:'/images/User/add.png'
    },
    {
        id:'list',
        title:"2. User List",
        link:'https://demo.inboice.com/app/user/view',
        description:`
            <ol>
        <li>
            <b>Search Field:</b>
            <p>Allows users to quickly find specific users by entering their name or other relevant criteria.</p>
        </li>
        <li>
            <b>Download Excel File:</b>
            <p>Provides the option to export the entire list of users, including their details, into an Excel spreadsheet for further analysis or reporting.</p>
        </li>
        <li>
            <b>User List:</b>
            <p>Displays a table containing information about all the added users. Each row represents a user, and columns show details such as name, access group, center, mobile number, email, and status.</p>
        </li>
        <li>
            <b>Expanding Toggle Button:</b>
            <p>When clicked, expands or collapses a row to reveal additional details about the corresponding user, including their address, other details, and recent activity.</p>
        </li>
        <li>
            <b>View Password Button:</b>
            <p>Allows users to view the password associated with the selected user. The password is displayed in a masked format for security purposes.</p>
        </li>
        <li>
            <b>Change Password Button:</b>
            <p>Provides the option to reset or change the password for the selected user. Users can enter a new password and confirm it to update their login credentials.</p>
        </li>
        <li>
            <b>Edit Button:</b>
            <p>Allows users to modify the details of a user, such as their name, contact information, or other relevant attributes.</p>
        </li>
        <li>
            <b>Block Button:</b>
            <p>Temporarily deactivates a user, preventing them from logging in and accessing the system. Blocked users can be reactivated later if needed.</p>
        </li>
        <li>
            <b>Delete Button:</b>
            <p>Permanently removes a user from the system, deleting all associated data and records. This action is irreversible and should be used with caution.</p>
        </li>
        <li>
            <b>Active Status:</b>
            <p>Indicates whether a user is currently active and able to log in to the system. An active user has full access to their assigned features and permissions.</p>
        </li>
    </ol>
        `,
        image:"/images/User/list.png"
    }
]