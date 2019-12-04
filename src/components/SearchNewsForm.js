import React from 'react';
import styled from 'styled-components';
import {SearchButton} from 'components/Button';

const SearchForm = styled.form`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: 600px) {
        flex-direction: row;
    }
`;

const StyledInput = styled.input`
    display: block;
    padding: 6px;
    margin: 5px 0;
    border: 1px solid grey;
    box-sizing : border-box;
    width: 100%;
    @media screen and (min-width: 600px) {
        display: inline-block;
        width: auto;
    }
`;

const SearchNewsForm = ({label, value, onChangeHandler, onClickHandler}) => (
    <SearchForm>
        <label  htmlFor='country_code'>
            {`${label}`}
            <StyledInput 
                type='text' 
                value={value} 
                id={'country_code'}
                name='country_code'
                onChange={(event) => onChangeHandler(event)}/>
        </label>
        <SearchButton label={'Search'} onClickHandler={onClickHandler}/>
    </SearchForm>
);

export default SearchNewsForm;