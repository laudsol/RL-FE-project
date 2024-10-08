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



To Do
3) Think about time more carefully, if nums are bad it will always show "less than a minute ago"