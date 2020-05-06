import styled from 'styled-components';

export const NotFoundContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const NotFoundMessage = styled.h2`color: ${({ theme }) => theme.colors.blue2};`;
