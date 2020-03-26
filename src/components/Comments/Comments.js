import React from 'react';
import { useParams } from 'react-router-dom';

import {
	CommentContainer,
	CommentContent,
	CommentBlock,
	CommentFooter,
	CommentImage,
	CommentUsername,
	CommentCreatedAt,
	DeleteComment
} from './Comments.style.js';

function Comment({ currentUserData, commentList, removeCommentFromArticleRequest }) {
	const { articleSlug } = useParams();

	return (
		<CommentContainer>
			{commentList.length > 0 &&
				commentList.map((commentData) => (
					<CommentContent key={commentData.id}>
						<CommentBlock>{commentData.body}</CommentBlock>
						<CommentFooter>
							<CommentImage>{commentData.image}</CommentImage>
							<CommentUsername>{commentData.author.username}</CommentUsername>
							<CommentCreatedAt>{commentData.createdAt}</CommentCreatedAt>
							{currentUserData.username === commentData.author.username && (
								<DeleteComment
									onClick={() =>
										removeCommentFromArticleRequest(commentData, articleSlug, commentData.id)}
								/>
							)}
						</CommentFooter>
					</CommentContent>
				))}
		</CommentContainer>
	);
}

export default Comment;
