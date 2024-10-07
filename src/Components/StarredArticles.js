import { useSelector } from "react-redux";
import ArticleList from "./ArticleList.js";
import { getOrderedArticles } from "../Utils/Utils.js";

const StarredArticles = () => {
    const articles = useSelector(state => state.reducers.articles);
    const articleIds = useSelector(state => state.reducers.articleIds);
    const articlesPerPage = useSelector(state => state.reducers.articlesPerPage);
    const currentPage = useSelector(state => state.reducers.currentPage);

    const orderedStarredArticles = getOrderedArticles(articles, articleIds, currentPage, articlesPerPage).filter(article => {
        return article.isStarred;
    });

    return (
        <>
            <ArticleList orderedArticles={orderedStarredArticles}></ArticleList>
        </>
    )
}

export default StarredArticles;