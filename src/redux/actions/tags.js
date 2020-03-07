import tagsTypes from '../types/tags'


/* export const fetchPopularTagsRequested = () => ({
	type: tagsTypes.FETCH_POPULAR_TAGS_REQUESTED,
})

export const fetchPopularTagsDone = (tags) => ({
	type: tagsTypes.FETCH_POPULAR_TAGS_DONE,
	payload: tags
});

export const fetchPopularTagsError = (error) => ({
	type: tagsTypes.FETCH_POPULAR_TAGS_ERROR,
	payload: {
		error
	}
}); */

export const fetchTagsByMostPopularRequested = () => ({
	type: tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_REQUESTED
})

export const fetchTagsByMostPopularDone = (tagsByMostPopular) => ({
	type: tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_DONE,
	payload: tagsByMostPopular

})

export const fetchTagsByMostPopularError = (error) => ({
	type: tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_ERROR,
	payload: error
})

export const getTagName = (tag) => ({
	type: tagsTypes.GET_TAG_NAME,
	payload: tag
})

export const removeTagName = (tag) => ({
	type: tagsTypes.REMOVE_TAG_NAME
})

export const unloadTags = () => ({
	type: tagsTypes.UNLOAD_TAGS
})