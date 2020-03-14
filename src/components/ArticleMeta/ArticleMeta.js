import React from 'react';

import { ArticleMetaContainer, ImageProfile, FlexWrapperCol, AuthorName, DateCreated } from './ArticleMeta.style';

import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';

function ArticleMeta({ match, articleData, ...props }) {
	
	return (
		<ArticleMetaContainer {...props}>
			<Link to={`/articleAuthorProfile/${articleData.author.username}`}>
				<ImageProfile src={articleData.author.image} />
			</Link>
			<FlexWrapperCol>
				<Link
					to={`/articleAuthorProfile/${articleData.author.username}`}
					style={{ textDecoration: 'none' }}
				>
					<AuthorName {...props}>{articleData.author.username}</AuthorName>
				</Link>

				<DateCreated {...props}>{articleData.createdAt}</DateCreated>
			</FlexWrapperCol>
		</ArticleMetaContainer>
	);
}

export default withRouter(ArticleMeta);
