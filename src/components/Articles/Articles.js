import React from 'react';

import ArticlePreview from '../ArticlePreview/ArticlePreview';
import { ArticlesContainer, ArticlesList } from './Articles.style';



function Articles({ articlesList }) {

	return (
		<ArticlesContainer>
			{articlesList.map((articleContent) => (
				<ArticlePreview key={articleContent.slug} articleContent={articleContent} />
			))}
		</ArticlesContainer>
	);
}

export default Articles;
