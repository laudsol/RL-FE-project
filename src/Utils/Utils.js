export const getOrderedArticles = (articles, articleIds, currentPage, articlesPerPage) => {
    if (Object.keys(articles).length > 0 && articleIds.length > 0) {
        return articleIds.slice(0,currentPage * articlesPerPage).map(id => {
            return articles[id];
        });    
    } else {
        return [];
    }
}