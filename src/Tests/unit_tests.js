import { getTimeRecency, getOrderedArticles } from '../Utils/Utils';

export const getTimeRecencyTest = () => {
    const articleTime = 0;
    let currentTime = 50;
    
    test('getTimeRecency returns correct time difference', () => {
       
       expect(getTimeRecency(articleTime, currentTime)).toBe('less than a minute ago');
     
       currentTime = 3000;
       expect(getTimeRecency(articleTime, currentTime)).toBe('50 minutes ago');
     
       currentTime = 4500;
       expect(getTimeRecency(articleTime, currentTime)).toBe('1 hour ago');
     
       currentTime = 6000;
       expect(getTimeRecency(articleTime, currentTime)).toBe('2 hours ago');
     
       currentTime = 86500;
       expect(getTimeRecency(articleTime, currentTime)).toBe('1 day ago');
     
       currentTime = 865000;
       expect(getTimeRecency(articleTime, currentTime)).toBe('1 week ago');
     
       currentTime = 6024000;
       expect(getTimeRecency(articleTime, currentTime)).toBe('2 months ago');
     
       currentTime = 36288000;
       expect(getTimeRecency(articleTime, currentTime)).toBe('1 year ago');
     
       currentTime = -100;
       expect(getTimeRecency(articleTime, currentTime)).toBe('a while ago');
     
    });
    
    test('getTimeRecency handles a non number or negative value', () => {
         currentTime = 'hello';
         expect(getTimeRecency(articleTime, currentTime)).toBe('a while ago');
    });
}

export const getOrderedArticlesTest = () => {
    let articles = {
        11: {id: 11},
        33: {id: 33},
        55: {id: 55}
    }
    let articleIds = [33, 11, 55, 9, 2, 90, 1];
    let currentPage = 1;
    let articlesPerPage = 3;
    
    test('getOrderedArticles returns ordered articles correctly', () => {
        const resultArr = getOrderedArticles(articles, articleIds, currentPage, articlesPerPage)
        const expectArr = [{id: 33}, {id: 11}, {id: 55}];

        resultArr.forEach((el, i) => {
            expect(el.id === expectArr[i]);
        });        
    });

    test('getOrderedArticles returns an empty array if missing ids or articles', () => {
        articles = {}
        let resultArr = getOrderedArticles(articles, articleIds, currentPage, articlesPerPage)
        let expectArr = [];

        resultArr.forEach((el, i) => {
            expect(el.id === expectArr[i]);
        });   
        
        articles = {
            11: {id: 11},
            33: {id: 33},
            55: {id: 55}
        }
        articleIds = []
        resultArr = getOrderedArticles(articles, articleIds, currentPage, articlesPerPage)
        expectArr = [];

        resultArr.forEach((el, i) => {
            expect(el.id === expectArr[i]);
        });   
    });
}
  