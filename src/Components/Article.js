const Article = (props) => {
    const {id, title, url, isStarred, isRead, score, by, kids} = props.article;

    const authorText = `${score} points by ${by}`;
    const commentsText = `${kids && kids.length} comments`;
    const infoText = `${authorText} ${props.timeText} | ${commentsText} | ` 
    const sourceText = ` (${url?.split("/")?.[2]}) `; // stolen from a different project ;)
    const saveText = isStarred ? ' saved' : ' save';

    return (
        <li className={isRead ? 'article read' : 'article'}>
            <div className="article-title" onClick={() => props.openArticle(url, id)}>
                {title}
                {sourceText && 
                    <span className="article-source">
                        {sourceText}
                    </span>
                }
            </div>
            <div className="article-meta">
                {infoText}
                <span className="article-actions" onClick={() => props.starArticle(id) }><img src={props.star}></img>{saveText}</span>
            </div>
        </li>
    )
}

export default Article;