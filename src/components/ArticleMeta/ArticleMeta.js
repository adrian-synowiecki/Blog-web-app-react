import React from 'react';
import { Link } from 'react-router-dom';

import { ArticleMetaContainer, ImageProfile, FlexWrapperCol, AuthorName, DateCreated } from './ArticleMeta.style';

function ArticleMeta({ match, articleData, ...props }) {
	const { createdAt, author: { username, image } } = articleData;
	return (
		<ArticleMetaContainer {...props}>
			<Link to={`/articleAuthorProfile/${username}`}>
				<ImageProfile src={image} />
			</Link>
			<FlexWrapperCol>
				<Link to={`/articleAuthorProfile/${username}`} style={{ textDecoration: 'none' }}>
					<AuthorName {...props}>{username}</AuthorName>
				</Link>

				<DateCreated {...props}>{createdAt}</DateCreated>
			</FlexWrapperCol>
		</ArticleMetaContainer>
	);
}

export default ArticleMeta;
