# MinhaAG - How to start

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Step 1
Run `npm i` so the application can be installed.

## Step 2
Run `json-server --watch db.json --routes routes.json` so the mock server with database is initialized.

## Step 3
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

---
> # Example of usage
> The database is already set. This application uses a mocked database and it's informations are located in the file `db.json`
> - It's possible to login with the username: `user` and password: `pass`. These credentials have some bets already made.
> - With the credentials username: `teste` and password: `t`, it's possible to see the case where there's no bets made. 
---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

