# Adopt Me

![GitHub repo size](https://img.shields.io/github/repo-size/hameed1239/adopt-me?style=plastic)
![GitHub code size](https://img.shields.io/github/languages/code-size/hameed1239/adopt-me?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/hameed1239/adopt-me?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/hameed1239/adopt-me?style=plastic)

![GitHub last commit](https://img.shields.io/github/last-commit/hameed1239/adopt-me?style=plastic)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/hameed1239/adopt-me?color=green&style=plastic)
![GitHub open pull requests](https://img.shields.io/github/issues-pr-raw/hameed1239/adopt-me?color=red&style=plastic)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/hameed1239/adopt-me?color=green&style=plastic)
![GitHub open issues](https://img.shields.io/github/issues-raw/hameed1239/adopt-me?color=red&style=plastic)

![GitHub stars](https://img.shields.io/github/stars/hameed1239/adopt-me?style=social)
![GitHub forks](https://img.shields.io/github/forks/hameed1239/adopt-me?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/hameed1239/adopt-me?style=social)
![GitHub followers](https://img.shields.io/github/followers/hameed1239?style=social)

![GitHub version](https://img.shields.io/github/package-json/v/hameed1239/adopt-me?color=red&style=plastic)

[![License: MIT](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

## Description

**Adopt Me** is a platform for a dog shelter where users (site visitors) can adopt the dogs. It is a Progressive Web Application (PWA) that was built using the MERN stack.

## Table of Contents

- [Deployment URL](#Deployment-URL)
- [Repo URL](#Repo-URL)
- [Features](#Features)
- [Pre-Requisites](#Pre-Requisites)
- [Installation](#Installation)
- [Usage](#Usage)
- [Screenshots](#Screenshots)
- [Technologies Used](#Technologies-Used)
- [Credits](#Credits)
- [Roadmap](#Roadmap)
- [Questions](#Questions)
- [License](#License)

## Deployment URL

https://adopt-me-hameed1239.herokuapp.com/.

## Repo URL

https://github.com/hameed1239/adopt-me.

## Features

1. Sensitive API key info is protected on the server using `dotenv`.
1. MongoDB Collections:
   1. Dogs.
   1. Taxonomy (classification).
   1. Users.
   1. Orders.
   1. Shopping Cart (DB or local storage?).

## Pre-Requisites

1. Install `node.js`.
1. Install `MongoDB`.
1. Create a database in a service such as `Atlas` on [mongodb](https://cloud.mongodb.com/).

## Installation

1. In the root directory of the app, run `npm i`.
1. Run `npm run seed` to seed the database.
1. Run `npm start`.

## Usage

1. Home page: is the Landing page
2. Dogs page: is the page that shows the list of dogs with a filter option for the breed type. You can get more information including the option to adopt or donate on a dog by clicking on the dog.
3. About page: is the page that gives more information about the adoption agency.
4. Contact page: is where you can fill out a contact form.
5. Login page: is the page that gives the user the option to login or signup for an account.
6. Donate page: is the page that gives you an option to donate.
7. Admin page: This requires that you have admin access. You can test this by login in with username: `admin1@test.com`, password: `password`.

## Screenshots

### Home Page

![Home Page](./lib/screenshot-home.png)

### Dogs List Page

![Dogs List Page](./lib/screenshot-dogs.png)

### Dog Details Page

![Dog Deatils Page](./lib/screenshot-dog.png)

## Technologies Used

This is a MERN full-stack PWA. MERN stands for MongoDB, Express.js, React and Node.js.

1. [HTML5](https://www.w3schools.com/html/)
1. [CSS3](https://www.w3schools.com/css/)
1. [JavaScript](https://www.w3schools.com/js)
1. [Node.js](https://nodejs.org/en/)
1. [Express.js](https://www.npmjs.com/package/express)
1. [Apollo Server Express](https://www.npmjs.com/package/apollo-server-express)
1. [MongoDB](https://www.mongodb.com/)
1. [Mongoose ODM](https://www.npmjs.com/package/mongoose)
1. [React](https://www.npmjs.com/package/react)
1. [React Redux](https://react-redux.js.org/)
1. [Styled Components](https://www.npmjs.com/package/styled-components)
1. [GraphQL](https://www.npmjs.com/package/graphql)
1. [EmailJS-COM](https://www.npmjs.com/package/emailjs-com)
1. Authentication:
   1. [Bcrypt](https://www.npmjs.com/package/bcrypt)
   1. [JWT](https://www.npmjs.com/package/jsonwebtoken) (Jason Web Tokens)
1. [Stripe](https://stripe.com/) (Payment Platform)

## Collaborators

| DEVELOPER                                            | ROLE                | CONTRIBUTIONS                                                                 |
| ---------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------- |
| [AADITI PAI](https://github.com/aadi1988)            | Project Manager     | User/Admin authentication (JWT), admin page and Application form.             |
| [AHMAD EL GAMAL](https://github.com/ahmadelgamal)    | Front-end Developer | UI Design (HTML & CSS) and Contact Form.                                      |
| [HAMEED KAZEEM](https://github.com/hameed1239/)      | Back-end Developer  | Repo, MongoDB, Mongoose ODM, Seeds file, GraphQL & Database API & Deployment. |
| [RONGBANG (BRYAN) YE](https://github.com/rongbangye) | Front-end Developer | React and Redux.                                                              |
| [SHAWNA GOHEL](https://github.com/shawnagohel)       | Back-end Developer  | Wireframes and Stripe Payment platform.                                       |
| [SOLOMON MERESA](https://github.com/solomonmeresa)   | Front-end Developer | UI, GraphQL & PWA.                                                            |

## Roadmap

1. Add `emailjs` to generate emails when adopters submit an application form.
1. Add Footer.
1. Optimize Picture Sizes.
1. Sort lists alphabetically.
1. Replace `alerts` with stylish `modals`.
1. Add `rootAdmin` in addition to existing `admin`.
1. Allow admin sign up for separate admin accounts, pending `rootAdmin` approval, or by receiving a link from the `rootAdmin`.
1. Add OAuth2 for login options.
1. Add validation for form inputs.
1. Allow dog-picture uploads (currently not supported by Heroku).
1. Add more icon-size options in `manifest.json`.

## Questions

Please send your questions and / or comments to any of the [collaborators](#collaborators) listed above.

## License

This project is licensed under the terms of the [ISC](https://opensource.org/licenses/ISC) license.
