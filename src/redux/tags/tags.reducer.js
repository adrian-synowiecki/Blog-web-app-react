import tagsTypes from './tags.types';

const initialState = {
	isFetchingTags: false,
	tagList: [],
	error: null
};

export default function tags(state = initialState, action) {
	switch (action.type) {
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_REQUEST:
			return { ...state, isFetchingTags: true };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_DONE:
			return { ...state, tagList: action.payload.tagList, isFetchingTags: false };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_ERROR:
			return { ...state, error: action.payload.error, isFetchingTags: false };
		case tagsTypes.GET_TAG_NAME:
			return { ...state, tag: action.payload.tag };
		case tagsTypes.UNLOAD_TAGS:
			return { ...state, tagList: [], error: null };
		case tagsTypes.CLEAR_TAGS_ERROR:
			return { ...state, error: null };
		default:
			return state;
	}
}
