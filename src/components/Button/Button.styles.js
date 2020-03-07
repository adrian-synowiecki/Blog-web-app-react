import styled from 'styled-components'
import colors from '../../utils/colors';


export const ButtonContainer = styled.button`
	border-radius: 0.5rem;
	border: none;
	text-decoration: none;
	display: flex;
	align-self: flex-end;
	background: ${colors.green};
	color: white;
	padding: 1rem 2rem;
	font-size: 1.6rem;
	margin-top: 1rem;
	text-align: center;

	&:hover {
		background-color: #3e8e41;
		opacity: 0.9;
		cursor: pointer;
	}

	:focus {
		outline: 0;
	}
`;