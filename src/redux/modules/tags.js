/* import axiosInstance from '../../utils/axios';


FETCH_POPULAR_TAGS_REQUESTED = 'FETCH_POPULAR_TAGS_REQUESTED'
FETCH_POPULAR_TAGS_DONE = 'FETCH_POPULAR_TAGS_DONE';
FETCH_POPULAR_TAGS_ERROR = 'FETCH_POPULAR_TAGS_ERROR';


export const fetchPopularTagsRequested = () => ({
	type: FETCH_POPULAR_TAGS_REQUESTED,

})

export const fetchPopularTagsDone = (tags) => ({
	type: FETCH_POPULAR_TAGS_DONE,
	payload: tags
});

export const fetchPopularTagsError = (error) => ({
	type: FETCH_POPULAR_TAGS_ERROR,
	payload: {
		error
	}
});

export default function tags(state = {}, action) {
	switch (action.type) {
		case FETCH_POPULAR_TAGS_DONE:
			return { ...state, tagsList: action.payload };
		default:
			return state;
	}
}

export const fetchPopularTags = () => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get('/api/tags');
			dispatch(fetchPopularTagsDone(response.data.tags));
		} catch (error) {
			console.log(error.response);
		}
	};
};
 */