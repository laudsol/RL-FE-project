import { useDispatch } from "react-redux";
import { READ_ARTICLE, STAR_ARTICLE } from "../Store/reducers/reducers.js";
import Article  from "./Article.js";
import { getTimeRecency } from "../Utils/Utils.js";

const ArticleList = (props) => {
    const dispatch = useDispatch();
    const currentTime = (new Date).getTime() / 1000;

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
        <div className="article-list">
            <ol>
                {props.orderedArticles.length > 0 && props.orderedArticles.map(article => 
                    <Article 
                        key={article.id}
                        article={article}
                        timeText={getTimeRecency(article.time, currentTime)}
                        openArticle={openArticle}
                        starArticle={starArticle}
                    ></Article>
                )}
            </ol>
        </div>
    )
}

export default ArticleList;