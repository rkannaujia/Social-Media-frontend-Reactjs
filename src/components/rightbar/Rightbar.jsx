import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
          <img src="assets/gift.png" alt=" download error" className="birthdayImg" />
          <span className="birthdayText">
            <b>Shivam </b> and <b>2 other friends </b> have a bithday today
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="download error" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u =>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () =>{
    return (
    <>
     <h4 className="rightbarTitle">User information</h4>
     <div className="rightbarInfo">
       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">City :</span>
         <span className="rightbarInfoValue">Mumbai City</span>
       </div>
       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">From :</span>
         <span className="rightbarInfoValue">Sion East</span>
       </div>
       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">Relationship :</span>
         <span className="rightbarInfoValue">Married</span>
       </div>
     </div>
     <h4 className="rightbarTitle">User Friends</h4>
     <div className="rightbarFollowings">
       <div className="rightbarFollowing">
         <img src="assets/profile/profile3.jpg" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollowingName">Neelam kannaujia</span>
       </div>

       <div className="rightbarFollowing">
         <img src="assets/profile/profile4.jpg" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollowingName">Abhishek </span>
       </div>

       <div className="rightbarFollowing">
         <img src="assets/profile/profile5.jpg" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollowingName">Aakash kannaujia</span>
       </div>

       <div className="rightbarFollowing">
         <img src="assets/profile/profile6.jpg" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollowingName">Neha kannaujia</span>
       </div>

       <div className="rightbarFollowing">
         <img src="assets/profile/profile9.jpg" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollowingName">Manoj kannaujia</span>
       </div>

       <div className="rightbarFollowing">
         <img src="assets/profile/profile8.jpg" alt="" className="rightbarFollowingImg" />
         <span className="rightbarFollowingName">Poonam kannaujia</span>
       </div>
     </div>
    </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar />}
      </div>
    </div>
  )
}