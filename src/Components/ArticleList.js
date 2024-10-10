import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { READ_ARTICLE, STAR_ARTICLE } from "../Store/reducers/reducers.js";
import Article  from "./Article.js";
import { getTimeRecency } from "../Utils/Utils.js";
import emtpy_star from "../Assets/empty_star.svg"
import dark_star from "../Assets/dark_star.svg"
import orange_star from "../Assets/orange_star.svg"

const ArticleList = (props) => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.reducers.isDarkMode);
    const currentTime = (new Date()).getTime() / 1000;

    const openArticle = useCallback((url, id) => {
        window.open(url, '_blank').focus();

        dispatch({
            type: READ_ARTICLE,
            payload: id
        });
    }, [dispatch]);

    const starArticle = useCallback((id) => {
        dispatch({
            type: STAR_ARTICLE,
            payload: id
        });
    }, [dispatch]);

    const getStar = (isStarred) => {
        if (isStarred) {
            return orange_star;
        } else if (isDarkMode) {
            return dark_star;
        } else {
            return emtpy_star;
        }
    }

    return (
        <div className="article-list">
            <ol>
                {props.orderedArticles.length > 0 && props.orderedArticles.map(article => {
                    return (
                        article &&
                        <Article 
                            key={article.id}
                            article={article}
                            timeText={getTimeRecency(article.time, currentTime)}
                            openArticle={openArticle}
                            starArticle={starArticle}
                            star={getStar(article.isStarred)}
                            isRead={article.isRead}
                        ></Article>
                    )}
                )}
            </ol>
        </div>
    )
}

export default ArticleList;

