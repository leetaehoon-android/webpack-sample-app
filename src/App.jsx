import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { PostList } from './features/posts/PostList';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';
import { Navbar } from './components/Navbar';

function App() {
	return (
		<Router>
			<Navbar />
			<div>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<AddPostForm />
								<PostList />
							</>
						}
					/>
					<Route path='/post/:postId' element={<SinglePostPage />} />
					<Route path='/editPost/:postId' element={<EditPostForm />} />
					<Route path='/' element={<Navigate to='/' />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
