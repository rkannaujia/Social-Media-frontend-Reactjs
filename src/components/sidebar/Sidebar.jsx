import "./sidebar.css";
import {RssFeed, Chat,PlayCircleFilledOutlined, Group,Bookmark,HelpOutline ,Event,School,WorkOutline } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline  className="sidebarIcon" />
                        <span className="sidebarListItemText">Question </span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Course</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                </ul> 
                <button className="sidebarBtn">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Kanchan </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Neelam </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile3.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Lucy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile4.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Kanchan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile5.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Kanchan </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile6.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Kanchan </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile12.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Kanchan </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile8.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Lucydoogy </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile9.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Kanchan </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile10.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Kanchan </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile/profile11.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Kanchan </span>
                    </li>
                </ul>
            </div>

        </div >
    )
}
