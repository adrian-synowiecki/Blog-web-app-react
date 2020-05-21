import React from 'react';
import { useParams } from 'react-router-dom';

import * as S from './CommentList.style';

import CommentListItem from 'components/CommentListItem/CommentListItem';

function CommentList({ commentList, className }) {
	const { articleSlug } = useParams();

	return (
		<S.CommentListContainer className={className}>
			{commentList.map((commentData, index) => (
				<CommentListItem commentData={commentData} articleSlug={articleSlug} key={commentData.id} index={index} />
			))}
		</S.CommentListContainer>
	);
}

export default CommentList;
