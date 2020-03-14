export const favoriteArticlesListUpdate = (articleList, changedArticleData) => {
	return articleList.map((articleData) => {
		if (articleData.slug === changedArticleData.slug) {
			return {
				...articleData,
				favorited: changedArticleData.favorited,
				favoritesCount: changedArticleData.favoritesCount
			};
		}
		return articleData;
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
