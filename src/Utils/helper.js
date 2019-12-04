import { ARTICLE_QTY, INITIAL_QUERY, API_KEY} from 'Utils/constants';

export const addIdentifier = (data) => {
    const rawArticles = data && data.articles
        ? data.articles.slice(0, ARTICLE_QTY) 
        : [];    
    
    const articles = rawArticles.map((article, idx) => {
        return {
            id: idx,
            label: `${article.title.split(' ').slice(0, 20).join(' ')}...`,
            author: article.author,
            content: article.content,
            description: article.description,
            publishedAt: article.publishedAt,
            source: article.source.name,
            title: article.title,
            url: article.url,
            urlToImage: article.urlToImage
        };
    });
    return articles;
};

export const makeUrl = (url, text, hasApiKey) => {
    if(!hasApiKey){
        return url;
    }
    return `${url}${encodeURIComponent(text || INITIAL_QUERY)}${API_KEY}`;
};