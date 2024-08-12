
# Contacts App

A simple ReactJS Project for managing your contacts. User can Add, Edit and Delete Contacts with ease thanks to the simple and user-friendly interface.


## Features

- Users can add a contact with information such as Name, Email and Contact Number
- Once created, user can easily edit the respective fields.
- User can delete particular contacts with the click of a button
- App is cross platform compatible, with design being responsive based on various screen sizes.


## Components

- *Contacts.jsx* : This component acts as the Landing page of the application and is responsible for displaying the saved contacts.
- *AddContacts.jsx* : This component consists of a form that takes in the contact information to be added. Has basic form validation in place. 
- *ViewContacts.jsx* : User is redirected here when they click on a particular contact in  *Contacts.jsx*. Consists of the respective contact information with an option to Edit and Delete the contact.
- *contactManagement.js* : This file contains all the necessary functions to fetch, add, edit and delete the contact details data from the `localStorage`

## Deployment
Follow the below steps to deploy this project

1. Download project zip file.

2. Extract files.

3. Open the extracted folder in Visual Studio Code

4. Install dependencies
```
    npm install
```
4. Run Project
```
    npm run dev
```

## Technologies Used

- The app was built using the `vite` build tool as it has comparatively more features and is faster than the tradition `create-react-app` method.
- Styling of the application was done using the `Tailwind CSS` framework due to its easy to apply classes that are also very legible.
- Routing in the app from one page to another was achieved using `react-router-dom` package.
- `FontAwesome` icons were used in the app to enhance user experience.
- Data storage for the application was implemented via the browser's client side `localStorage` option

## Possible Improvements (Work In Progress)

This project was designed and devleoped on a tight deadline. Here are few improvements that will enhance the user's experience even more and improve the App's functionality.

- Ability to upload images (profile photos) when creating a contact.
- Being able to delete multiple contacts from the `Contacts` page.
- Sort the saved contacts in an alphabetical manner. 
- Take the data storage solution one step further by adopting `IndexedDB` - a database that is build into browsers.  
