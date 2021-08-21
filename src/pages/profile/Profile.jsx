import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css"

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/post/post1.jpg" alt="download error" className="profileCoverImg" />
                            <img src="assets/profile/profile1.jpg" alt="download error" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Kanchan Kannaujia</h4>
                            <span className="profileInfoDesc">Hello all my dear friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>

            </div>

        </>
    )
}
