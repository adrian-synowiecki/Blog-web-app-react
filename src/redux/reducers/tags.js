import tagsTypes from '../types/tags';


const initialState = {
	isFetching: false,
	tagsList: [],
	tag: null,
	error: ''
};

export default function tags(state = initialState, action) {
	switch (action.type) {
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_REQUESTED:
			return { ...state, isFetching: true };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_DONE:
			return { ...state, tagsList: action.payload, isFetching: false };
		case tagsTypes.FETCH_TAGS_BY_MOST_POPULAR_ERROR:
			return { ...state, isFetching: false };
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
