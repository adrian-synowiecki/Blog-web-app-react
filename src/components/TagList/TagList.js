import React from 'react';
import { connect } from 'react-redux';

import { fetchArticlesByTagRequest } from 'redux/articleList/articleList.actions';
import { getTagName } from 'redux/tags/tags.actions';

import * as S from './TagList.style';

function Tags({ tagList, fetchArticlesByTagRequest, getTagName, className, children }) {
	const onTagClick = (tag) => {
		getTagName(tag);
		fetchArticlesByTagRequest(tag);
	};
	return (
		<S.TagListContainer className={className}>
			{children}
			<S.TagList>
				{tagList.length > 0 &&
					tagList.map((tag) => (
						<S.TagExtended to={`/`} key={tag} onClick={() => onTagClick(tag)}>
							{tag}
						</S.TagExtended>
					))}
			</S.TagList>
		</S.TagListContainer>
	);
}
const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByTagRequest: (tag) => dispatch(fetchArticlesByTagRequest(tag)),
	getTagName: (tag) => dispatch(getTagName(tag))
});

export default connect(null, mapDispatchToProps)(Tags);
