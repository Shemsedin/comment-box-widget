# Comment Box Widget

This is a React application that assists a user when they want to reference another user in the comment field by providing a list of suggestions to choose from and autocomplete the name of the user that you want to reference in the comment.

To start this process a user would type the character to trigger the mention **(currently @ but this can be easily changed)** and start typing the user's name.

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

Just to briefly explain the directories above and what they have.

1.  Under `src` directory is all the application's code
2.  Components `scr/components` directory is where all components are, within this directory, the `__tests__` directory is where all the tests code for the components are
3.  `config` has various settings for this application
4.  `util` has all helper functions

As it can be seen the application is made of small blocks of functionalities hence making it easy to integrate into other applications.

## Running the App

While you are in the root directory on the terminal do `npm start` when you do that it will start the application and will give you this link `http://localhost:3000` which you can then navigate to, and you will see the app running.

## Usage

Once you run the app you will have a comment box where you can add a comment and if you want to mention/refer a user type **@** and start typing the name of the user that you want to refer to, you will then see a list of suggestions i.e. list of users that you can choose from to insert into the comment field.

The action can be canceled by pressing escape or backspace in the keyboard.

## Automation Testing

For automation testing I have used [Jest](https://jestjs.io/) which ships with React and [Enzyme](https://enzymejs.github.io/enzyme/).

To test use terminal to navigate to the root directory of this app, if not already in there. Then do `npm test` then you will see in the terminal it will give you a few options, one of which is `Press a to run all tests` which is what you will need to do i.e. press `a` and then you will see all tests running and passing.
