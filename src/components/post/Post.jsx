import { MoreVert } from "@material-ui/icons";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post ({post}) {
    const [like, setlike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const likeHandler = ()=>{
        setlike(isLiked ? like-1 : like+1) /**note up we have setup is like useState(fale)=> if isLiked {like-1} else {like+1} */
        setIsLiked(!isLiked)
    }
    return (
       <div className="post">
           <div className="postWrapper">
               <div className="postTop">
                   <div className="postTopLeft">
                       <img src={Users.filter((u) => u.id ===post?.userId)[0].profilePicture } alt="" className="postProfileImg" />
                       <span className="postUsername">{Users.filter((u) => u.id ===post?.userId)[0].username}</span>
                       <span className="postDate">{post.date}</span>
                   </div>
                   <div className="postTopRight"></div>
                   <MoreVert />
               </div>
               <div className="postCenter">
                   <span className="postText">{post?.desc}</span>
                   <img src={post.photo} alt="postimage" className="postImg" />
               </div>
               <div className="postBottom">
                   <div className="postBottomLeft">
                       <img src="/assets/like.png" onClick={likeHandler} alt="likeImg" className="likeIcon" />
                       <img src="/assets/heart.png" onClick={likeHandler} alt="likeImg" className="likeIcon" />
                       <span className="postLikeCounter">{like} people liked it</span>
                   </div>
                   <div className="postBottomRight">
                       <span className="postCommentText">{post.comment} comments</span>
                   </div>
               </div>
           </div>
       </div>
    )
}