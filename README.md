# Comment Box Widget
This is React application that provide the solution to auto-selecting users in the comment field.

## Installation
First clone this repository `git clone git@github.com:Shemsedin/comment-box-widget.git` navigate to the root of this project and then install dependencies by doing `npm install`.

Once the above is done you are ready to run the application locally.

## Directory Structure
The directory structure is as below.

```bash
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── UserData.json
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── CommentWidget.js
    │   ├── CommentWrapper.js
    │   ├── NoMention.js
    │   ├── SuggestionList.js
    │   └── __tests__
    │       ├── CommentWrapper.test.js
    │       ├── ComponentWidget.test.js
    │       ├── NoMention.test.js
    │       ├── SuggestionList.test.js
    │       └── __snapshots__
    │           ├── CommentWrapper.test.js.snap
    │           └── NoMention.test.js.snap
    ├── config
    │   └── config.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── util
        ├── enzyme.js
        ├── insert-mention.js
        └── sort-suggestions.js
```

Just to briefly explain some of the directories above. As can be seen on the above structure
 
 1. Under `src` directory is all the application's code
 2. Components `scr/components` directory is where all components are, within this directory `__tests__` directory is where all the tests code for the components
 3. `config` is where various settings for the application
 4. `util` is where all helper functions are

## Running the App

While you are in the root directory on the terminal do `npm start` when you do that it will start the application and will give you this link `http://localhost:3000` which you can navigate to, and you will see the app running.

## Using

Once you run the app you will have a comment box where you can add comment and if you want to mention/refer a user type **@** and start typing you will then have a suggestion i.e. list of users that you can choose from to insert in the comment field.

## Automation Testing

For automation testing we are using [Jest](https://jestjs.io/) which ships with React an [Enzyme](https://enzymejs.github.io/enzyme/).

Navigate to the root directory of this app, if not already int there. Then do `npm test` then you will see int the terminal that it will give you a few options, once of which is `Press a to run all tests` which is what you will need to do i.e. press `a` and then you will see all tests running and passing.
