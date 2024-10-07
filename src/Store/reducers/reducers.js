export const SET_VIEW_MODE = 'SET_VIEW_MODE';
export const SET_DARK_MODE = 'SET_DARK_MODE';
export const SET_ARTICLE_IDS = 'SET_ARTICLE_IDS';
export const SET_ARTICLES = 'SET_ARTICLES';
export const ADD_PAGE = 'ADD_PAGE';
export const READ_ARTICLE = 'READ_ARTICLE';
export const STAR_ARTICLE ='STAR_ARTICLE';

const viewModes = Object.freeze({
  LATEST: 0,
  STARRED: 1,
});

const initialState = {
  isDarkMode: false,
  viewMode: viewModes.LATEST,
  articleIds: [],
  articles: {},
  currentPage: 0,
  articlesPerPage: 12
};


const reducers = (state = initialState, action) => {
  // Don't love this implementation... 1) reassigns a variable 2) not sure how stable this is in state
  let articles = {};
  switch (action.type) {
    case SET_VIEW_MODE:
      return {
        ...state,
        viewMode: action.payload,
      };
    case SET_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case ADD_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case SET_ARTICLE_IDS:
      return {
        ...state,
        articleIds: [...state.articleIds, ...action.payload],
      };
    case SET_ARTICLES:
        articles = {...state.articles}
        
        action.payload.forEach(article => {
          articles[article.id] = article;
          article.isStarred = false;
          article.isRead = false;
        });
        
        return {
          ...state,
          articles
        };
    case READ_ARTICLE:
      articles = {...state.articles};
      const idToRead = action.payload;
      articles[idToRead].isRead = true;

      return {
        ...state,
        articles
      };
    case STAR_ARTICLE:
      articles = {...state.articles};
      const idToStar = action.payload;
      articles[idToStar].isStarred = !articles[idToStar].isStarred;

      return {
        ...state,
        articles
      };
    default:
      return state;
  }
};

export default reducers;
