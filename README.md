## How this was set up

1. Create a directory and run `npm init` to create a `package.json` file
2. Install Cypress testing framework using `npm install cypress --save-dev`
3. Add the following script inside the package.json for running the Cypress UI in the browser: `"cypress:open": "cypress open"`
4. Add the following script inside the package.json for running tests in the terminal: `"cypress:run": "cypress run"`
5. Run `cypress:open` and follow instructions to create a new e2e test
6. Install express using `npm install express`
7. Install nodemon dependency for restarting the server when files are changed and add script to run the app using it: `"start": "nodemon app.js"`
8. Create a route using express that serves some content

https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install


## How to run this project

- Run cypress tests either with `npm run cypress:run` or `npm run cypress:open`
- Start server with `npm start`
   