import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFavoriteArticlesRequest } from '../../redux/actions/articleList'
import ArticlePreview from '../ArticlePreview/ArticlePreview';

function FavoriteArticles({ match, favoriteArticles, fetchFavoriteArticlesRequest }) {
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
	fetchFavoriteArticlesRequest: (username) => dispatch(fetchFavoriteArticlesRequest(username)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteArticles);
