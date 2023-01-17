import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export function PostAuthor(props) {
	const author = useSelector((state) =>
		state.users.find((user) => user.id === props.userId)
	);

	return <span>by {author ? author.name : 'Unknown author'}</span>;
}

PostAuthor.propTypes = {
	userId: PropTypes.string.isRequired,
};
