import React from 'react';

import { TagsContainer, StyledTag, Paragraph, TagsList } from './TagList.style';

function Tags({ tagList, fetchArticlesByTagRequest, getTagName, isPopularTags, isArticlePreviewTags, flexEnd }) {
	const onTagClick = (tag) => {
		if (isPopularTags) {
			getTagName(tag);
			fetchArticlesByTagRequest(tag);
		}
	};
	return (
		<TagsContainer flexEnd={flexEnd} isArticlePreviewTags={isArticlePreviewTags}>
			{isPopularTags && <Paragraph>Popular Tags</Paragraph>}
			<TagsList>
				{tagList.length > 0 &&
					tagList.map((tag) => (
						<StyledTag to={`/`} key={tag} onClick={() => onTagClick(tag)} isPopularTags={isPopularTags}>
							{tag}
						</StyledTag>
					))}
					<p style={{color: '#7887AB'}}>tak tak tak tnie ttakl nie tak nie</p>
			</TagsList>
		</TagsContainer>
	);
}

export default Tags;
