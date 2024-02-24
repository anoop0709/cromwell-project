import "./Footer.css";
import { footerDataList } from "../../assets/config/footerData";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerBox">
        {footerDataList.map((data) => (
          <div className="footerWrapper">
            <div className="footerHeadings">
              <h4>{data.heading}</h4>
            </div>
            <div className="footerLinks">
              {data.footerLinks.map((link, index) => (
                <p key={index}>{link}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
