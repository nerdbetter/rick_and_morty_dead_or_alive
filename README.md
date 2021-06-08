# Walkthrough
Uses https://rickandmortyapi.com/documentation/#introduction API to Get locations and Characters along with data associated.

Decided to use create-react-app becasue I am familiar with it, it's quick and easy to set up. Has a template for redux that includes updated redux tools.

I am very familiar with using redux to manage application state, which is useful fore storing data from a REST API. I did make the decision to use Slices, something I had only read about before but was very interested in trying. Some of that learning ate up time, very happy with the results.

I am using REST API because I am not familiar with GraphQL didn't want to use all of my time learning it. I have done some research and read some of the docs - it seems to be more flexible than a REST set up. I would love to get my hands dirty on it sometime.

If this was my API, I would add a some filters on the API side that don't currently exist to make it easier for the front end to process. Right now if you want to get all Characters in a Location you have to get the locations, parse out the character urls and split the id's off.

As of writing this, the modal is unfinished and I can not save notes. I could add those but I wanted to give a realistic estimate of my timeframe. Spent about 4 hours working the project. It was fun!


## App Description
Home page is a list of Locations in the Rick and Morty universe. It lists all locations currently returned in the API.
Click on a card to get Characters in that Location, along with meta data.
The Notes Button opens a modal, modal is unfinished.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
