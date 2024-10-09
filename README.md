Hacker News API Docs: https://github.com/HackerNews/API

Thoughts on State:
1) Page types should be an ENUM. Strings are bad practice. Boolean (isLatest vs !isLatest) would complicate thigns if we wanted to add additional views
2) Use redux-persist to avoid the store being wiped every time the route changes


Components
1) Reusability is important, so artcle and articleList are agnostic 
2) In current context, a bit heavy to have two different components for Latest and Starred, but this will make adding more page types (maybe a "trending" page) easier in future
3) Question of where all the logic should live. Redundant to have starred and save in both parent components, should keeping these in ArticleList. 
4) Starred page - show by when it was starred? Maybe double sort: first show unread, then starred. Add button to clear all starred.
5) Put Article List into OL / LI elements
6) Cut off text after X characters
7) Add button to mark unread?? Or mark all unread?
8) useCallback allows functions to be passed as props for purposes of memoization. Also pass article.isRead as a direct prop to trigger rerender when changed.



To Do
1) Time Recency function has tradeofs. Can run it every time something changes, but this produces lots of unnecessary computations, and doesn't change the display that much. On the other hand, we dont want the timestamps to be too stale. Change the logic so it only runs once per hour...


Testing
1) Utils functions, especailly time
2) Integration tests for services, and maybe for components. Want to check how it handles failures
3) Might want to test reducers
4) Want some kind of way to test if the memoization is going to stop working