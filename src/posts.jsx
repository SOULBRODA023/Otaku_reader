import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Readerpost = () => {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await fetch(
					"https://anime-blog-7oi4.onrender.com/api/posts"
				);
				const data = await res.json();
				console.log(data);

				if (Array.isArray(data)) {
					setPosts(data);
				} else if (data && Array.isArray(data.posts)) {
					setPosts(data.posts);
				} else {
					setPosts([]);
				}
			} catch (err) {
				console.log("Error fetching posts:", err.message);
				setPosts([]);
			}
		};

		fetchPost();
	}, []);

	return (
		<section className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-red-100 py-10 px-4">
			{/* Website Name */}
			<h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 drop-shadow-lg tracking-wide">
				Otaku Stories
			</h1>

			{/* Posts Grid */}
			<div className="flex justify-center">
				<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
					{Array.isArray(posts) && posts.length > 0 ? (
						posts.map((post) => (
							<div
								key={post.id}
								onClick={() => navigate(`/posts/${post.id}`)}
								className="cursor-pointer bg-white/90 hover:bg-white transition duration-300 shadow-lg hover:shadow-2xl rounded-2xl p-6 max-w-md mx-auto transform hover:scale-105"
							>
								{/* Status + Date */}
								<div className="flex justify-between items-center">
									<span
										className={`${
											post.status === "PUBLISHED"
												? "bg-green-200 text-green-700"
												: "bg-yellow-200 text-yellow-700"
										} text-xs px-3 py-1 rounded-full`}
									>
										{post.status}
									</span>
									<span className="text-gray-400 text-sm">
										{post.createdAt
											? new Date(
													post.createdAt
											  ).toLocaleDateString()
											: "N/A"}
									</span>
								</div>

								{/* Title */}
								<h3 className="font-bold text-xl mt-3 text-gray-900 line-clamp-2">
									{post.title}
								</h3>

								{/* Content preview */}
								<p className="text-gray-600 text-sm mt-2">
									{post.content?.length > 120
										? post.content.substring(0, 120) + "..."
										: post.content}
								</p>

								{/* Desktop-only button */}
								<button
									onClick={(e) => {
										e.stopPropagation();
										navigate(`/posts/${post.id}`);
									}}
									className="hidden sm:block mt-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-400 hover:from-purple-700 hover:to-red-500 text-white font-semibold px-4 py-2 rounded-xl w-full"
								>
									Open
								</button>
							</div>
						))
					) : (
						<p className="text-gray-500 text-center col-span-full">
								{posts 
								||"No posts available."}
						</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default Readerpost;
