import React from 'react';
import styled from "styled-components";

const ItemsContainer = styled.ul`
    margin: 0;
    list-style: none;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing : border-box;
    width: 100%;
    margin-top: 10px;
`;

const Item = styled.li`    
    padding: 5px;
    display: flex;
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    align-items: center;    
`;

const ItemAnchor = styled.a`
    background-color: #cde5f7;
    border-radius: 2px;
    color: black;
    padding: 10px;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    border-left: 10px solid #337ab7;
    &:hover {
        background-color: #07163d;
        color: white;
    }   
`;

const ItemsList = ({items, onItemClickHandler, onShowDetailsHandler}) => (
    <ItemsContainer>
        {            
            items.map(item => {
                const onClickHandler = () => {
                    onItemClickHandler(items, item)
                    onShowDetailsHandler(true);
                };                
                return (
                    <Item key={item.id}>                       
                        <ItemAnchor href={'#'} onClick={() => onClickHandler()}>
                            <span>{item.label}</span>                     
                        </ItemAnchor>                        
                    </Item>
                )
            })
        }
    </ItemsContainer>
);

export default ItemsList;