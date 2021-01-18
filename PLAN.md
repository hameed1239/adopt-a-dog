# Project Plan

## Work Distribution

| Developer | Role | Responsibilities |
| --------- | ---- | ---------------- |
| AADITI PAI          | Project Manager     | User/Admin authentication (JWT), account services & payment platform |
| AHMAD EL GAMAL      | Front-end Developer | Polished, responsive UI Design (HTML & CSS)                          |
| HAMEED KAZEEM       | Back-end Developer  | Repo, MongoDB, Mongoose ODM, GraphQL & Database API & Deployment     |
| RONGBANG (BRYAN) YE | Front-end Developer | React and Redux                                                      |
| SOLOMON MERESA      | Front-end Developer | Search algorithms and integration & PWA                              |
| SHAWNA GOHEL      | Front-end Developer | Wireframe Stripe                            |

## Other Requirements

1. Protect sensitive API key info on the server (dotevn)

## Deployment

Heroku

## Project Description

This app is a wikipedia template that allows admin to list information in multiple categories and levels and allows users to search the database using keywords to access the desired information.

The database can be fed and edited by admin with access privileges, permissions and authentication that allows them to do so. Also, users need access privileges, permissions and authentication to certain categories and levels (as well as suggest edits).

For example, if this was a company that wanted to create an employee handbook, the database categories can be the company departments.
1. One `RootAdmin` will create the categories, in this case company `department` and set the privileges of `DepartmentAdmins`.
1. `DepartmentAdmins` can set the privileges of Users/`Employees`.
1. `DepartmentAdmin` will feed the info of the Department into the Database.
1. `Employees` will have access to info that they have permission for set by the DepartmentAdmins.
1. `Employees` can suggest changes or comments to `DepartmentAdmins` by filling in a comment form that send to `DepartmentAdmins` directly (not blog style).