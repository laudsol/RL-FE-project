import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticleIds, getArticles } from "../Services/articleApi.js";
import { SET_ARTICLE_IDS, SET_ARTICLES, ADD_PAGE, READ_ARTICLE, STAR_ARTICLE } from "../Store/reducers/reducers.js";
import Article  from "./Article.js";

const ArticleList = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.reducers.articles);
    const articleIds = useSelector(state => state.reducers.articleIds);
    const articlesPerPage = useSelector(state => state.reducers.articlesPerPage);
    const currentPage = useSelector(state => state.reducers.currentPage);
    
    const getOrderedArticles = () => {
        if (Object.keys(articles).length > 0 && articleIds.length > 0) {
            return articleIds.slice(0,currentPage * articlesPerPage).map(id => {
                return articles[id];
            });    
        } else {
            return [];
        }
    }

    const orderedArticles = getOrderedArticles();

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
        getArticleIds().then(ids => {
            dispatch({
                type: SET_ARTICLE_IDS,
                payload: ids
            });
            getNextArticles(ids)
            });
    }, [dispatch]);

    const openArticle = (url, id) => {
        window.open(url, '_blank').focus();

        dispatch({
            type: READ_ARTICLE,
            payload: id
        });
    }

    const starArticle = (id) => {
        dispatch({
            type: STAR_ARTICLE,
            payload: id
        });
    }

    return (
        <>
            {orderedArticles.length > 0 && orderedArticles.map(article =>
                <Article 
                    key={article.id}
                    article={article}
                    openArticle={openArticle}
                    starArticle={starArticle}
                ></Article>)}
            <div onClick={() => getNextArticles()}>More</div>
        </>
    )
}

export default ArticleList;