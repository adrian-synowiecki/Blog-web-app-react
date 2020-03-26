/* import React, { useState, useEffect } from 'react';

import { TagsContainer, StyledTag, Paragraph, TagsList } from './Tags.style';
import { connect } from 'react-redux';

function Tags({ articlesData }) {
	const [ uniqueTagsArr, setUniqueTagsArr ] = useState([]);

	useEffect(
		() => {
			const uniqueTags = new Set();
			articlesData && articlesData.map((article) => article.tagList.map((tag) => uniqueTags.add(tag)));
			setUniqueTagsArr(Array.from(uniqueTags));
		},
		[ articlesData ]
	);

	return (
		<TagsContainer>
			<Paragraph>Popular Tags</Paragraph>
			<TagsList>
				{uniqueTagsArr.map((tag) => (
					<StyledTag to="/" key={tag}>
						{tag}
					</StyledTag>
				))}
			</TagsList>
		</TagsContainer>
	);
}

export default Tags;
 */

import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchTagsByMostPopularRequest, getTagName } from '../../redux/tags/tags.actions';
import { fetchArticlesByTagRequest } from '../../redux/articleList/articleList.actions';

import { TagsContainer, StyledTag, Paragraph, TagsList } from './Tags.style';

function Tags({ tagList, fetchArticlesByTagRequest, getTagName, isPopularTags, isArticlePreviewTags,flexEnd }) {
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
			</TagsList>
		</TagsContainer>
	);
}

export default Tags;
