import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './ArticleMeta.style';

function ArticleMeta({ articleData, articleOverviewPage, className }) {
	const { createdAt, author: { username, image } } = articleData;
	const createdAtDate = new Date(createdAt).toDateString();

	return (
		<S.ArticleMetaContainer className={className}>
			<Link to={`/profile/${username}`}>
				<S.ImageProfile
					src={image}
					onError={(e) => (e.target.src = 'https://static.productionready.io/images/smiley-cyrus.jpg')}
				/>
			</Link>
			<S.Wrapper>
				<Link to={`/profile/${username}`} style={{ textDecoration: 'none' }}>
					<S.AuthorName articleOverviewPage={articleOverviewPage}>{username}</S.AuthorName>
				</Link>
				<S.DateCreated articleOverviewPage={articleOverviewPage}>{createdAtDate}</S.DateCreated>
			</S.Wrapper>
		</S.ArticleMetaContainer>
	);
}

export default ArticleMeta;
