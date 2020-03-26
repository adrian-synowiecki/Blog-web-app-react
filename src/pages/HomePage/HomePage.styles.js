import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import colors from '../../utils/colors';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Header = styled.header`
	height: 17rem;
	box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, .3), inset 0 -8px 8px -8px rgba(0, 0, 0, .3);
	text-shadow: 0 0 black;
	background: #5cb85c;
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
`;

export const Row = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	min-height: 19rem;

	@media (min-width: 770px) {
		align-items: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const NavigationWrapper = styled.div`display: flex;`;

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

export const NavLinkExtended = styled(({ tag, ...props }) => <NavLink {...props} />)`
  color: ${colors.green};
  text-decoration: none;
  margin-top: 3rem;
  display: flex;
  margin-left: ${(props) => props.tag && '3rem'}; 
  padding: 1rem;
`;

/* 	width: 100%;
	@media (min-width: 770px) {
		width: 70%;
	} */
