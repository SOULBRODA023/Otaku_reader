// App.jsx
import { Routes, Route } from "react-router-dom";
import Readerpost from "./posts";
import PostDetail from "./PostDetail";


function App() {
	return (
		<Routes>

			{/* Blog posts listing */}
			<Route path="/" element={<Readerpost />} />

			{/* Individual post page */}
			<Route path="/posts/:id" element={<PostDetail />} />
		</Routes>
	);
}

export default App;
