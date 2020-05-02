import React from 'react';

import * as S from './Pagination.style';

function Pagination({ articlesCount, articleList, className }) {
	const pageLinks = [];

	for (let i = 1; i <= articlesCount / articleList.length; i++) {
		pageLinks.push(
			i === 1 ? (
				<S.PageLink exact to={`/`} key={i}>
					{i}
				</S.PageLink>
			) : (
				<S.PageLink to={`/page/${i}`} key={i}>
					{i}
				</S.PageLink>
			)
		);
	}

	return <S.PaginationContainer className={className}>{pageLinks.map((pageLink) => pageLink)}</S.PaginationContainer>;
}

export default Pagination;
