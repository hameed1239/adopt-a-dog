# Project Requirements

​

- Use React for the front end.
  ​
- Use GraphQL with a Node.js and Express.js server.
  ​
- Use MongoDB and the Mongoose ODM for the database.
  ​
- Use queries and mutations for retrieving, adding, updating, and deleting data.
  ​
- Be deployed using Heroku (with data).
  ​
- Meet the minimum requirements of a PWA:
  ​
  _ Uses a web manifest
  _ Uses a service worker for offline functionality \* Is installable
  ​
- Have a polished UI.
  ​
- Be responsive.
  ​
- Be interactive (i.e., accept and respond to user input).
  ​
- Include authentication (JWT).
  ​
- Protect sensitive API key information on the server.
  ​
- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).
  ​
- Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
  ​
  Finally, you must add your project to the portfolio that you created in Module 20.
  ​
  You should also consider the following suggestions to help your project stand out:
  ​

## CSS Styling

​
Instead of using a CSS library like Bootstrap, consider one of the following suggestions:
​

- Look into the concept of **CSS-in-JS**, which abstracts CSS to the component level, using JavaScript to describe styles in a declarative and maintainable way. Some popular libraries include [styled-components](https://styled-components.com/) and [Emotion](https://emotion.sh/docs/introduction).
  ​
- Try using a component library, such as [Semantic UI](https://semantic-ui.com/), [Chakra UI](https://chakra-ui.com/), or [Ant Design](https://ant.design/).
  ​
- Create all the CSS for your application just using CSS.
  ​
  Ultimately, it doesn't matter which of these options you choose&mdash;it just needs to look professional and be mobile-friendly.
  ​

## Payment Platform

​
Consider integrating the Stripe payment platform. Even if you don’t create an e-commerce application, you could set up your site to accept charitable donations.
​
**More details about the project will be provided in the lessons for Module 23 in Canvas.**

## Other Comments by Everett

Also, re the requirements and JWT: I would prefer if you used JWT’s in the context of evaluating someone else’s JWTs and not rolling your own for authentication. In my long-winded lecture last Monday, I tried to explain why JWTs are not often a great solution for implementing authentication in your application, but they are a great way for you to implement someone else’s authentication in your app. For example, a great way to implement a login portal in your app would be by using Google Sign On: you will have to read their documentation and struggle through their website instructions (https://developers.google.com/identity/sign-in/web/backend-auth).

BONUS CHALLENGE: benchmark using JWTs for authentication in your app vs. a simple session-based login (e.g. via a session identifier) for your authentication. Which is faster? Which requires more bandwidth? How would you test this?
