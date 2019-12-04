import React from 'react';
import styled from 'styled-components';
import {SearchButton} from 'components/Button';

const common = `
    margin-top: 8px;
`;

const StyleLabel = styled.label`
    ${common};
`;

const StyledInput = styled.input`
    ${common};
    display: block;
    padding: 6px;
    border: 1px solid grey;
    box-sizing : border-box;
    width: 100%;
    @media screen and (min-width: 600px) {
        display: inline-block;
        width: auto;
    }
`;

const SearchNewsForm = ({label, value, onChangeHandler, onClickHandler}) => (
    <form>
        <StyleLabel  htmlFor='country_code'>
            {`${label}`}
            <StyledInput 
                type='text' 
                value={value} 
                id={'country_code'}
                name='country_code'
                onChange={(event) => onChangeHandler(event)}/>
        </StyleLabel>
        <SearchButton label={'Search'} onClickHandler={onClickHandler}/>
    </form>
);

export default SearchNewsForm;