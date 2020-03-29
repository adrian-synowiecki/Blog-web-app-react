export const favoriteArticleListUpdate = (articleList, changedArticleData) => {
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

