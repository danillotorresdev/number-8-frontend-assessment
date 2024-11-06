# Real Estate Listings Web App

This project was developed as part of a _frontend-assessment_ to demonstrate web development skills using **Next.js**, **React**, and other modern tools. The application allows users to filter property listings, view their details, and includes features like saving properties and submitting contact forms.

**GitHub Repository**: [https://github.com/danillotorresdev/number-8-frontend-assessment](https://github.com/danillotorresdev/number-8-frontend-assessment)

**Live Version on Vercel**: [https://number-8-frontend-assessment.vercel.app/](https://number-8-frontend-assessment.vercel.app/)

## Table of Contents

1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Installation and Setup](#installation-and-setup)
4. [Project Structure](#project-structure)
5. [Best Practices and Design Patterns](#best-practices-and-design-patterns)
6. [Architectural Decisions and Justifications](#architectural-decisions)
7. [Features](#features)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Contributing](#contributing)

---

## 1. Overview <a name="overview"></a>

This application allows users to browse and filter real estate listings, displaying details such as the number of bedrooms, bathrooms, parking spaces, square footage, and price. Users can also submit contact information via a "Contact Agent" form and save properties for future reference.

## 2. Technologies Used <a name="technologies-used"></a>

The project was built using the following technologies and libraries:

- **Next.js 15.0.2**: A React framework that enables server-side rendering and static site generation.
- **React 19.0.0-rc-02c0e824**: A library for building user interfaces.
- **React Hook Form 7.53.1**: Manages form state and validation.
- **Zod 3.23.8**: A schema validation library used to ensure correct data input.
- **Tailwind CSS 3.4.1**: A utility-first CSS framework for styling.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **ESLint**: A tool to maintain code quality by identifying and fixing issues in the code.

## 3. Installation and Setup <a name="installation-and-setup"></a>

### Requirements

- **Node.js** v18+
- A package manager like **pnpm** (preferred), **npm**, or **yarn**

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/danillotorresdev/number-8-frontend-assessment
   ```

2. Navigate to the project directory:

   ```bash
   cd number-8-frontend-assessment
   ```

3. Install dependencies using **pnpm**:

   ```bash
   pnpm install
   ```

4. Create a `.env` file, with this value:

   ```bash
   NEXT_PUBLIC_API_BASE_URL=https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/
   ```

    PS: Base URL of the API for fetching property listings .In a real-world project, this URL should not be hardcoded directly here.  It's better to store sensitive information, such as API URLs, in a secure secret management system like AWS Secrets Manager, Google Secret Manager, or use environment-specific configuration services (e.g., Vercel environment variables). This improves security prevents accidental exposure in version control, and simplifies environment-specific configuration (e.g., development, staging, production).

### Running the Project

1. Start the development server:

   ```bash
   pnpm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the running project.

## 4. Project Structure <a name="project-structure"></a>

Here is the correct project structure, based on the provided screenshot:

```
src/
├── app/
├── components/
├── services/
├── types/
├── utils/
├── .env
├── .eslintrc.json
├── package.json
├── next.config.js
```

### Explanation of Folders:

- **`app/`**: The main folder where the Next.js application files and key architecture are stored.
- **`components/`**: Contains reusable components like `ContactForm`, `SavedPropertiesModal`, `SavePropertyButton`, and other UI elements.
- **`services/`**: Functions related to API calls, such as `fetchListings`, and API configuration in `config.ts`.
- **`utils/`**: Various utility functions such as date formatting and logic for storing favorite properties.
- **`types/`**: TypeScript type definitions for the project.

## 5. Best Practices and Design Patterns <a name="best-practices-and-design-patterns"></a>

During the development of this project, several best practices and design patterns were followed to ensure the code is of high quality, scalable, and maintainable.

### React Portals

**Purpose**:  
**React Portals** allow components to be rendered outside the main DOM tree while staying connected logically within the application. They are particularly useful for modals, tooltips, or other components that need to be displayed above everything else.

**Usage**:  
In this project, React Portals were used in the `SavedPropertiesModal` component to ensure the modal is rendered outside the main DOM structure, directly into the `body` element. This improves the control over the modal’s positioning and avoids issues with z-index or other DOM conflicts.

**Why**:

- **DOM Isolation**: Portals allow isolating modal elements from the main DOM structure.
- **Flexibility**: Ensures that the modal appears above other elements, regardless of where the component is used in the application tree.

### Render Props

**Purpose**:  
**Render Props** is a pattern used to share logic between React components by passing a function as a prop to determine what content is rendered. It provides flexibility in rendering and managing component behavior.

**Usage**:  
This pattern was used in components that needed to share logic while offering flexibility in how the UI is rendered. It allows granular control over dynamic behaviors depending on passed props.

**Why**:

- **Flexibility**: It offers more control over rendering behavior across different components.
- **Separation of Concerns**: Keeps components modular by separating behavior from rendering logic.

### Pure Components

**Purpose**:  
**Pure Components** optimize rendering by preventing unnecessary re-renders when props or state haven’t changed. They are ideal for components that receive static data or rarely change.

**Usage**:  
Components like `ListingCard` were implemented as Pure Components, ensuring they only re-render when their props change, enhancing performance.

**Why**:

- **Performance**: Reduces unnecessary re-renders, improving the application's performance.
- **Ease of Use**: Pure Components are easy to implement and provide significant performance improvements for components with heavy rendering.

### Component Composition

**Purpose**:  
Component composition involves creating larger, more complex components by combining smaller, reusable components. This promotes modularity, reusability, and maintainability in the codebase.

**Usage**:  
Components were designed to be composable, each handling a single, well-defined task. Higher-level components were built using smaller, more specialized components to ensure separation of concerns and easier debugging.

**Why**:

- **Modularity**: Promotes a modular architecture where each component focuses on a specific task, making the code easier to understand and extend.
- **Reusability**: Breaking the UI into smaller components ensures they can be reused across different parts of the application, saving development time.

---

## 6. Architectural Decisions and Justifications <a name="architectural-decisions"></a>

The decision to use **Next.js** as the base framework was driven by the following considerations:

### Server-Side Rendering (SSR)

**Purpose**:  
**SSR** was employed to improve the initial loading time of the application and provide more SEO-friendly content. In the context of real estate listings, ensuring that users have a fast and responsive experience is essential, especially for a site that may rely on organic search traffic.

**Why**:

- **SEO**: Since the application contains property data that can be indexed by search engines, SSR ensures that pages are served with ready-to-index content, improving SEO.
- **Performance**: Server-side rendering reduces "First Contentful Paint" times, improving the user experience on slower connections.

### Server Components

**Purpose**:  
Using **Server Components** in Next.js was a decision to reduce the amount of JavaScript sent to the client, allowing parts of the UI to be rendered on the server and delivered efficiently.

---

## 7. Features <a name="features"></a>

### 7.1 Listings Page

- **Search Filters**: Users can filter property listings by the number of bedrooms, bathrooms, parking spaces, and price range.
- **Listings Display**: Displays a list of properties with a thumbnail, title, location, number of bedrooms and bathrooms, and a "View Details" button.

### 7.2 Property Details

- **Details Page**: After clicking the "View Details" button, the user is directed to a page displaying all details of the selected property.
- **Contact Form**: Users can fill out a form to contact the agent responsible for the property.

### 7.3 Saved Properties Modal

- **Property Saving**: Users can save properties to view later.
- **Saved Properties Display**: A modal shows all saved properties, with the option to remove them from the list.

---
## 8. Testing <a name="testing"></a>

Due to a busy work schedule, I couldn’t commit to adding unit tests, integration tests, or making the layout fully responsive. However, I recommend setting up a testing framework with **Jest** and **React Testing Library** to ensure code quality and reliability. Here’s an outline of the suggested testing setup:

- **Unit Tests**: Test individual components, ensuring they render correctly, handle props as expected, and manage state properly.
- **Integration Tests**: Focus on testing how components interact, particularly forms and filters, which involve multiple inputs and interactions.
- **End-to-End Tests**: Use a tool like **Cypress** to test the entire user flow from filtering listings to viewing details and saving properties.

## 9. Deployment <a name="deployment"></a>

The application has been deployed on [Vercel](https://vercel.com/), which is the recommended platform for deploying Next.js applications. Vercel optimizes for both server-side and static generation, making it suitable for this project. 

To redeploy or view deployment settings, you can:

1. Log into [Vercel](https://vercel.com/).
2. Access the project, linked to the GitHub repository for automatic updates.
3. Configure any environment variables in the Vercel dashboard as needed.
4. Vercel will automatically handle builds and deploy changes when pushed to the main branch.

**Live Version**: [https://number-8-frontend-assessment.vercel.app/](https://number-8-frontend-assessment.vercel.app/)

## 10. Contributing <a name="contributing"></a>

### Contribution Guidelines

1. **Fork the Repository**: Create a fork of the repository.
2. **Create a Feature Branch**: For each feature or bug fix, create a new branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. **Commit Your Changes**: Write clear and descriptive commit messages for each change:
   ```bash
   git commit -m "Add new feature: my-new-feature"
   ```
4. **Push and Open a Pull Request**: Push the branch to your forked repository and open a pull request to the main repository for review.

