**Overview**
1) This app gets news articles from the Hacker News API. Documentation: https://github.com/HackerNews/API
2) Features include live data, "show  more" button, navigable liks, ability to toggle light/dark mode, and persisting data across tabs and browser refresh
3) Users can see articles, open them in new tabs, save them, and get more articles

**Follow on items (if this were a real-life project)**
1) Talk to the Product Manager to get feedback on the following: The app displays how long ago the article was written. I think its worthwhile to not just display hours (like the mockup) but get into detail, like minutes, hours, days, weeks, months, and years. I've memoized the article component, so it won't update unless there are new props, so when the user fetches new data the existing article element don't rerender. Since data is storred in sessionStorage and the components don't rerender, the function for determining article recency might not rerun and the data could get pretty stale (user might see that the article was written 10 minutes ago, but it could be the day before if that's when it was first rendered). We'd want some policy to determine how frequently we should run the function to update the time: too frequently would result in lots of additional executions and rerenders, and too infrequently would result in unacceptably stale data.Really depends on how important the data is to the users and how much data will be used in the app / how heavy the app will be.
2) Comlete integration tests for API calls. Running into babel and webpack problems related to the testing library, which I think are out of scope for this project.
3) Create wireframes and reorganize the CSS (some of the current styling artchitecture isn't ideal if the app were to be extended).
4) Some areas of the code initialize variables using 'let'. I'm not a huge fan of reassigning values to variables, and I'd like to rewrite these.

**Coding decisions**
1) I implemented the following archtecture decisions with a mind to making the app more extensible (like adding abother page based on the same data)
    a) In my store, I've used something like an ENUM to represent the page types (latest, starred). Instaed of comparing strings, the keys on the viewModes object are used to check the active view. Ideally, I would have written the app in typescript, in which case I'd have used the ENUM type.
    b) I've made the ArticeList and Article components reusable
    c) Use of react-router
2) I implemented memo to avoid rerendering every instance of the Article component each time there is new data. Since memo only uses shallow comparison of props, I needed to include the following to get it to work properly:
    a) Wrap prop functions in useCallback, otherwise the component automatically rerenders
    b) Pass isRead as its own prop (not an attribute on the article oject) to ensure the component rerenders with the new style when a user clicks on an article
3) Use of session storage (not local storage) per brief
4) I started working on infinite scroll. The feature itself worked but pulled lots more data than I wanted on upon initial render. Would need more time to dig into it to optimize data fetching.

**Considerations for the future**
1) If the articles data starts to get very long, consider windowing the components