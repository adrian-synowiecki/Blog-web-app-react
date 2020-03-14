import tagsTypes from '../types/tags';

const initialState = {
	inProgress: false,
	tagList: [],
	tag: '',
	error: null
};

export default function tags(state = initialState, action) {
	switch (action.type) {
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_REQUEST:
			return { ...state, inProgress: true };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_DONE:
			return { ...state, tagList: action.payload.tagList, inProgress: false };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };
		case tagsTypes.GET_TAG_NAME:
			return { ...state, tag: action.payload.tag };
		case tagsTypes.REMOVE_TAG_NAME:
			return { ...state, tag: null };
		case tagsTypes.UNLOAD_TAGS:
			return {};
		default:
			return state;
	}
}

