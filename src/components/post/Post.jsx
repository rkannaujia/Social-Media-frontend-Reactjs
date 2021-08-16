import { MoreVert } from "@material-ui/icons";
import "./post.css";

export default function Post () {
    return (
       <div className="post">
           <div className="postWrapper">
               <div className="postTop">
                   <div className="postTopLeft">
                       <img src="/assets/profile/profile1.jpg" alt="" className="postProfileImg" />
                       <span className="postUsername">Kanchan Kannaujia</span>
                       <span className="postDate">5 mins ago</span>
                   </div>
                   <div className="postTopRight"></div>
                   <MoreVert />
               </div>
               <div className="postCenter">
                   <span className="postText">Hi Its my firstpost :)</span>
                   <img src="/assets/post/post1.jpg" alt="postimage" className="postImg" />
               </div>
               <div className="postBottom">
                   <div className="postBottomLeft">
                       <img src="/assets/like.png" alt="likeImg" className="likeIcon" />
                       <img src="/assets/heart.png" alt="likeImg" className="likeIcon" />
                       <span className="postLikeCounter">32 people liked it</span>
                   </div>
                   <div className="postBottomRight">
                       <span className="postCommentText">9 comments</span>
                   </div>
               </div>
           </div>
       </div>
    )
}