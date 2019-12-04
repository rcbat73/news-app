import React from 'react';
import styled from 'styled-components';

const common = `
	color: white;
	border: none;
	background-color: #337ab7;
`;

const StyledButton = styled.button`
	${common}
	padding: 7px 10px;
	margin-top: 10px;
	width: 100%;
	&:hover {
		background-color: #2d6ba1;
		color: white;
	}
	@media screen and (min-width: 600px) {
        width: auto;
		margin-top: 0px;
    }
`;

const StyledCloseButton = styled.button`
	${common}
	border-radius: 50%;
	&:hover {
		background-color: #2d6ba1;
		color: white;
	}
`;

const CloseButtonContent = styled.span`
	font-size: 1.5em;
`;

export const SearchButton = ({label, onClickHandler}) => (
	<StyledButton 
		type='submit'
		onClick={(event) => onClickHandler(event)}>{label}</StyledButton>
);

export const CloseButton = ({label, onClickHandler}) => (
	<StyledCloseButton
		type='button'
		aria-label={label}
		onClick={(event) => onClickHandler(event)}>
		<CloseButtonContent aria-hidden="true">&times;</CloseButtonContent>
	</StyledCloseButton>
);