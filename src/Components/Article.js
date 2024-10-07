const Article = (props) => {
    const {id, title, url, isStarred, isRead} = props.article;
    return (
        <>
            <div onClick={() => props.openArticle(url, id)}>{title}</div>
            <div onClick={() => props.starArticle(id)}>Saved: {isStarred ? 'Y' : 'N'}</div>
            <div>Read: {isRead ? 'Y' : 'N'}</div>
        </>
    )
}

export default Article;