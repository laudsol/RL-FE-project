import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticleIds, getArticles } from "../Services/articleApi.js";
import { SET_ARTICLE_IDS, SET_ARTICLES, ADD_PAGE } from "../Store/reducers/reducers.js";
import ArticleList from "./ArticleList.js";
import { getOrderedArticles } from "../Utils/Utils.js";
import { throttle } from 'lodash';


const LatestArticles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.reducers.articles);
    const articleIds = useSelector(state => state.reducers.articleIds);
    const articlesPerPage = useSelector(state => state.reducers.articlesPerPage);
    const currentPage = useSelector(state => state.reducers.currentPage);
    const orderedArticles = getOrderedArticles(articles, articleIds, currentPage, articlesPerPage);
    const observerRef = useRef(null);

    const getNextArticles = useCallback((ids => {
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
    }), [dispatch, articleIds, articlesPerPage, currentPage]);

    useEffect(() => {
        if (articleIds.length === 0) {
            getArticleIds().then(ids => {
                dispatch({
                    type: SET_ARTICLE_IDS,
                    payload: ids
                });
                getNextArticles(ids);
            });
        }
    }, [dispatch, articleIds.length, getNextArticles]);

    const throttledGetNextArticles = useCallback(throttle(() => {
        getNextArticles();
      }, 2000), [getNextArticles]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const target = entries[0];
            if (target.isIntersecting) {
                throttledGetNextArticles();
            }
        }, {threshhold: 0.1});

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [getNextArticles, articleIds.length]);

    return (
        <div className='articles-container'>
            {orderedArticles.length > 0 && <ArticleList orderedArticles={orderedArticles} />}
            <div ref={observerRef} style={{ height: '20px', margin: '20px' }}></div>
        </div>
    );
};

export default LatestArticles;
