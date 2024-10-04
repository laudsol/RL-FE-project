import axios from 'axios';

const ARTICLE_API_URL = 'https://hacker-news.firebaseio.com/v0';

const getArticle = async (id) => {
  try {
    const { data } = await axios.get(`${ARTICLE_API_URL}/item/${id}.json`);
    return data;
  } catch (error) {
    console.log('Error while getting article.');
  }
};

export const getArticles = async (ids) => {
  try {
    const articles = await Promise.all(ids.map(id => getArticle(id)));
    return articles;
  } catch (error) {
    console.log('Error while getting list of articles.');
  }
};

export const getArticleIds = async () => {
  try {
    const {data} = await axios.get(
      `${ARTICLE_API_URL}/topstories.json`
    );
    return data;
  } catch (error) {
    console.log('Error while getting list of articles.');
  }
}

