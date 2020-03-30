/* import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { deleteArticleRequest } from '../../redux/article/article.actions';

import * as S from './Header.style';

function Header({ articleData, title, text, canModify, dispatch, push, ...props }) {
	const { slug title } = articleData || {};
	const handleDeleteArticle = () => {
		deleteArticleRequest(slug);
		push('/');
	};
	return (
		<S.HeaderContainer {...props}>
			<S.HeaderWrapper {...props}>
				<S.HeaderTitle {...props}>{articleData ? articleData.title : title}</S.HeaderTitle>
				{canModify && (
					<S.ArticleModify>
						<S.EditArticle onClick={() => push(`/editArticle/${slug}`)}>Edit Article</S.EditArticle>
						<S.DeleteArticle onClick={handleDeleteArticle}>Delete Article</S.DeleteArticle>
					</S.ArticleModify>
				)}
				<S.HeaderText {...props}>{text}</S.HeaderText>
			</S.HeaderWrapper>
		</S.HeaderContainer>
	);
}

export default connect(null, { push })(Header);
 */

import React from 'react';

import * as S from './Header.style';

function Header({ children, ...props }) {
	return <S.HeaderContainer {...props}>{children}</S.HeaderContainer>;
}

export default Header;
