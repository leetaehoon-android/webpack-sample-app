import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = {
	posts: [
		{
			id: '0',
			user: '0',
			title: 'First Post',
			content: 'Hello!',
			date: sub(new Date(), { minutes: 10 }).toISOString(),
			reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
		},
		{
			id: '1',
			user: '1',
			title: 'Second Post',
			content: 'More text',
			date: sub(new Date(), { minutes: 5 }).toISOString(),
			reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
		},
	],
	status: 'idle',
	error: null,
};

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.posts.push(action.payload);
			},
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						date: new Date().toISOString(),
						title,
						content,
						user: userId,
					},
				};
			},
		},
		postUpdated(state, action) {
			const { id, title, content } = action.payload;
			const existingPost = state.posts.find((post) => post.id === id);

			if (existingPost) {
				existingPost.title = title;
				existingPost.content = content;
			}
		},
		reactionAdded(state, action) {
			const { postId, reaction } = action.payload;
			const existingPost = state.posts.find((post) => post.id === postId);

			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
});

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = Promise.all([1, 2, 3]);
});

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) =>
	state.posts.posts.find((post) => post.id === postId);

export const { postAdded, postUpdated, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
