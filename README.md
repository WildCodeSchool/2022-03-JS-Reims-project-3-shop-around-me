# Wild Code School (Reims) - Project 3 - Shop Around Me

## Dates

From 23rd May to 27th July 2022

## Concept :

The Shop Around Me web app in a few words : "Find the product you are looking for in a store near you".

Three main features :
  1/ A search engine
  2/ A stores map as the search result
  3/ An updated pot that can be used in these stores

## Team :

Developer team :
- [Alexandra De Brito](https://github.com/Alexandra-Rdrgs "Alexandra De Brito")
- [Théo Depelsemacker](https://github.com/theoDep "Théo Depelsemacker")
- [Simon Duc](https://github.com/Simon-Duc "Simon Duc")
- [Valentin Morette](https://github.com/Valentin-Morette "Valentin Morette")

Partner :
- Anne-Laure Petit-Gats Gervais, CEO of Shop Around Me.

Instructors :
- Romain Guillemot
- Robin Jonval

## Goals :

- A database model was designed and updated throughout the project
- The design of the application is consistent and respects the partner's brand guidelines
- The API respects the REST architecture
- The application is created using a front-end framework
- The code is well structured and DRY
- The application is functional and has no major errors
- The code is available on Github
- The application meets the partner's expectations
- The team has respected the principles of agile methods

## Setup & Use

### Support

This template is meant to serve as a foundation for every project following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.


### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated