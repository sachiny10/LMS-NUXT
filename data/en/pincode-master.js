export default [
    {
          id: "intro",
          title: "1. Introduction",
          link:'https://demo.inboice.com/app/pincodes',
          description: "In this section, you can efficiently search for pincodes by selecting a state and then narrowing it down by city. You also have the flexibility to edit existing pincode details, such as the state or city name, and add new pincodes as needed. This functionality is particularly useful for managing customer addresses and service center locations, ensuring your records are accurate and up to date for seamless operations and service delivery.",
          "image": "/images/Pincode/pincode.png",
          "altText": ""
    },
    {
          id: "search",
          title: "2. Search Section",
          description: `
            This search feature allows users to filter and search for pincodes based on the selected state and city name. A dropdown menu enables quick state selection, while a text input field lets users enter city names. The results are dynamically updated, showing relevant pincode, city, and district information.
            `,
          "image": "/images/Pincode/search.png",
          "altText": ""
    },
    {
            id: "add",
            title:"3. Add Pincode",
            description: "The 'Add Pincode' feature allows users to add new pincodes to a state's list. In this example, Delhi is pre-selected as the state. Users can input additional details like city, district, pincode, area, locality, latitude, and longitude. Clicking the plus button opens the form, and submitting adds the pincode to the database.",
            image:"/images/Pincode/add.png",
    },
    {
           id: "edit",
           title:"4. Edit Pincode",
           "description":"The 'Edit Pincode' feature allows you to modify the details of a specific pincode within the Inboice CRM system. You can edit information such as the city, district, state/UT, and other relevant data associated with the pincode. This feature is useful for updating or correcting pincode information to ensure accurate and up-to-date records within the CRM.",
           image:"/images/Pincode/edit.png",
    },
    {
      id: "refresh",
      title:"5. Refresh",
      "description":"The 'Refresh' button is used to update the list of pincodes and their associated information after adding or editing a pincode. Clicking this button will fetch the latest data from the database and display it on the screen, ensuring that the changes you made are reflected in the view. This feature is essential for maintaining accuracy and consistency in the pincode data displayed within the Inboice CRM.",
      image:"/images/Pincode/refresh.png",
    }

]