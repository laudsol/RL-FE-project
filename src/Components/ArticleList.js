import { useCallback } from "react";

import { useDispatch } from "react-redux";
import { READ_ARTICLE, STAR_ARTICLE } from "../Store/reducers/reducers.js";
import Article  from "./Article.js";
import { getTimeRecency } from "../Utils/Utils.js";
import emtpy_star from "../Assets/empty_star.svg"
import orange_star from "../Assets/orange_star.svg"

const ArticleList = (props) => {
    const dispatch = useDispatch();
    const currentTime = (new Date).getTime() / 1000;

    const openArticle = useCallback((url, id) => {
        window.open(url, '_blank').focus();

        dispatch({
            type: READ_ARTICLE,
            payload: id
        });
    }, []);

    const starArticle = useCallback((id) => {
        dispatch({
            type: STAR_ARTICLE,
            payload: id
        });
    }, []);

    const getStar = (isStarred) => {
        return isStarred ? orange_star : emtpy_star
    }

    return (
        <div className="article-list">
            <ol>
                {props.orderedArticles.length > 0 && props.orderedArticles.map(article => {
                    return (
                        <Article 
                            key={article.id}
                            article={article}
                            timeText={getTimeRecency(article.time, currentTime)}
                            openArticle={openArticle}
                            starArticle={starArticle}
                            star={getStar(article.isStarred)}
                        ></Article>
                    )}
                )}
            </ol>
        </div>
    )
}

export default ArticleList;

