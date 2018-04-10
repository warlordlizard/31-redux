## Configuration
* **README.md**
* **.gitignore**
* **.eslintrc**
* **.eslintignore**
* **package.json**
  * a `watch` script has been configured for watching the app with webpack-dev-server
* **webpack.config.js**
* **babelrc**
* **src/** - contains frontend code
* **src/index.html**
* **src/main.js** - contains entire app
* **src/components** - contains app components (see list below for all components)
* **src/action**
* **src/reducer**
* **src/lib**
* **src/style**
* **src/style/base**
* **src/style/layout**
* **src/style/lib**
* **src/style/module** - contains SASS partials for all components

## Installation
1. To install this application, download the files from this repository
2. `cd` to the repository directory and run `npm i`
3. Use `npm run watch` to run the app locally
4. Navigate to `localhost:<PORT>` to explore the app

## Application Details
* This app uses `React` and is comprised of the following components:

```
<App />
  <Dashboard />
  <CategoryForm />
    <CategoryItem />
      <CategoryForm />
        <ExpenseForm />
        <ExpenseItem />
          <ExpenseForm />
```

## Redux
This app also uses `Redux` with the following reducers. Action creators are built for each interaction.

 CATEGORY         | EXPENSE          |
----------------- | ---------------- |
`CATEGORY_CREATE` | `EXEPNSE_CREATE` |
`CATEGORY_UPDATE` | `EXPENSE_UPDATE` |
`CATEGORY_DELETE` | `EXPENSE_DELETE` |
