import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticleIds, getArticles } from "../Services/articleApi.js";
import { SET_ARTICLE_IDS, SET_ARTICLES } from "../Store/reducers/combinedReducers";


const ArticleList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getArticleIds().then(articleIds => {
            dispatch({
                type: SET_ARTICLE_IDS,
                payload: articleIds
            });
            const nextTenArticles = articleIds.splice(0, 10);
            getArticles(nextTenArticles).then(articles => {
                dispatch({
                    type: SET_ARTICLES,
                    payload: articles
                });
            })
        });
    }, []);
    
    return (
        <div>Article Lists</div>
    )
}

export default ArticleList;