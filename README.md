# Adopt A Dog

![GitHub repo size](https://img.shields.io/github/repo-size/hameed1239/employee-handbook?style=plastic)
![GitHub code size](https://img.shields.io/github/languages/code-size/hameed1239/employee-handbook?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/hameed1239/employee-handbook?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/hameed1239/employee-handbook?style=plastic)

![GitHub last commit](https://img.shields.io/github/last-commit/hameed1239/employee-handbook?style=plastic)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/hameed1239/employee-handbook?color=green&style=plastic)
![GitHub open pull requests](https://img.shields.io/github/issues-pr-raw/hameed1239/employee-handbook?color=red&style=plastic)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/hameed1239/employee-handbook?color=green&style=plastic)
![GitHub open issues](https://img.shields.io/github/issues-raw/hameed1239/employee-handbook?color=red&style=plastic)

![GitHub stars](https://img.shields.io/github/stars/hameed1239/employee-handbook?style=social)
![GitHub forks](https://img.shields.io/github/forks/hameed1239/employee-handbook?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/hameed1239/employee-handbook?style=social)
![GitHub followers](https://img.shields.io/github/followers/hameed1239?style=social)

![GitHub version](https://img.shields.io/github/package-json/v/hameed1239/employee-handbook?color=red&style=plastic)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

**Adopt A Dog** is a website for an dog shelter where users (site visitors) can buy and adopt the dogs.

## Table of Contents

- [Deployment URL](#Deployment-URL)
- [Repo URL](#Repo-URL)
- [Features](#Features)
- [Pre-Requisites](#Pre-Requisites)
- [Installation](#Installation)
- [Usage](#Usage)
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

1. Sensitive API key info is protected on the server using `dotenv`
1. MongoDB Collections:
   1. Dogs
   1. Taxonomy (classification)
   1. Users
   1. Orders
   1. Shopping Cart (DB or local storage?)

## Pre-Requisites

1. Install `node.js`
1. Install `MongoDB`
1. Create a database in a service such as `Atlas` on [mongodb](https://cloud.mongodb.com/).

## Installation

1. In the root directory of the app, run `npm i`.
1. OPTIONAL: run `npm run seed` to seed the database.
1. Run `npm start`.

## Usage

1.

### Screenshot / Gif Animation

![Screenshot / Gif Animation]()

### Video Demo

[Video Link]()

## Technologies Used

1. HTML
1. CSS
1. JavaScript
1. Node.js
1. MongoDB
1. Mongoose ODM
1. React
1. Redux
1. GraphQL
1. Authentication:
   1. Sessions
   1. JWT (Jason Web Tokens)
1. Stripe (Payment Platform)
1. PWA

## Credits

### Collaborators

| DEVELOPER           | ROLE                | RESPONSIBILITIES                                                 |
| ------------------- | ------------------- | ---------------------------------------------------------------- |
| AADITI PAI          | Project Manager     | User/Admin authentication (JWT) & account services               |
| AHMAD EL GAMAL      | Front-end Developer | UI Design (HTML & CSS)                                           |
| HAMEED KAZEEM       | Back-end Developer  | Repo, MongoDB, Mongoose ODM, GraphQL & Database API & Deployment |
| RONGBANG (BRYAN) YE | Front-end Developer | React and Redux                                                  |
| SHAWNA GOHEL        | Back-end Developer  | Wireframes, Stripe Payment platform and React & Redux            |
| SOLOMON MERESA      | Front-end Developer | UI, GraphQL & PWA                                                    |

## Roadmap

1. Add application form for adopters.
1. Add `About` page.
1. Optimize Picture Sizes.
1. Add `rootAdmin` in addition to existing `admin`.
1. Allow admin sign up for separate admin accounts, pending `rootAdmin` approval, or by receiving a link from the `rootAdmin`.
1. Add OAuth2 for login options.

## Questions

Please send your questions and / or comments to any of the [collaborators](#collaborators) listed above.

## License

This project is licensed under the terms of the [ISC](https://opensource.org/licenses/ISC) license.
