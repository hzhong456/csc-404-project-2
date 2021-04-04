# CSC-404 - Internship Qualifier

## Overview

A simple express application to allow for a user to input grade information for a student and display qualifying students based on partial GPA.

## Development

Enter `npm install` to install all dependencies before proceeding to the subsections below.

### Running Program

Enter the `npm run start` command to start the program itself.  This will start the express server locally on port 3000 - visit http://localhost:3000 to access the app.

### Running Test Suite

Enter the `npm run test` command to run the test suite.

### Running Linter

Enter the `npm run lint` command to run the linter.  The linter helps to enforce our convention throughout the code base.  The rules for this convention are defined in the `.eslintrc.json` file.

### Docker

If you want to run any of the commands with docker instead of locally, you can do so with the following steps:

1. Build the docker image with `docker build -t internship-qualifier .`
2. To start the actual program, with the prompt -> `docker run --rm -p 3000:3000 -v $(pwd):/service internship-qualifier`
3. To run the linter -> `docker run --rm -v $(pwd):/service internship-qualifier npm run lint`
4. To run the test suite -> `docker run --rm -v $(pwd):/service internship-qualifier npm run test`
