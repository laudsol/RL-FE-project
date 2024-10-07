import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticleIds, getArticles } from "../Services/articleApi.js";
import { SET_ARTICLE_IDS, SET_ARTICLES, ADD_PAGE } from "../Store/reducers/reducers.js";
import ArticleList from "./ArticleList.js";
import { getOrderedArticles } from "../Utils/Utils.js";

const LatestArticles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.reducers.articles);
    const articleIds = useSelector(state => state.reducers.articleIds);
    const articlesPerPage = useSelector(state => state.reducers.articlesPerPage);
    const currentPage = useSelector(state => state.reducers.currentPage);
    const orderedArticles = getOrderedArticles(articles, articleIds, currentPage, articlesPerPage);

    const getNextArticles = (ids) => {
        const startId = currentPage * articlesPerPage;
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
        if (articleIds.length == 0) {
            getArticleIds().then(ids => {
                dispatch({
                    type: SET_ARTICLE_IDS,
                    payload: ids
                });
                getNextArticles(ids)
                });
        }
    }, [dispatch]);

    return (
        <>
            <ArticleList orderedArticles={orderedArticles}></ArticleList>
            <div onClick={() => getNextArticles()}>More</div>
        </>
    )
}

export default LatestArticles;