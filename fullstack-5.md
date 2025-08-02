# Homework: Connecting the Backend to the Client

In this assignment, you will connect the backend of your application to the client side that you created in previous sessions. This involves creating a user authentication flow with login and signup functionalities.

## Requirements

### 1. Create Additional Pages

You will create two new pages in the client application:

- **Signup Page**: This page should be the first page displayed when the user enters the application.

  - Include a form for users to create a new account.
  - Add a link to the **Login Page** for users who already have an account and wish to log in.

- **Login Page**: This page will allow users to log into their existing accounts.
  - After successful signup, redirect users to this page to log in with their newly created credentials.

### 2. User Authentication Flow

- After logging in successfully, users should be redirected to the **Tasks Page**, where they can view and manage their tasks.
- Implement a **protected route** for the Tasks Page:
  - Users who are not logged in should be unable to access the Tasks Page. If they attempt to visit this page, redirect them to the Login Page.
  - Conversely, if users are logged in, they should not have access to the Login and Signup pages.

### 3. Logout Functionality

- On the Tasks Page, add a **Logout** button at the bottom of the side navigation.
  - When clicked, a modal should appear asking, "Are you sure?" with two buttons: **Cancel** and **Yes**.
  - If the user clicks **Yes**, they should be logged out and redirected to the Login Page. They should no longer be able to access the Tasks Page after logging out.

### 4. Optional Features

- You may implement a **Profile Page** that displays the user's information, including:

  - Username
  - Email
  - Number of tasks created
  - Number of tasks completed

- Additionally, consider adding functionality to allow users to change their password directly from the Profile Page.

## Submission

1. First, deploy the backend part of the application and get the API endpoints from the hosting service.
2. Next, update the client-side code to replace the local API endpoints with those provided by the deployed backend.
3. Finally, deploy the client side of the application and submit the link along with your repository in Google Classroom.

- Use **Render** to deploy the backend portion of the application.
- Use **Netlify** to deploy the client side of the application.
