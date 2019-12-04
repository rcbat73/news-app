import React, { Fragment, useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import SearchNewsForm from 'components/SearchNewsForm';
import ItemsList from 'components/ItemsList';
import { useFetch } from 'Utils/httpRequest'
import { addIdentifier } from 'Utils/helper';
import styled from 'styled-components';
import { NEWS_ENDPOINT, COUNTRY_LABEL, NO_RESULTS } from 'Utils/constants';

const common = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.header`
    ${common};
    padding-top: 10px;
`;

const MsgContainer = styled.div`
    padding: 20px;
    border-radius: 3px;
    width: 80%;
    color: ${props => props.color};
    background-color: ${props => props.bkcolor};
    border: 1px solid ${props => props.bdrcolor};
`;

const NewsContainer = styled.main`
    ${common};
    width: 100%;
    @media screen and (min-width: 600px) {
        width: 80%;
    }
`;

const SpinnerContainer = styled.div`
    ${common};
    width: 100px;
    height: 100px;
`;

const ResultContainer = styled.div`
    ${common};
    padding-top: 20px;    
`;

const SearchNews = ({hasInitData, initArticles, onItemClickHandler, onShowDetailsHandler, showDetails}) => {
    const { 
        isLoading, 
        error, 
        query, 
        setQuery, 
        setSearch,
        hasData, 
        setHasData, 
        data 
    } = useFetch(hasInitData, initArticles, NEWS_ENDPOINT, true);

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(!showDetails && !hasData ? addIdentifier(data) : data.articles);
    }, [hasData, data, showDetails]);

    const onChangeHandler = (event) => {
        setQuery(event.target.value);
    };

    const onClickHandler = (event) => {
        event.preventDefault();
        onItemClickHandler({hasData: false, data: {articles: []}, details: {}})
        setHasData(false);
        setSearch(query);
    };
      
    return (
        <Fragment>            
            <Header>                
                <SearchNewsForm 
                    label={COUNTRY_LABEL} 
                    value={query} 
                    onChangeHandler={onChangeHandler}
                    onClickHandler={onClickHandler}/>                    
            </Header>
            <NewsContainer>                
                {
                    isLoading
                    ? <SpinnerContainer>
                        <ReactLoading 
                        type={'spin'} 
                        color={'black'} 
                        height={'50px'} 
                        width={'50px'} />
                      </SpinnerContainer>
                    : <ResultContainer>
                        {
                            error.hasError
                            && 
                            <MsgContainer color={'#721c24'} bkcolor={'#f8d7da'} bdrcolor={'#f5c6cb'}>
                                {error.message}
                            </MsgContainer>
                        }
                        {
                            articles.length && !error.hasError
                            ? <ItemsList 
                                items={articles} 
                                onItemClickHandler={onItemClickHandler}
                                onShowDetailsHandler={onShowDetailsHandler}/>
                            : !error.hasError && <MsgContainer 
                                color={'#0c5460'} 
                                bkcolor={'#d1ecf1'} 
                                bdrcolor={'#bee5eb'}>
                                {NO_RESULTS}
                            </MsgContainer>
                        }
                      </ResultContainer>                       
                }
            </NewsContainer>
        </Fragment>
    );
}

export default SearchNews;


