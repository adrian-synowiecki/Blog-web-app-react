import React from 'react';
import { connect } from 'react-redux';

import { fetchArticlesByTagRequest, unloadArticles } from 'redux/articleList/articleList.actions';

import * as S from './TagList.style';

function TagList({ tagList, children }) {
	return (
		<S.TagListContainer>
			{children}
			{tagList.map((tag) => (
				<li>
					<S.Tag to={`/tag/${tag}`} key={tag}>
						{tag}
					</S.Tag>
				</li>
			))}
		</S.TagListContainer>
	);
}
const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByTagRequest: (tag) => dispatch(fetchArticlesByTagRequest(tag)),
	unloadArticles: () => dispatch(unloadArticles())
});

export default connect(null, mapDispatchToProps)(TagList);
