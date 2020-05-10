export const favoriteArticleListUpdate = (articleList, articleSlug, isFavorited, favoritesCount) => {
	console.log(articleSlug)
	console.log(isFavorited)
	console.log(favoritesCount)
	return articleList.map((articleData) => {
		if (articleData.slug === articleSlug) {
			return {
				...articleData,
				favorited: isFavorited,
				favoritesCount: favoritesCount
			};
		}
		return articleData;
	});
};
