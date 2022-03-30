import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";

import {
  fetchArticleRequest,
  updateArticleRequest,
  unloadArticle,
} from "redux/article/article.actions";

import ArticleForm from "components/ArticleForm/ArticleForm";
import NotFound from "components/NotFound/NotFound";

function EditArticlePage({
  error,
  articleData,
  username,
  fetchArticleRequest,
  updateArticleRequest,
  unloadArticle,
}) {
  const { articleSlug } = useParams();

  useEffect(() => {
    fetchArticleRequest(articleSlug);
	console.log(articleData);
    return () => {
      unloadArticle();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  !isEmpty(articleData) && console.log(articleData);
  return (
    <Fragment>
      {/* {articleData && articleData.author && articleData.author.username} */}
      {error && <NotFound>404 Article Not Found</NotFound>}
      {!isEmpty(articleData) &&
        articleData.author.username === username && (
          <ArticleForm
            articleToEdit={articleData}
            error={error}
            updateArticleRequest={updateArticleRequest}
          />
        )}
      {!isEmpty(articleData) &&
        articleData.author.username !== username && (
          <NotFound>You Have No Permission To Edit This Article</NotFound>
        )}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  const { articleData, error } = state.article;
  const { username } = state.user.currentUserData;
  return {
    articleData,
    error,
    username,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateArticleRequest: (articleSlug, articleToUpdateData) =>
    dispatch(updateArticleRequest(articleSlug, articleToUpdateData)),
  fetchArticleRequest: (articleSlug) =>
    dispatch(fetchArticleRequest(articleSlug)),
  unloadArticle: () => dispatch(unloadArticle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);
