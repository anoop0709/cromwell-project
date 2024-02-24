import "./Profile.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faClipboardList,
  faEnvelope,
  faMessage,
  faSignOut,
  faUserCircle,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-wrapper">
          <div className="navigation">
            <Link to={"/"} className="linkToHome">
              Home
            </Link>
            <FontAwesomeIcon icon={faGreaterThan} className="gtIcon" />
            <p>Profile</p>
          </div>
          <div className="heading">
            <h2>My Home</h2>
          </div>
          <p>
            Hi Anoop! Welcome to your home page. This is where you always start
            after logging in.
          </p>
          <div className="grid-container">
            <div className="grid-item">
              <div className="profile-details">
                <FontAwesomeIcon
                  className="profile-icons"
                  icon={faUserCircle}
                />
                <div className="details">
                  <h5>MY PROFILE</h5>
                  <p>View and update your profile information.</p>
                  <div className="p-tag">
                    <p>Name:Dummy Name</p>
                    <p>Email:testemail@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="profile-details">
                <FontAwesomeIcon
                  className="profile-icons"
                  icon={faClipboardList}
                />
                <div className="details">
                  <h5>MY APPLICATIONS</h5>
                  <p>View and complete your applications.</p>
                  <div className="p-tag">
                    <p>
                      In Progress:<span>0</span>
                    </p>
                    <p>
                      Submitted:<span>1</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="profile-details">
                <FontAwesomeIcon className="profile-icons" icon={faMessage} />
                <div className="details">
                  <h5>MY INTERVIEWS</h5>
                  <p>
                    Arrange interviews and review interviews you have booked.
                  </p>
                  <div className="p-tag">
                    <p>
                      To Book:<span>0</span>
                    </p>
                    <p>
                      To Attend:<span>0</span>
                    </p>
                    <p>
                      In The Past:<span>1</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="profile-details">
                <FontAwesomeIcon className="profile-icons" icon={faEnvelope} />
                <div className="details">
                  <h5>MY PROGRESS UPDATES</h5>
                  <p>
                    Review all emails regarding applications,interviews,offers
                    and hires.
                  </p>
                  <div className="p-tag">
                    <p>
                      Recent Emails:<span>1</span>
                    </p>
                    <p>
                      Emails Older Than a Week:<span>7</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="profile-details">
                <FontAwesomeIcon className="profile-icons" icon={faBullhorn} />
                <div className="details">
                  <h5>MY ALERT</h5>
                  <p>Subscribe to receive emails about new vacancies.</p>
                  <div className="p-tag">
                    <p>
                      Subscribed:<span>No</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="profile-details">
                <FontAwesomeIcon className="profile-icons" icon={faSignOut} />
                <div className="details">
                  <h5>LOG OUT</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
