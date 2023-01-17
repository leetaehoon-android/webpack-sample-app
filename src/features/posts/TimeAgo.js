import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export function TimeAgo(props) {
	let timeAgo = '';
	if (props.timestamp) {
		const date = parseISO(props.timestamp);
		const timePeriod = formatDistanceToNow(date);
		timeAgo = `${timePeriod} ago`;
	}

	return (
		<span title={props.timestamp}>
			&nbsp; <i>{timeAgo}</i>
		</span>
	);
}

TimeAgo.propTypes = {
	timestamp: PropTypes.string.isRequired,
};
