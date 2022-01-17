import React from "react";
import { BiCartAlt } from "react-icons/bi";
import Button from "../Button/Button";
import "./GameBuy.css";

const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} руб.</span>
      <Button onClick={() => null} type="primary">
        <BiCartAlt size={22} />
      </Button>
    </div>
  );
};

export default GameBuy;
