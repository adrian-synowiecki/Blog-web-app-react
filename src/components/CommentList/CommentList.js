import React from 'react';
import { useParams } from 'react-router-dom';

import * as S from './CommentList.style';

import CommentListItem from '../CommentListItem/CommentListItem';

function CommentList({ commentList, className }) {
	const { articleSlug } = useParams();

	return (
		<S.CommentListContainer className={className}>
			{commentList.map((commentData) => {
				return <CommentListItem commentData={commentData} articleSlug={articleSlug} />;
			})}
		</S.CommentListContainer>
	);
}

export default CommentList;
