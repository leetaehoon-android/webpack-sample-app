import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';
import PropTypes from 'prop-types';

const reactionEmoji = {
	thumbsUp: '👍',
	hooray: '🎉',
	heart: '❤️',
	rocket: '🚀',
	eyes: '👀',
};

export function ReactionButtons(props) {
	const dispatch = useDispatch();
	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		return (
			<button
				key={name}
				type='button'
				onClick={() =>
					dispatch(reactionAdded({ postId: props.post.id, reaction: name }))
				}
			>
				{emoji} {props.post.reactions[name]}
			</button>
		);
	});

	return <div>{reactionButtons}</div>;
}

ReactionButtons.propTypes = {
	post: PropTypes.any.isRequired,
};
