# Posterr

## Installing dependencies

To install the dependencies of this project you may execute the command `yarn` or `npm i`

## Server

To start the server run on your terminal the command `yarn server` or `npm run server` after running the installation command

## Running the project

To run this project on your computer execute the command `yarn start` or `npm start` on your terminal

### Home

![](./.github/home.png)

### Profile

![](./.github/profile.png)

#API Resources

    http://localhost:3333/users

    http://localhost:3333/posts

    http://localhost:3333/comments

    http://localhost:3333/following

# Debugging with reactotron

    https://github.com/infinitered/reactotron

# Planning

    - Is there a prototype I can consult?

    - What kind of notifications should the user receive?

    - Will the user be able to opt out of receiving these notifications if they prefer?

    - Will there be any system to block a user?

    - Will this new post reflect the original post in any way?

    - When typing, should the results contain only the people the user follows or all the results found?

    - Will it be possible to tag just one user or multiple ones?

    I believe that a new column should be added in the posts table referencing the mentions made in it, it can reference a new mentions table that can contain one or more user references according to what is decided.

    I would start development from the front by creating the new feed, creating a new list similar to the existing one, creating a component that would appear above the text field when the user types the “@” and showing the list with the corresponding results. After that, I would create the mention module in the project's redux store with all the necessary actions and sagas, initially for listing, adding and removing users.

    In the “feed” module I would add the listing of filtered posts with mentions to the user, this listing would be updated whenever the user switches to this new feed

# Critique

    - Add some i18n lib for internationalization and add support to more languages.

    - Add some SSR lib or framework (e.g.: next.js) to improve SEO and avoid page flickering.

    - Material ui could be a good addition, specially the built in Grid components to make it easier to create interfaces. The variety of ready-made components would also make development faster and more consistent

    - Move all redux action types to a types.js file as constants within each module to simplify future maintenance. Whenever some type is needed I could just import the constant from the file and when I need to make some change I will have to change it in just one place.

    - Create loading animations to improve user experience

    - All validations should be received from api to provide an updated feedback for the user about the current state of the database (on post creation for example).

    - Improve cache using redis to have a faster response from the server.

    - In browser notification when some user reposts your content or starts to follow your account.

    - Use typescript for type support and get errors faster as typescript validates code on transpilation. It should make code management easier and improve team productivity.

    - Instead of making multiple calls in the api, I believe that posts and comments could already come in the same call following the sequelize pattern. I should use a limit and bring other comments on demand as the user request it.

    {
    	id: '',
    	content: '',
    	author: '',
    	comments: [],
    	...
    }
