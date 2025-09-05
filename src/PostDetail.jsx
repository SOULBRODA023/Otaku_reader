// pages/PostDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const PostDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);

	// Comment state
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await fetch(
					`https://anime-blog-7oi4.onrender.com/api/posts/${id}`
				);
				const data = await res.json();
				setPost(data);
			} catch (err) {
				console.error("Error fetching post:", err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, [id]);

	// Handle comment submit
	const handleCommentSubmit = async (e) => {
		e.preventDefault();
		if (!name.trim() || !comment.trim()) {
			alert("Name and Comment cannot be empty!");
			return;
		}

		const newComment = {
			title: "Otaku Comment", // fixed title (backend requirement)
			name,
			content: comment,
		};

		try {
			const res = await fetch(
				`https://anime-blog-7oi4.onrender.com/api/posts/${id}/comments`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newComment),
				}
			);

			if (!res.ok) throw new Error("Failed to post comment");

			const savedComment = await res.json();
			console.log(savedComment);
			setComments([...comments, savedComment]);

			// reset inputs
			setName("");
			setComment("");
			
		} catch (err) {
			console.error("Error posting comment:", err.message);
		}
	};

	if (loading) {
		return <p className="text-center text-gray-500">Loading post...</p>;
	}

	if (!post) {
		return <p className="text-center text-gray-500">Post not found.</p>;
	}

	return (
		<section className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-red-50 py-10 px-4">
			{/* Back Button */}
			<div className="max-w-3xl mx-auto mb-6">
				<button
					onClick={() => navigate("/")}
					className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-400 hover:from-purple-700 hover:to-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
				>
					← Back to Posts
				</button>
			</div>

			{/* Post Container */}
			<div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
				{/* Title */}
				<h1 className="text-3xl font-extrabold text-gray-900 mb-3">
					{post.title}
				</h1>

				{/* Status + Date */}
				<div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
					<span
						className={`${
							post.status === "PUBLISHED"
								? "bg-green-200 text-green-700"
								: "bg-yellow-200 text-yellow-700"
						} px-3 py-1 rounded-full text-xs`}
					>
						{post.status}
					</span>
					<span>
						{post.createdAt
							? new Date(post.createdAt).toLocaleDateString()
							: "N/A"}
					</span>
				</div>

				{/* Content with Markdown */}
				<div className="prose prose-purple max-w-none text-gray-800">
					<ReactMarkdown>{post.content}</ReactMarkdown>
				</div>
			</div>

			{/* Comments Section */}
			<div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6">
				<h2 className="text-xl font-bold text-gray-800 mb-4">
					Comments ({comments.length})
				</h2>

				{/* Comment List */}
				{comments.length > 0 ? (
					<ul className="space-y-4 mb-6">
						{comments.map((c, index) => (
							<li
								key={index}
								className="border border-gray-200 rounded-lg p-4 bg-gray-50"
							>
								<p className="font-semibold text-gray-900">
									{c.name}
								</p>
								<p className="text-gray-700 mt-1">
									{c.content}
								</p>
							</li>
						))}
					</ul>
				) : (
					<p className="text-gray-500 mb-6">
						No comments yet. Be the first!
					</p>
				)}

				{/* Add Comment Form */}
				<form
					onSubmit={handleCommentSubmit}
					className="space-y-4 border-t pt-4"
				>
					<div>
						<label className="block text-sm font-semibold text-gray-700">
							Your Name
						</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
							placeholder="Enter your name"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-semibold text-gray-700">
							Comment
						</label>
						<textarea
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
							rows="4"
							placeholder="Write your comment..."
							required
						></textarea>
					</div>

					<button
						type="submit"
						className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-400 hover:from-purple-700 hover:to-red-500 text-white font-bold px-6 py-2 rounded-xl"
					>
						Post Comment
					</button>
				</form>
			</div>
		</section>
	);
};

export default PostDetail;
