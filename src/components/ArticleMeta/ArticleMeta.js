import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './ArticleMeta.style';

function ArticleMeta({ articleData, articleOverviewPage, className }) {
	const { createdAt, author: { username, image } } = articleData;
	const createdAtDate = new Date(createdAt).toDateString();

	return (
		<S.ArticleMetaContainer className={className}>
			<Link to={`/articleAuthorProfile/${username}`}>
				<S.ImageProfile src={image} />
			</Link>
			<S.FlexWrapper>
				<Link to={`/articleAuthorProfile/${username}`} style={{ textDecoration: 'none' }}>
					<S.AuthorName articleOverviewPage={articleOverviewPage}>{username}</S.AuthorName>
				</Link>
				<S.DateCreated articleOverviewPage={articleOverviewPage}>{createdAtDate}</S.DateCreated>
			</S.FlexWrapper>
		</S.ArticleMetaContainer>
	);
}

export default ArticleMeta;
