import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import colors from '../../utils/colors';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

/* export const Header = styled.header`
	height: 17rem;
	box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, .3), inset 0 -8px 8px -8px rgba(0, 0, 0, .3);
	text-shadow: 0 0 black;
	background: #2E4272;
	background:#175c9c;
`;

export const HeadingsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
`;

export const Heading = styled.h1`
	font-size: 5rem;
	text-shadow: 0 1px 3px rgba(0, 0, 0, .3);
	margin-left: '1.7rem';
`;

export const SubHeading = styled.p`
	font-weight: 300;
	letter-spacing: 0.1rem;
	font-size: 2rem;
	margin-left: 2rem;
	margin-top: -2.5rem;
`; */

export const Row = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	min-height: 19rem;
	margin-top: 7rem;

	@media (min-width: 770px) {
		align-items: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const NavigationWrapper = styled.div`

`;

export const Paragraph = styled.p`
	margin-right: auto;
	margin-top: 5rem;
`;

/* export const NavLink = styled(NavLink)`
    color: ${colors.green};
    text-decoration: none;
	align-self: flex-start;
	margin-top: 3rem;
 	display: flex;
	 margin-left: ${props => props.tag && '3rem'} 
`; */

const activeClassName = 'active';
export const NavLinkExtended = styled(NavLink).attrs({
	activeClassName: activeClassName
})`
  color: ${({ theme }) => theme.colors.blue1};
  text-decoration: none;
  margin-top: 3rem;
  margin-left: ${({ tag }) => tag ? '14rem' : '1rem'}; 
  padding: 1.5rem;
  margin-top: 1.8rem;
  position: absolute;

  &.${activeClassName} {
	border-bottom: ${({ theme }) => `2px solid ${theme.colors.blue1}`};
	font-weight: bold;
	}
`;

/* 	width: 100%;
	@media (min-width: 770px) {
		width: 70%;
	} */

export const HeadingsWrapper = styled.div`
	margin-top: -1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Heading = styled.h1`
	color: #edf5ef;
	font-size: 5rem;
	text-shadow: 0 1px 3px rgba(0, 0, 0, .9);
	letter-spacing: 0.1rem;
`;

export const SubHeading = styled.h2`
	color: #edf5ef;
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 0.1rem;
	margin-top: -2rem;
	text-shadow: 0 1px 3px rgba(0, 0, 0, .9);
`;

export const PopularTags = styled.p`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.blue1};
	letter-spacing: 0.1rem;
`;