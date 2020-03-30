import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './ArticleMeta.style'

function ArticleMeta({ match, articleData, ...props }) {
	const { createdAt, author: { username, image } } = articleData;
	return (
		<S.ArticleMetaContainer {...props}>
			<Link to={`/articleAuthorProfile/${username}`}>
				<S.ImageProfile src={image} />
			</Link>
			<S.FlexWrapperCol>
				<Link to={`/articleAuthorProfile/${username}`} style={{ textDecoration: 'none' }}>
					<S.AuthorName {...props}>{username}</S.AuthorName>
				</Link>

				<S.DateCreated {...props}>{createdAt}</S.DateCreated>
			</S.FlexWrapperCol>
		</S.ArticleMetaContainer>
	);
}

export default ArticleMeta;
