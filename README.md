# React FAQ Accordion Component

A simple React component that displays a list of frequently asked questions (FAQs) in an accordion style. Clicking on a question reveals its answer, and only one answer can be shown at a time.

**[Live Demo](https://faqsnoto.netlify.app/)**

**(Optional: Add a screenshot or GIF of the component in action here)**


## Features

- Displays questions and answers from a local data source (`data.js`).
- **Accordion Behavior:** Only one answer is visible at any time.
- Clicking an open question closes it.
- Clicking a closed question opens it and closes any other previously open question.
- Uses icons (`+`/`-`) from `react-icons` to indicate the open/closed state of each question.
- Built entirely with functional components and React Hooks (`useState`).
- Demonstrates "lifting state up" for managing shared state between components.

## Tech Stack

- [React](https://reactjs.org/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Project Structure

/src├── App.jsx # Main component, manages active question state├── Questions.jsx # Renders the list of SingleQuestion components├── SingleQuestion.jsx # Renders an individual question item and handles click├── data.js # Contains the FAQ data (array of objects)├── index.css # Basic styling (or your preferred CSS file)└── index.js # Application entry point

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later recommended)
- npm (usually comes with Node.js) or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/NoToRacism/FAQ-section
    ```
 
2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    or using yarn:
    ```bash
    yarn install
    ```

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

### `npm test` or `yarn test`

Launches the test runner in interactive watch mode.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## How It Works

1.  **Data:** The questions and answers are stored in `src/data.js` as an array of objects, each requiring an `id`, `title`, and `info`.
2.  **State Management (`App.jsx`):**
    - The `App` component holds the list of all `questions` in its state.
    - Crucially, it also holds the `activeId` state, which stores the `id` of the currently open question (`null` if none are open).
    - The `toggleQuestion` function updates the `activeId` state. If the clicked question is already active, it sets `activeId` to `null` (closing it). Otherwise, it sets `activeId` to the clicked question's `id` (opening it and implicitly closing others).
3.  **Props Drilling (`App.jsx` -> `Questions.jsx` -> `SingleQuestion.jsx`):**
    - `App` passes `questions`, `activeId`, and `toggleQuestion` down to the `Questions` component.
    - `Questions` maps over the `questions` array and passes `activeId`, `toggleQuestion`, and the individual `question` data (including `id`, `title`, `info`) down to each `SingleQuestion` component.
4.  **Display Logic (`SingleQuestion.jsx`):**
    - Each `SingleQuestion` receives its own `id`, `title`, `info`, the current `activeId`, and the `toggleQuestion` function.
    - It determines if it is the active question by comparing its own `id` with the received `activeId` (`const isActive = id === activeId;`).
    - The display of the answer (`<p>{info}</p>`) and the specific icon (`+` or `-`) depends on the boolean value of `isActive`.
    - When the button is clicked, it calls the `toggleQuestion` function (passed down from `App`) with its own `id`, triggering the state update in the `App` component.
