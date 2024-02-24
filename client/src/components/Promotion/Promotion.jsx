import { promotionData } from "../../assets/config/promotionConfig";
import "./Promotion.css";

export const Promotion = () => {
  return (
    <div className="promotionContainer">
      {promotionData.map((promo, index) => (
        <div
          key={promo.id}
          className={index === 0 ? "promoBoxBlue" : "promoBox"}
        >
          <h2>{promo.heading}</h2>
          <p className={index === 0 && "whiteLetter"}>{promo.message}</p>
          <button className="promoBtn">{promo.buttonName}</button>
        </div>
      ))}
    </div>
  );
};
