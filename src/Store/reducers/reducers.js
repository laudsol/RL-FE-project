export const SET_VIEW_MODE = 'SET_VIEW_MODE';
export const SET_DARK_MODE = 'SET_DARK_MODE';
export const SET_ARTICLE_IDS = 'SET_ARTICLE_IDS';
export const SET_ARTICLES = 'SET_ARTICLES';
export const ADD_PAGE = 'ADD_PAGE';

const viewModes = Object.freeze({
  LATEST: 0,
  STARRED: 1,
});

const initialState = {
  isDarkMode: false,
  viewMode: viewModes.LATEST,
  articleIds: [],
  articles: {},
  currentPage: 1,
  articlesPerPage: 12
};


const reducers = (state = initialState, action) => {
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
        const articles = {...state.articles}
        
        action.payload.forEach(article => {
          articles[article.id] = article;
          article.isStarred = false;
          article.isRead = false;
        });
        
        return {
          ...state,
          articles
        };
    default:
      return state;
  }
};

export default reducers;
