import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import colors from 'utils/colors';

import { ArticlePageLinksContainer, StyledPageLink } from './Pagination.style';

function Pagination({ currentPageNumber, setCurrentPageNumber, fetchArticlesByMostRecentRequest, push }) {
	const pageLinks = [];

	useEffect(
		() => {
			window.localStorage.setItem('currentPageNumber', currentPageNumber);
			if (currentPageNumber !== 1) {
				push(`/page/${currentPageNumber}`);
			} else {
				push(`/`);
			}

			/* window.scrollTo(0, 0); */
		},
		[ currentPageNumber ]
	);

	const handlePageChange = (index) => {
		setCurrentPageNumber(index);
		const offSet = index === 1 ? 0 : (index - 1) * 20;
		window.localStorage.setItem('offSet', offSet);
		fetchArticlesByMostRecentRequest(offSet);
	};
	for (let i = 1; i <= 50; i++) {
		pageLinks.push(
			i === currentPageNumber ? (
				<StyledPageLink
					isActive={() => {
						return true;
					}}
					key={i}
			/* 		activeStyle={{ background: colors.green, color: 'white' }} */
					to
				>
					{i}
				</StyledPageLink>
			) : (
				<StyledPageLink key={i} onClick={() => handlePageChange(i)} to>
					{i}
				</StyledPageLink>
			)
		);
	}

	return <ArticlePageLinksContainer>{pageLinks.map((pageLink) => pageLink)}</ArticlePageLinksContainer>;
}

export default connect(null, { push })(Pagination);
