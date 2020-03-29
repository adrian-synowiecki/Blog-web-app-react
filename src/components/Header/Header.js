import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { deleteArticleRequest } from '../../redux/article/article.actions';
import {
	HeaderContainer,
	HeaderTitle,
	HeaderText,
	HeaderWrapper,
	ArticleModify,
	EditArticle,
	DeleteArticle
} from './Header.style';

function Header({ articleData, title, text, canModify, dispatch, push, ...props }) {
	const { slug, /* title */ } = articleData || {};
	const handleDeleteArticle = () => {
	  deleteArticleRequest(slug);
		push('/');
	};
	return (
		<HeaderContainer {...props}>
			<HeaderWrapper {...props}>
				<HeaderTitle {...props}>{articleData ? articleData.title : title}</HeaderTitle>
				{canModify && (
					<ArticleModify>
						<EditArticle onClick={() => push(`/editArticle/${slug}`)}>Edit Article</EditArticle>
						<DeleteArticle onClick={handleDeleteArticle}>Delete Article</DeleteArticle>
					</ArticleModify>
				)}
				<HeaderText {...props}>{text}</HeaderText>
			</HeaderWrapper>
		</HeaderContainer>
	);
}

export default connect(null, { push })(Header);
