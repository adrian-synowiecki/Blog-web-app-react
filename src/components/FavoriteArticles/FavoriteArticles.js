import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFavoriteArticlesRequested } from '../../redux/actions/articles'
import ArticlePreview from '../ArticlePreview/ArticlePreview';

function FavoriteArticles({ match, favoriteArticles, fetchFavoriteArticlesRequested }) {
/* 	useEffect(
		() => {
			if (match.url.includes('favorites')) {
				fetchFavoriteArticles(match.params.userName);
			}
		},
		[ match.url, fetchFavoriteArticles, match.params.userName ]
	);
 */
	return (
		<div>
			{favoriteArticles ? (
				favoriteArticles.map((article) => <ArticlePreview key={article.slug} article={article} />)
			) : (
				'No favorite articles found'
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	favoriteArticles: state.articles.articlesList
});

const mapDispatchToProps = (dispatch) => ({
	fetchFavoriteArticlesRequested: (username) => dispatch(fetchFavoriteArticlesRequested(username)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteArticles);
