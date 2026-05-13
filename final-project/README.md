# "Search for an Airport", a website created by Jack Blessing and Ethan Patel.

Our project intends to inform users about basic information regarding the three major New York City airports: Newark Liberty International Airport, John F. Kennedy International Airport, and Laguardia Airport.

Our project is intended for desktop web-browsers and is NOT optimized for mobile. Most desktop-based browsers such as Chrome, Firefox, and Safari are compatible.

Check out the [Installation Process and Application Information](#installation-process-and-application-information) to learn more.

## Installation Process and Application Information

The installation process is as follows:

- Save the application locally on your system and open in Visual Studio Code.
- Ensure that npm is installed on your system. This can be done by typing "npm install" in Terminal or Command Prompt, depending on your OS.
- Install nodemon by typing "npm install nodemon" in the Visual Studio Code terminal once you've accessed the application files.
- Install Supabase by typing "npm install @supabase/supabase-js" in the VS terminal.
- Install Express by typing "npm install express" in the VS terminal.
- Type "npm start" in the VS terminal to start the app.

The website is hosted on port 3000: navigate to http://localhost:3000 to access the home page.

In the index.js file, you will find GET, POST, and DELETE endpoints.

- The GET endpoint retrieves information from the "airport" Supabase database.
- The POST endpoint inputs information into the "airport" Supabase database.
- The DELETE endpoint deletes all rows from the "airport" Supabase database.

Known bugs include:

- An error on the home page upon deleting a favorite airport, however it does not break the functionality of the application.
- You must delete a favorite before adding a new one. If you attempt to add a new favorite while another airport is already favorited, nothing will happen.

Future development may be focused on improving the deleting and retrieving functionality of the database, to ensure that there are no more bugs.
