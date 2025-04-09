import "./PostHistory.css";
import Post from "../Post/Post";

function PostHistory({post, handlePostClick}) {
    return (
        <div className="post-history">
            {posts.map(i => <Post post={i} onClick={handlePostClick} />)}
        </div>
    )
}

export default PostHistory();