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
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Shimmer } from "../../components/Shimmer/Shimmer";


export const Profile = () => {
  const userDetails = useSelector((state) => state?.User?.userData?.userObj);
  const fullName = userDetails?.firstName.concat(" ", userDetails?.lastName);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "CLEARUSER" });
    Navigate("/");
  };

  return (
    <>
      <Header />
      <div className="profile-container">
          <div className="navigation">
            <FontAwesomeIcon icon={faHome} className="gtIcon" />
            <Link to={"/"} className="linkToHome">
              Home
            </Link>
            <FontAwesomeIcon icon={faGreaterThan} className="gtIcon" />
            <p>Profile</p>
          </div>
        <div className="profile-wrapper">
          <div className="heading">
            <h2>My Home</h2>
          </div>
          {userDetails ? (
            <>
              <p>
                Hi {userDetails?.firstName}! Welcome to your home page. This is
                where you always start after logging in.
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
                        <p data-testid="fullname">Name: {fullName}</p>
                        <p data-testid="email">Email: {userDetails?.email}</p>
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
                    <FontAwesomeIcon
                      className="profile-icons"
                      icon={faMessage}
                    />
                    <div className="details">
                      <h5>MY INTERVIEWS</h5>
                      <p>
                        Arrange interviews and review interviews you have
                        booked.
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
                    <FontAwesomeIcon
                      className="profile-icons"
                      icon={faEnvelope}
                    />
                    <div className="details">
                      <h5>MY UPDATES</h5>
                      <p>
                        Review all emails regarding applications, interviews,
                        offers and hires.
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
                    <FontAwesomeIcon
                      className="profile-icons"
                      icon={faBullhorn}
                    />
                    <div className="details">
                      <h5>MY ALERT</h5>
                      <p>Subscribe to receive emails about new vacancies.</p>
                      <div className="p-tag">
                        <p>
                          Subscribed:{" "}
                          {userDetails?.isSubscribed ? (
                            <span data-testid="subscribed-yes">Yes</span>
                          ) : (
                            <span data-testid="subscribed-no">No</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item" onClick={handleLogOut} data-testid="log-out">
                  <div className="profile-details">
                    <FontAwesomeIcon
                      className="profile-icons"
                      icon={faSignOut}
                    />
                    <div className="details">
                      <h5>LOG OUT</h5>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Shimmer />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
