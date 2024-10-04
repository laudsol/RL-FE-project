import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticleIds, getArticles } from "../Services/articleApi.js";
import { SET_ARTICLE_IDS, SET_ARTICLES, ADD_PAGE } from "../Store/reducers/reducers.js";
import Article  from "./Article.js";

const ArticleList = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.reducers.articles);
    const articleArr = articles ? Object.values(articles) : [];
    const articlesPerPage = useSelector(state => state.reducers.articlesPerPage);
    const currentPage = useSelector(state => state.reducers.currentPage);
    const articleIds = useSelector(state => state.reducers.articleIds);

    const getNextArticles = (ids) => {
        const startId = (currentPage - 1) * articlesPerPage;
        const idsToUse = ids && ids.length > 0 ? ids : articleIds;
        const nextArticleIds = idsToUse.slice(startId, startId + articlesPerPage);
        getArticles(nextArticleIds).then(articleData => {
            dispatch({
                type: SET_ARTICLES,
                payload: articleData
            });
            dispatch({
                type: ADD_PAGE
            });
        });
    }

    useEffect(() => {
        getArticleIds().then(ids => {
            dispatch({
                type: SET_ARTICLE_IDS,
                payload: ids
            });
            getNextArticles(ids)
            });
    }, [dispatch]);
    

    return (
        <>
            {articleArr.map(article => <Article key={article.id} article={article}></Article>)}
            <div onClick={() => getNextArticles()}>More</div>
        </>
    )
}

export default ArticleList;