# Fitness Log Web Application

### URL: fitness-log-app.onrender.com

(Note: It may take up to 30 seconds for the site to spin up. This is due to hosting limitations for the free-tier option on render.com)

##### Created by: Corey D. Brown

This is a full-stack application that allows users to document their daily workouts, bodyweight measurements, and notes/reminders/goals. Personal records in every exercise are automatically determined on a continuous basis. Displayed are interactive graphs and statistics of the users fitness data. Users are also able to toggle between light and dark modes.

The app incorporates the following technologies:

Front-end:

- React
- Redux Toolkit for state management
- RTK Query for API calls and syncing state
- Material UI component library
- Formik for form validation
- Yup for custom form schemas
- nivo for interactive graphs

Back-end:

- Node.js
- Express framework
- Bcrypt for secure password hashing
- Mongoose object modeling

Database:

- MongoDB Atlas

The app features robust user authentication and authorization using JSON Web Tokens. Enforced standard security protocols including password salting/hashing and error handling.
