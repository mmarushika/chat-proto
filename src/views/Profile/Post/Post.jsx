import "./Post.css";
import {useState} from "react";

function Post({post}) {
    const [isClicked, setClickStatus] = useState(false);
    if(isClicked == false) {
        return (
            <div onClick={() => setClickStatus(!isClicked)} className="unclicked-post">
                <div className="image-wrapper">
                    <img className="unclicked-post-image" src = {post.imageUrl}></img>
                </div>
            </div>
        );
    } else {
        return (
            <div onClick={() => setClickStatus(!isClicked)} lassName="clicked-post">
                <div className="image-wrapper">
                    <img className="clicked-post-image" src = {post.imageUrl}></img>
                    <div className="comment-section">
                        Comments
                    </div>
                </div>
            </div>
        )
    }
}
export default Post;