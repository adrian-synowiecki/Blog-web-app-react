import React from 'react';

import * as S from './ArticleList.style';

import ArticlePreview from 'components/ArticlePreview/ArticlePreview';

function ArticleList({ articleList }) {
	
	return (
		<S.ArticleListContainer>
			{articleList.map((articleData, index) => (
				<ArticlePreview
					articleData={articleData}
					key={articleData.slug}
					i={index}
				/>
			))}
		</S.ArticleListContainer>
	);
}

export default ArticleList;
