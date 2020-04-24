import React from 'react';
import { useParams } from 'react-router-dom';

import * as S from './CommentList.style';

function Comment({ currentUserData, commentList, removeCommentFromArticleRequest }) {
	const { articleSlug } = useParams();

	return (
		<S.CommentListContainer>
			{commentList.length > 0 &&
				commentList.map((commentData) => {
					const { id, body, createdAt, author: { image, username } } = commentData;
					const createdAtDate = new Date(createdAt).toDateString();
					return (
						<S.CommentContent key={id}>
							<S.CommentText>{body}</S.CommentText>
							<S.CommentFooter>
								<S.CommentImage src={image} />
								<S.CommentUsername>{username}</S.CommentUsername>
								<S.CommentCreatedAt>{createdAtDate}</S.CommentCreatedAt>
								{currentUserData.username === username && (
									<S.DeleteCommentIcon
										onClick={() => removeCommentFromArticleRequest(articleSlug, id)}
									/>
								)}
							</S.CommentFooter>
						</S.CommentContent>
					);
				})}
		</S.CommentListContainer>
	);
}

export default Comment;
