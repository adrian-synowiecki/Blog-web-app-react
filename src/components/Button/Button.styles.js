import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
	border-radius: 0.5rem;
	border: none;
	text-decoration: none;
	background-color: ${({ theme }) => theme.colors.blue2};
	color: white;
	padding: 1rem 2rem;
	font-size: 1.6rem;
	text-align: center;
	cursor: pointer;
	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.8;
			cursor: not-allowed;
		`};
	&:hover {
		opacity: 0.9;
	}
`;
