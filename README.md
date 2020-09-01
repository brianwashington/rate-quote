# Intro

For the take home test I decided to do the front-end project. I provide instructions below on how to run this app and some notes about the features that I added. Those instructions are followed by a list of the tools that I used and some brief explanations as to why I chose them.

## Getting Started

Before running the application, an `env.local` file is required to run the app properly. Also a `cypress.json` file is required to run the integration tests as intended.

I included sample files with dummy values for the api key and api url. If you replace those dummy values with real values and rename the files to those previously mentioned, everything should run properly.

With that out of the way, to run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

To run the Jest (unit) tests:

```bash
  yarn test
```

To run the Cypress (Integration) tests:

**Note: need to have the app running for these to work**

```bash
  #this opens the Cypress GUI and you can run tests from there
  yarn cypress:open
  #or to run the tests in the terminal
  yarn cypress:run
```

# Features

In addition to the basic requirements requested, I also added:

- Form validation with error messages
- Responsive design (the results table should scroll on smaller screens)
- A fun loading animation 🙂

## Tools used:

### React and Redux/Redux-Thunk

These were part of the requirements

### Next.js

Next.js is a React Framework that uses server-side rendering. I chose Next.js because of familiarity, its built-in tools (React,Webpack, Babel, etc.), and its relative ease of use.

### Styled Components

I chose styled components also because of familiarity, but I also like the option of having CSS and JS together in the same file. I also like how styled components gives you actual components to work with so you can avoid having to add classes to elements to style them.

### Jest

Standard Javascript testing framework.

### Cypress

I used Cypress for integration testing. This is another framework that I have worked with before and I find it pretty easy to use and it has a lot of powerful features.

### Prettier

For code formatting
