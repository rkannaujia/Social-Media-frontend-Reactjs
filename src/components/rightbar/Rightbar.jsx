import "./rightbar.css";

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
                <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                    <img src="assets/profile/profile2.jpg" alt="Img is loading" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">Manoj Kumar</span>
                </li>

                <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                    <img src="assets/profile/profile2.jpg" alt="Img is loading" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">Manoj Kumar</span>
                </li>

                <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                    <img src="assets/profile/profile3.jpg" alt="Img is loading" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">Manoj Kumar</span>
                </li>

                <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                    <img src="assets/profile/profile4.jpg" alt="Img is loading" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">Manoj Kumar</span>
                </li>

                <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                    <img src="assets/profile/profile5.jpg" alt="Img is loading" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">Manoj Kumar</span>
                </li>

                <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                    <img src="assets/profile/profile6.jpg" alt="Img is loading" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">Manoj Kumar</span>
                </li>

                
              </ul>
            </div>


     </div>
  )
}