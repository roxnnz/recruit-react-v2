import React, { useState } from "react"
import formatDate from "../../helpers/formatDate"
import { useDispatch } from "react-redux";
import { CardState } from "../../state/Card/card.slice";

export const Card = ({submitHanlder}) => {
    const dispatch = useDispatch();
    const [cardState, setCardState] = useState<CardState>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCardState({
          ...cardState,
          [name]: value,
        });
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(submitHanlder(cardState))
    }

    return (
        <form>
            <label htmlFor="cardNumber">Card Number</label>
            <input
                id="cardNumber"
                type="number"
                placeholder="Enter card number"
                name="cardNumber"
                onChange={handleInputChange}
                required
            />

            <label htmlFor="cvc">CVC</label>
            <input
                id="cvc"
                type="number"
                placeholder="Enter CVC"
                name="cvc"
                onChange={handleInputChange}
                required
            />

            <label htmlFor="expDate">Exp Date</label>
            <input
                id="expDate"
                type="month" // Allows only month and year input
                name="expDate"
                onChange={handleInputChange}
                min={formatDate(new Date())}
                required
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}