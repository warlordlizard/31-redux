![cf](https://i.imgur.com/7v5ASc8.png) Lab 31: Redux - Budget Tracker
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **.babelrc** - contains babel config
* **package.json** - contains npm package config
* **webpack.config.js** - contains webpack config
* **src/** - contains the frontend code
* **src/components/** - contains your components
* **src/main.js** - contains the entire app
* **src/style** - containing your `.scss` partials and styles
* **src/style/main.scss** - contains the entry point for `.scss` partials

## Feature Tasks
##### Minimum Requirements
Create the following components:

```html
<App />
  <Provider />
    <BrowserRouter />
      <Route />
        <Dashboard />
          <CategoryForm />
            <CategoryItem />
```

## Category - General
A category should contain at least the following properties:
  * `id` a uuid
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `budget` a number that is the total amount of $ in the category
  * fell free to add more to your categories if you want

## Redux

##### Reducers
Create a category reducer in your your reducer directory
* this reducer should support the following interactions
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTROY`

##### Action Creators
An action creator should be built for each interaction supported by your category reducer

##### Store
In `lib/store.js`, export a function  that will return a new redux store from your category reducer

## Components

##### `<App />`
* should set up the `<Provider />` for the redux store

##### `<Dashboard />`
* should be displayed on the `/` route
* should use `connect` to map state and dispatchable methods to props
* should display a `CategoryForm` for adding categories to the app state
* should display a `CategoryItem` for each category in the app state

##### `<CategoryForm />`
* should expect an `onComplete` prop to be a function
  * this should be invoked with the `<CategoryForm />` state when the form is submitted
* should expect a `buttonText` prop to be configure the submit button text
* should support an optional `category` prop that will initialize the state of the form

##### `<CategoryItem />`
* should display the category name and budget
* should display a delete button
  * `onClick` the category should be removed from the application state
* should display a `<CategoryForm />`
  * `onComplete` the form should update the component in the application state