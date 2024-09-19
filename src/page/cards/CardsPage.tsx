import React from "react";
import { TopNavBar } from "../../component/nav/TopNavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { CardState, removeCardByCardNumber } from "../../state/Card/card.slice";
import { formatCardNumber } from "../../helpers/formatCardNumber";
import * as styles from "./Cards.module.scss";
import { useDispatch } from "react-redux";
import RemoveIcon from "../../component/icons/Remove";

export const CardsPage = () => {
  const card = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch();
  return (
    <>
      <TopNavBar />
      <div>Cards</div>

      <div className={styles.creditCardsList}>
        {card.map((card: CardState, index: number) => (
          <div className={styles.cardItem} key={index}>
            <div className={styles.cardDetails}>
              <p className={styles.cardNumber}>
                {formatCardNumber(card.cardNumber?.toString())}
              </p>
              <div className={styles.cardMeta}>
                <p>Expires: {card.expDate}</p>
                <p>CVC: {card.cvc}</p>
              </div>
              <hr />
              <div
                onClick={() =>
                  dispatch(removeCardByCardNumber(card.cardNumber))
                }
              >
                <RemoveIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
