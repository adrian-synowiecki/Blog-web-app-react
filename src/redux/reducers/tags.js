import tagsTypes from '../types/tags';

export default function tags(state = {}, action) {
	switch (action.type) {
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_REQUESTED:
			return { ...state, isLoading: true };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_DONE:
			return { ...state, tagsList: action.payload, isLoading: false };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_ERROR:
			return { ...state, isLoading: false };
		case tagsTypes.GET_TAG_NAME: 
			return {...state, tag: action.payload}
		case tagsTypes.REMOVE_TAG_NAME:
			return {...state, tag: null}
		case tagsTypes.UNLOAD_TAGS:
			return {}
		default:
			return state;
	}
}
