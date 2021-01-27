# React-Redux Reddit Search 

In this Project you will use reddit api with your knowledge of Redux.
Let’s get started!
If you have a working React-Redux path already (or you just created a new one):
Change your original “src” folder with the Project’s “src” and run your application: npm start
Your goals are;
•	When you select a choice from selector, you should see results as a list from reddit api.
•	Use redux for storing states and fetch action.
•	Use Redux Thunk middleware to make Async call. 

STEPS:
Without middleware, Redux store only supports synchronous data flow. Thus, install thunk middleware with; npm install redux-thunk
1.
`https://www.reddit.com/r/${subreddit}.json`
Take “subreddit” as parameter.

Congragulations!

Challange:
•	When you click refresh button, your search will be refresh itself and show actual time on page.
•	When there is no result for searching value, page should show “No Result” text only.
•	Before loading the results (may be 1 second or more), it should show “Loading…” on the page.
