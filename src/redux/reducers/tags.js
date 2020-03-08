import tagsTypes from '../types/tags';

const initialState = {
	inProgress: false,
	tagsList: [],
	tag: '',
	error: ''
};

export default function tags(state = initialState, action) {
	switch (action.type) {
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_REQUESTED:
			return { ...state, inProgress: true };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_DONE:
			return { ...state, tagsList: action.payload, inProgress: false };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_ERROR:
			return { ...state, inProgress: false };
		case tagsTypes.GET_TAG_NAME:
			return { ...state, tag: action.payload };
		case tagsTypes.REMOVE_TAG_NAME:
			return { ...state, tag: null };
		case tagsTypes.UNLOAD_TAGS:
			return {};
		default:
			return state;
	}
}
