Cd into the project and execute in our terminal

## ~$npm install

Cd into the project and execute in terminal npm install to install dependencies

## ~$npm start

After npm start -> [http://localhost:3000]

All the external libraries are checked.

Structure >

template/layouts high level of structuring Header - Nav - Main
pass from routes + WithLayoutRoute

App.js

The start point of the web application is in App.js (like in Next -next/router) where we insert the global css
and basic routing with 'react-router-dom'.

## SCSS

For this project I chose the approach:
Scss in the same folder with the component.
Like Next css with folder structure /styles/<name>.module.css
It can be done with styles.jsx(Main Folder) || styled-components || Tailwind || Bootstrap = css frameworks X

## Constants

Every object with constant value is not in the scope of a function, because it slows down the performace of the app due to rerendering.
example: Regex in post form.

## Programmer friendly

Splitting code into smaller files improving code flow and readability could help debugging also.

## SEO friendly

Head metatags for instagram + fb + twitter bots
Also React Helmet is a cleaner way of achieving the same result.

- Problem is that meta tags in every page creates a lot of clutter and it does not lead to dry code.

## Responsive

Responsive preparation for most cases.

## Dependencies

Dependencies where checked based on Bundlephovia and also weekly Download + Stars

    axios": "^0.21.1",                  For Fetching
    "lodash.kebabcase": "^4.1.1",       Creating dynamic slug
    "react-hook-form": "^6.15.2",       My personal favorite form
    "react-router-dom": "^5.2.0",       Router react.
    "react-scripts": "4.0.2",
    "react-select": "^4.1.0",           Fast responsive - Fully customizable select-input.
    "react-slick": "^0.28.0",
    "sass": "^1.32.8",
    "sass-loader": "^11.0.1",
    "slick-carousel": "^1.8.1",         css for carousel Bundle size : 42.3kB (min)

    "@testing-library/jest-dom": "^5.11.9",     testing library
    "@testing-library/react"
    "web-vitals": "^1.1.0"              Modular library for measuring all the Web Vitals metrics.

There are no Unit Testing for this project yet. React has a specific react-testing-library by Kent C Dodds. So here are some snapshots from the web app.

## Proptypes

## Source-code editor: Vscode | Webstorm (prettier , eslint)
