import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './ArticleMeta.style';

function ArticleMeta({  articleData, articleOverviewPage, className }) {
	const { createdAt, author: { username, image } } = articleData;
	return (
		<S.ArticleMetaContainer className={className}>
			<Link to={`/articleAuthorProfile/${username}`}>
				<S.ImageProfile src={image} />
			</Link>
			<S.FlexWrapperCol>
				<Link to={`/articleAuthorProfile/${username}`} style={{ textDecoration: 'none' }}>
					<S.AuthorName articleOverviewPage={articleOverviewPage}>{username}</S.AuthorName>
				</Link>
				<S.DateCreated articleOverviewPage={articleOverviewPage}>{createdAt}</S.DateCreated>
			</S.FlexWrapperCol>
		</S.ArticleMetaContainer>
	);
}

export default ArticleMeta;
