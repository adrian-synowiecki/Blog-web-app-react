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

import { fetchTagsByMostPopularRequested, getTagName } from '../../redux/actions/tags';
import { fetchArticlesByTagRequested } from '../../redux/actions/articles';

import { TagsContainer, StyledTag, Paragraph, TagsList } from './Tags.style';

function Tags({ tagList, fetchArticlesByTagRequested, getTagName, isPopularTags, isArticlePreviewTags }) {
	const onTagClick = (tag) => {
		if (isPopularTags) {
			getTagName(tag);
			fetchArticlesByTagRequested(tag);
		}
	};
	return (
		<TagsContainer isArticlePreviewTags={isArticlePreviewTags}>
			{isPopularTags && <Paragraph>Popular Tags</Paragraph>}
			<TagsList>
				{tagList ? (
					tagList.map((tag) => (
						<StyledTag to={`/`} key={tag} onClick={() => onTagClick(tag)} isPopularTags={isPopularTags}>
							{tag}
						</StyledTag>
					))
				) : (
					<Paragraph>Loading tags...</Paragraph>
				)}
			</TagsList>
		</TagsContainer>
	);
}

export default Tags;
