import "./profile.css";
import { Avatar } from "@mui/material";
import Header from "../../Components/User/Header/Header";
import Sidebars from "../../Components/User/sidebar/Sidebars";
import Feeds from "../../Components/User/feeds/Feeds";
import Rightbar from "../../Components/User/rightbar/Rightbar";
import { useSelector } from "react-redux";

export default function Profile() {

  const user = useSelector((state) => {
    return state.userData.data
  })

  return (
    <>
      <Header/>
      <div className="profile">
        <Sidebars/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://cdn.stocksnap.io/img-thumbs/280h/NYZYDEVAOX.jpg"
                alt=""
              />
              <img
              
                className="profileUserImg"
                src="https://media-exp1.licdn.com/dms/image/D5603AQG-taBTR3gjxQ/profile-displayphoto-shrink_800_800/0/1664266380245?e=2147483647&v=beta&t=MENJVjOMqYxrzT0P5fjTTNOhkDGajqRdSXSQejd3fGw"
                alt=""
              />
              {/* <span><Avatar className="profileUserImg"/></span> */}
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.userName}</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feeds/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}