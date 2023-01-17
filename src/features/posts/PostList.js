import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';
import { selectAllPosts } from './postsSlice';

export function PostList() {
	const posts = useSelector(selectAllPosts);
	const orderedPosts = posts
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date));

	const renderedPosts = orderedPosts.map((post) => (
		<article key={post.id}>
			<h3>{post.title}</h3>
			<div>
				<PostAuthor userId={post.user} />
				<TimeAgo timestamp={post.date} />
			</div>
			<p>{post.content.substring(0, 100)}</p>
			<ReactionButtons post={post} />
			<Link to={`/post/${post.id}`}>View Post</Link>
		</article>
	));

	return (
		<section>
			<h2>Posts</h2>
			{renderedPosts}
		</section>
	);
}
