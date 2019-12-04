import React, { useState } from 'react';
import styled from "styled-components";
import { CloseButton } from 'components/Button';
import ReactLoading from 'react-loading';
import { CLOSE_LABEL } from 'Utils/constants';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding: 20px;
    @media screen and (min-width: 600px) {
        padding: 20px 100px;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    text-align: right;
`;

const ArticleContainer = styled.div`
    background-color: #fbfbf8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 5px solid #337ab7;
    border-bottom: 1px solid #337ab7;
    flex-direction: column;
    padding: 10px;    
    /*@media screen and (min-width: 600px) {
        padding: 20px 100px;
    }*/
`;

const Article = styled.article`    
    padding: 10px;
    /*border-top: 5px solid #337ab7;
    border-bottom: 1px solid #337ab7;*/
    box-sizing : border-box;
    width: 100%;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
`;

const Content = styled.p`
    margin: 0;
`;

const ImgContainer = styled.div`    
    width: 100%;
    height: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ArticleImg = styled.img`
    display: ${(props) => props.display};
`;

const ArticleDetails = ({details, onHideArticleHandler}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <MainContainer>
            <ArticleContainer>
                <ButtonContainer>
                    <CloseButton label={CLOSE_LABEL} onClickHandler={onHideArticleHandler}/>
                </ButtonContainer>
                <Article>
                    <h1>{details.title}</h1>
                    <span>{`${details.source} | `}</span>
                    <span>{details.author && `${details.author} | `}</span>
                    <span>{`${new Date(details.publishedAt).toString().substring(0, 24)}`}</span>
                    <ImgContainer>
                    {
                        details.urlToImage 
                        && <ArticleImg
                            display={isLoaded ? 'inline' : 'none'}
                            src={details.urlToImage} 
                            alt={details.title.split(' ', 2).join(' ')} 
                            width={'100%'} 
                            height={'100%'}
                            onLoad={() => setIsLoaded(true)}/>
                    }
                    {
                        !isLoaded && details.urlToImage
                        && <ReactLoading 
                            type={'spin'} 
                            color={'black'} 
                            height={'50px'} 
                            width={'50px'} />
                    }
                    </ImgContainer>                
                    <ContentContainer>
                        <Content>{details.content || details.description}</Content>
                        <a href={details.url}>Full article...</a>
                    </ContentContainer>
                            
                </Article>
            </ArticleContainer>
        </MainContainer>
)};

export default ArticleDetails;

 