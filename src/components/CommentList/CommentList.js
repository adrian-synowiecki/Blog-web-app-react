import React from 'react';
import { useParams } from 'react-router-dom';

import * as S from './CommentList.style';

function Comment({ currentUserData, commentList, removeCommentFromArticleRequest }) {
	const { articleSlug } = useParams();

	return (
		<S.CommentListContainer>
			{commentList.length > 0 &&
				commentList.map((commentData) => (
					<S.CommentContent key={commentData.id}>
						<S.CommentText>{commentData.body}</S.CommentText>
						<S.CommentFooter>
							<S.CommentImage src={commentData.author.image} />
							<S.CommentUsername>{commentData.author.username}</S.CommentUsername>
							<S.CommentCreatedAt>{commentData.createdAt}</S.CommentCreatedAt>
							{currentUserData.username === commentData.author.username && (
								<S.DeleteCommentIcon
									onClick={() => removeCommentFromArticleRequest(articleSlug, commentData.id)}
								/>
							)}
						</S.CommentFooter>
					</S.CommentContent>
				))}
		</S.CommentListContainer>
	);
}

export default Comment;
