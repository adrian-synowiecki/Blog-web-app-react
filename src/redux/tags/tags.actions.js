import tagsTypes from './tags.types';

export const fetchTagsByMostPopularRequest = () => ({
	type: tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_REQUEST
});
export const fetchTagsByMostPopularDone = (tagList) => ({
	type: tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_DONE,
	payload: { tagList }
});
export const fetchTagsByMostPopularError = (error) => ({
	type: tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_ERROR,
	payload: { error }
});

export const removeTagName = () => ({
	type: tagsTypes.REMOVE_TAG_NAME
});

export const unloadTags = () => ({
	type: tagsTypes.UNLOAD_TAGS
});

export const clearTagsError = () => ({
	type: tagsTypes.CLEAR_TAGS_ERROR
});
