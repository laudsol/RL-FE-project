import { useDispatch } from "react-redux";
import { READ_ARTICLE, STAR_ARTICLE } from "../Store/reducers/reducers.js";
import Article  from "./Article.js";

const ArticleList = (props) => {
    const dispatch = useDispatch();

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
            {props.orderedArticles.length > 0 && props.orderedArticles.map(article =>
                <Article 
                    key={article.id}
                    article={article}
                    openArticle={openArticle}
                    starArticle={starArticle}
                ></Article>)}
        </>
    )
}

export default ArticleList;