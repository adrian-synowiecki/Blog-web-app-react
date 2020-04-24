import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import Pagination from 'components/Pagination/Pagination';
import TagList from 'components/TagList/TagList';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexHomeWrapper = styled.main`
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

export const PaginationExtended = styled(Pagination)`
	margin-top: 3rem; 
	margin-left: 2rem; 
`;

export const TagListExtended = styled(TagList)`
	margin: 2rem 2rem 2rem 2rem;
`;

export const NavigationWrapper = styled.div``;

export const Paragraph = styled.p`
	margin-right: auto;
	margin-top: 5rem;
`;

const activeClassName = 'active';
export const NavLinkExtended = styled(NavLink).attrs({
	activeClassName: activeClassName
})`
  color: ${({ theme }) => theme.colors.blue1};
  text-decoration: none;
/*   margin-top: 3rem; */
  margin-left: ${({ tag }) => (tag ? '14rem' : '2rem')}; 
  padding: 1.5rem;
  margin-top: 1.8rem;
  position: absolute;

  &.${activeClassName} {
	border-bottom: ${({ theme }) => `3px solid ${theme.colors.blue1}`};
	font-weight: bold;
	}
`;

export const HeadingsWrapper = styled.div`
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
