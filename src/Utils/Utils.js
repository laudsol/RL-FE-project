export const getOrderedArticles = (articles, articleIds, currentPage, articlesPerPage) => {
    if (Object.keys(articles).length > 0 && articleIds.length > 0) {
        return articleIds.slice(0,currentPage * articlesPerPage).map(id => {
            return articles[id];
        });    
    } else {
        return [];
    }
}

export const getTimeRecency = (articleTime, currentTime) => {
    const articleSecondsAgo = Math.round(currentTime - articleTime);
    
    if (isNaN(articleSecondsAgo) || articleSecondsAgo < 0) {
        return 'a while ago';
    }  

    const minuteSeconds = 60;
    const hourSeconds = minuteSeconds * 60;
    const daySeconds = hourSeconds * 24;
    const weekSeconds = daySeconds * 7;
    const monthSeconds = daySeconds * 30;
    const yearSeconds = daySeconds * 365;

    let timeFrameText = '';
    let timeFrameValue = 0;

    if (articleSecondsAgo / yearSeconds >= 1) {
        timeFrameText = 'year';
        timeFrameValue = Math.round(articleSecondsAgo / yearSeconds);
    } else if (articleSecondsAgo / monthSeconds >= 1) {
        timeFrameText = 'month';
        timeFrameValue = Math.round(articleSecondsAgo / monthSeconds);
    } else if (articleSecondsAgo / weekSeconds >= 1) {
        timeFrameText = 'week';
        timeFrameValue = Math.round(articleSecondsAgo / weekSeconds);
    } else if (articleSecondsAgo / daySeconds >= 1) {
        timeFrameText = 'day';
        timeFrameValue = Math.round(articleSecondsAgo / daySeconds);
    } else if (articleSecondsAgo / hourSeconds >= 1) {
        timeFrameText = 'hour';
        timeFrameValue = Math.round(articleSecondsAgo / hourSeconds);
    } else if (articleSecondsAgo / minuteSeconds >= 1) {
        timeFrameText = 'minute';
        timeFrameValue = Math.round(articleSecondsAgo / minuteSeconds);
    } else {
        return 'less than a minute ago';
    }

    if (timeFrameValue > 1) {
        return `${timeFrameValue} ${timeFrameText}s ago`
    } else {
        return `${timeFrameValue} ${timeFrameText} ago`
    }
}