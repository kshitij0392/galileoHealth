This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Application Information`

> This application is created with create-react-app CLI, with typescript flag. I have taken an object oriented approach to build this application with Typescript with focus on component oriented and reusable code. A series of small components come together to form the entire application.

### `Application is split in following components`

- App (Class based) - This is the brain of the application, all the logic and data flows through this component.
- Navbar (Functional) - This is a simple navbar component, which can be modified and reused when application is scaled.
- User (Functional) - This component will consists of all the user information, like name, avatar etc.
- Providers (Functional) - This component will show list of all the available providers with an option to add providers.
- Current Providers (Functional) - This component will show the list of providers that user choose to add from list of available providers.

### `State Management`

- Implemented React-Redux for managing the state, probably overkill for such a small application, however, I wanted to demonstrate my skills with Redux and it's complex concepts such as Reducers, Actions, enums etc.
- Went with models approach, to mimic the data-structure for incoming data from API.
- I used axios library to make request to the backend.

### `UI Implementation`

- Implemented React-Bootstrap, to implement UI elements of the application.
- I have tried to work with some complex implementation for eg tables and lists.
- Implemented a fake data library called as faker.js to have user avatar and random names for user.
- Implemented Fontawesome for some icons.
- Went ahead with plain CSS to keep things simple.

### `Thought Process`

> Here looking at the given problem, I felt it would be nice for an user to be able to look at all the available providers and their age and degree in order to make decision with they should be adding in their list.

### `Room For Improvement`

- Responsive Design could be better
- Implementation of Tests

### `Additional Comments`

> I would like to thank you for giving me an opportunity to work on this assigment, I have always worked with React-Redux with traditional JS and Typescript with Angular, this was the first time, I got a chance to work with React-TypeScript combination. It was really fun and challenging to do this excercise. I got to learn a lot of new concepts. Thank you :)
