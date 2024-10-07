const Article = (props) => {
    const {id, title, url, isStarred, isRead, score, by, kids} = props.article;

    const authorText = `${score} points by ${by}`;
    const commentsText = `${kids && kids.length} comments`;
    const infoText = `${authorText} ${props.timeText} | ${commentsText}`

    return (
        <li className="article">
            <div className="article-title" onClick={() => props.openArticle(url, id)}>{title}</div>
            <div className="article-meta">{infoText}</div>
            <div className="article-actions" onClick={() => props.starArticle(id)}>Saved: {isStarred ? 'Y' : 'N'}</div>
            <div className="article-meta">Read: {isRead ? 'Y' : 'N'}</div>
        </li>
    )
}

export default Article;