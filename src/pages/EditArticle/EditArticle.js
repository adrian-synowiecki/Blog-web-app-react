import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';

import { fetchSingleArticle } from '../../redux/modules/singleArticle';

import ArticleForm from '../../components/ArticleForm/ArticleForm';

function EditArticle({ match, fetchSingleArticle, selectedArticle }) {
	useEffect(() => {
		fetchSingleArticle(match.params.articleSlug);
	}, [fetchSingleArticle, match.params.articleSlug]);
	console.log(match.params.articleSlug);
	return <div>{selectedArticle && <ArticleForm selectedArticle={selectedArticle} />}</div>;
}

const mapStateToProps = (state, ownProps) => {
	return {
		selectedArticle: state.singleArticle.article
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchSingleArticle: (slug) => dispatch(fetchSingleArticle(slug))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
