export const favoriteArticlesListUpdateUtil = (articlesList, articleToUpdate) => {
	return articlesList.map((article) => {
		if (article.slug === articleToUpdate.slug) {
			return {
				...article,
				favorited: articleToUpdate.favorited,
				favoritesCount: articleToUpdate.favoritesCount
			};
		}
		return article;
	});
};

/* export const addToFavoriteArticlesUtil = (existingfavoriteArticlesList, articleToAdd) => {
	let findArticle;
	if (existingfavoriteArticlesList) {
		findArticle = existingfavoriteArticlesList.find((article) => article.slug === articleToAdd.slug);
	}

	let newfavoriteArticlesList;

	if (findArticle) {
		newfavoriteArticlesList = [ ...existingfavoriteArticlesList ];
	} else {
		newfavoriteArticlesList = existingfavoriteArticlesList
			? [ ...existingfavoriteArticlesList, { ...articleToAdd } ]
			: [ { ...articleToAdd } ];
	}

	return newfavoriteArticlesList;
};
 */
