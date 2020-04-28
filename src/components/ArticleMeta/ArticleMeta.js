import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './ArticleMeta.style';

function ArticleMeta({ articleData, articleOverviewPage, className }) {
	const { createdAt, author: { username, image } } = articleData;
	const createdAtDate = new Date(createdAt).toDateString();

	return (
		<S.ArticleMetaContainer className={className}>
			<Link to={`/articleAuthorProfile/${username}`}>
				<S.ArticleMetaImageProfile src={image} />
			</Link>
			<S.ArticleMetaWrapper>
				<Link to={`/articleAuthorProfile/${username}`} style={{ textDecoration: 'none' }}>
					<S.ArticleMetaAuthorName articleOverviewPage={articleOverviewPage}>{username}</S.ArticleMetaAuthorName>
				</Link>
				<S.ArticleMetaDateCreated articleOverviewPage={articleOverviewPage}>{createdAtDate}</S.ArticleMetaDateCreated>
			</S.ArticleMetaWrapper>
		</S.ArticleMetaContainer>
	);
}

export default ArticleMeta;
