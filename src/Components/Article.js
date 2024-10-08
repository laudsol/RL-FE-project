import React, { useEffect, useRef, memo } from "react";


const Article = memo((props) => {
    const {id, title, url, isStarred, isRead, score, by, kids} = props.article;
    const authorText = `${score} points by ${by}`;
    const commentsText = `${kids ? kids.length : '0'} comments`;
    const infoText = `${authorText} ${props.timeText} | ${commentsText} | ` ;
    const sourceText = ` (${url?.split("/")?.[2]}) `;
    const saveText = isStarred ? ' saved' : ' save';
    
    const renderCount = useRef(1);
    
    useEffect(() => {
        renderCount.current += 1;
      });

    return (
        <li className={isRead ? 'article read' : 'article'}>
            <div className="article-title" onClick={() => props.openArticle(url, id)}>
                {renderCount.current}
                {title}
                {sourceText && 
                    <span className="article-source">
                        {sourceText}
                    </span>
                }
            </div>
            <div className="article-meta">
                {infoText}
                <span className="article-actions" onClick={() => props.starArticle(id) }><img src={props.star} alt="star"></img>{saveText}</span>
            </div>
        </li>
    )
})

export default Article;