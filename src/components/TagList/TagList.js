import React from 'react';

import * as S from './TagList.style';

function Tags({ tagList, fetchArticlesByTagRequest, getTagName, isPopularTags, isArticlePreviewTags, flexEnd }) {
	const onTagClick = (tag) => {
		if (isPopularTags) {
			getTagName(tag);
			fetchArticlesByTagRequest(tag);
		}
	};
	return (
		<S.TagsContainer flexEnd={flexEnd} isArticlePreviewTags={isArticlePreviewTags}>
			{isPopularTags && <S.Paragraph>Popular Tags</S.Paragraph>}
			<S.TagsList>
				{tagList.length > 0 &&
					tagList.map((tag) => (
						<S.TagExtended to={`/`} key={tag} onClick={() => onTagClick(tag)} isPopularTags={isPopularTags}>
							{tag}
						</S.TagExtended>
					))}
				<p style={{ color: '#7887AB' }}>tak tak tak tnie ttakl nie tak nie</p>
			</S.TagsList>
		</S.TagsContainer>
	);
}

export default Tags;
