import React from "react"
import { TopNavBar } from "../../component/nav/TopNavBar"
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { CardState } from "../../state/Card/card.slice";

export const CardsPage = () => {
    const card = useSelector((state: RootState) => state.card);

    return (
        <>
            <TopNavBar />
            <div>Cards</div>

            <div className="credit-cards-list">
                {card.map((card: CardState, index: number) => (
                    <div className="card-item" key={index}>
                    <div className="card-details">
                        <p className="card-number">{card.cardNumber?.toString()}</p>
                        <div className="card-meta">
                        <p>Expires: {card.expDate}</p>
                        <p>CVC: {card.cvc}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}