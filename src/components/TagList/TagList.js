import React from 'react';
import { connect } from 'react-redux';

import { fetchArticlesByTagRequest } from 'redux/articleList/articleList.actions';
import { getTagName } from 'redux/tags/tags.actions';

import * as S from './TagList.style';

function TagList({ tagList, fetchArticlesByTagRequest, getTagName, children }) {
	const onTagClick = (tag) => {
		getTagName(tag);
		fetchArticlesByTagRequest(tag);
	};
	return (
		<S.TagListContainer>
			{children}
			{tagList.map((tag) => (
				<S.Tag to={`/`} key={tag} onClick={() => onTagClick(tag)}>
					{tag}
				</S.Tag>
			))}
		</S.TagListContainer>
	);
}
const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByTagRequest: (tag) => dispatch(fetchArticlesByTagRequest(tag)),
	getTagName: (tag) => dispatch(getTagName(tag))
});

export default connect(null, mapDispatchToProps)(TagList);
