import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Error.css";
import { Link, useRouteError } from "react-router-dom";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

export const Error = () => {
  const err = useRouteError();
  return (
    <div className="errContainer">
      <FontAwesomeIcon icon={faFaceFrown} className="faceFrown" />
      <p>Page Not Found !.</p>
      <h1>{err?.status}</h1>
      <h2>Oops!, It's look like this page does not exist.</h2>
      <Link className="link" to={"/"}>
        Back to Home
      </Link>
    </div>
  );
};
