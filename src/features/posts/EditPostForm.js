import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postUpdated, selectPostById } from './postsSlice';

export function EditPostForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { postId } = useParams();
	const post = useSelector((state) => selectPostById(state, postId));

	const [title, setTitle] = useState(post.title);
	const [content, setContent] = useState(post.content);
	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);
	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postUpdated({ id: postId, title, content }));
			navigate(`/post/${postId}`);
		}
	};

	return (
		<section>
			<h2>Edit Post</h2>
			<form>
				<label htmlFor='postTitle'>Post Title:</label>
				<input
					type='text'
					id='postTitle'
					name='postTitle'
					value={title}
					onChange={onTitleChanged}
				/>
				<label htmlFor='postContent'>Content:</label>
				<textarea
					id='postContent'
					name='postContent'
					value={content}
					onChange={onContentChanged}
				/>
				<button type='button' onClick={onSavePostClicked}>
					Save Post
				</button>
			</form>
		</section>
	);
}
