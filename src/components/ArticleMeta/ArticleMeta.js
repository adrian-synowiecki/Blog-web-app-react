import React from 'react';

import { ArticleMetaContainer, ImageProfile, FlexWrapperCol, AuthorName, DateCreated } from './ArticleMeta.style';

import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';

function ArticleMeta({ match, articleContent, ...props }) {
	
	return (
		<ArticleMetaContainer {...props}>
			<Link to={`/articleAuthorProfile/${articleContent.author.username}`}>
				<ImageProfile src={articleContent.author.image} />
			</Link>
			<FlexWrapperCol>
				<Link
					to={`/articleAuthorProfile/${articleContent.author.username}`}
					style={{ textDecoration: 'none' }}
				>
					<AuthorName {...props}>{articleContent.author.username}</AuthorName>
				</Link>

				<DateCreated {...props}>{articleContent.createdAt}</DateCreated>
			</FlexWrapperCol>
		</ArticleMetaContainer>
	);
}

export default withRouter(ArticleMeta);
