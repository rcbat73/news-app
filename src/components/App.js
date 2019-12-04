import React, { useState } from 'react';
import styled from "styled-components";
import SearchNews from 'components/SearchNews';
import ArticleDetails from 'components/ArticleDetails';

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const App  = () => {
    const initialNewData = {hasData: false, data: {articles:[]}, details: {}};
    const [newsData, setNewsData] = useState(initialNewData);
    const [showDetails, setShowDetails] = useState(false);

    const onItemClickHandler = (items, details) => {
        const params = {
            hasData: true, 
            data: {articles: items}, 
            details: details
        };      
        setNewsData(params);
    };

    const onHideArticleHandler = () => setShowDetails(false);

    return (
        <AppContainer>            
            {
                showDetails
                ?   <ArticleDetails 
                        details={newsData.details}
                        onHideArticleHandler={onHideArticleHandler}/>
                :   <SearchNews 
                            hasInitData={newsData.hasData} 
                            initArticles={newsData.data}
                            onItemClickHandler={onItemClickHandler}
                            onShowDetailsHandler={setShowDetails}
                            showDetails={showDetails}/>
            }    
        </AppContainer>

    );
};

export default App;