# DND Task Management

## Project Overview

DND Task Management is a powerful task management tool designed to help users organize and manage tasks efficiently using a drag-and-drop interface. Built with modern web technologies like Next.js, React, and Firebase, this tool offers a seamless experience for creating and managing tasks, lists, and boards.

### Features

- **Drag and Drop:** Easily organize tasks with an intuitive drag-and-drop interface using `react-beautiful-dnd`.
- **Real-time Collaboration:** Firebase integration enables real-time updates, allowing multiple users to collaborate simultaneously.
- **Responsive Design:** Tailwind CSS ensures a fully responsive design, making the app accessible on all devices.
- **Smooth Animations:** Framer Motion provides smooth, interactive animations that enhance user experience.
- **Form Handling:** `react-hook-form` is used for efficient and easy form management with validation.
- **Custom Alerts and Modals:** `sweetalert2` is used for user-friendly and customizable alerts and modals.
- **Task Prioritization:** Users can assign priority levels to tasks and organize them accordingly.
- **Search and Filter:** Quickly find tasks with integrated search and filter functionality.
- **Firebase Authentication:** Secure user authentication and authorization with Firebase.

## Technology Used

This project is built using the following technologies:

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.
- **Firebase**: A platform for building and managing web and mobile applications.
- **Axios**: A promise-based HTTP client for making requests.
- **Framer Motion**: A library for animations and gestures in React.
- **React Beautiful DnD**: A library for drag-and-drop interactions in React.
- **React Hook Form**: A library for handling form inputs and validation.
- **React Icons**: A library for including popular icons in your React applications.
- **SweetAlert2**: A library for beautiful, responsive, customizable, accessible (WAI-ARIA) alerts.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.

## Live Demo

You can view the live project at the following links:

- **Frontend**: [DND Task Management Frontend](https://dnd-task-management-b71ef.web.app/)
- **Backend**: [DND Task Management Backend](https://dnd-task-management-backend.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Deployment Guide](#deployment-guide)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- PostgreSQL

### Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/dnd-task-management.git
   cd dnd-task-management

   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
    yarn install
   ```

3. **Configure Environment Variables:**

   Create a .env.local file in the root directory and add the following environment variables:

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   DATABASE_URL=your_postgresql_database_url
   ```

4. **Setup PostgreSQL Database:**

   Ensure your PostgreSQL database is running and configured correctly. Update the DATABASE_URL in the .env.local file with your connection string.

   ```bash
   npm install
   ```

## Running the Project

### Start the Development Server

To run the project locally:

```bash
  npm run dev
```

Or using yarn:

```bash
 yarn dev
```

Visit <http://localhost:3000> in your browser to view the application.

### Running Tests

To run tests:

```bash
 npm run test
```

Or using yarn:

```bash
 yarn test
```

## Deployment Guide

### Deploying to Vercel

1. **Push Your Code to GitHub:**

   Ensure your latest code is committed and pushed to a GitHub repository.

2. **Link to Vercel:**

   Go to Vercel, sign in, and link your GitHub repository.

3. **Configure Environment Variables:**

   In the Vercel dashboard, go to your project settings and add the environment variables from your .env.local file.

4. **Configure Environment Variables:**

   Click on the "Deploy" button. Vercel will automatically build and deploy your application.

## Usage

### Creating Boards, Lists, and Cards

- **Boards:** Create a new board by clicking the "Create Board" button and entering a name.
- **Lists:** Inside a board, create lists by clicking "Add List" and specifying a title.
- **Cards:** Add tasks (cards) to any list by clicking "Add Card" and filling in the details.
- **Drag and Drop:** Organize your tasks by dragging cards between lists or boards.

## Testing

### Unit Tests

Run unit tests using npm:

```bash
npm run test:unit
```

Run unit tests using yearn:

```bash
yarn test:unit

```

### End-to-End Tests

Run using:

```bash
npm run test:e2e

```

Or using yarn:

```bash
yarn test:e2e

```

## Test Results

Test results will be available in the `tests/results` directory.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or support, please contact Mahfujur Rahman at [mahfujurrahman06627@gmail.com](mailto:mahfujurrahman06627@gmail.com).
