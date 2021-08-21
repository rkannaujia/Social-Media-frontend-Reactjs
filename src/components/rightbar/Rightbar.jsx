import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="image is loading" className="birthdayImg" />
          <span className="birthdayText">
            <b>Shivam </b> and <b>2 other friends </b> have a bithday today
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="image is loading" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u =>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>


    </div>
  )
}