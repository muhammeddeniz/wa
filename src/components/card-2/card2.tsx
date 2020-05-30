import React from "react";

import "./card2.scss";

import { Button } from '../index';

type Props = JSX.IntrinsicElements["div"] & {
  title?: string;
  desc?: string;
  count?: number;
};

const Card2: React.FC<Props> = ({ title,  desc, count, ...rest }) => {
  return (
    <div className="card2">
      <div className="card2-leftside">
        <p className="card2-leftside-title">{title ? title : "default"}</p>
        <p className="card2-leftside-text">{desc ? desc : "default"}</p>
      </div>

        <p className="card2-count">{count ? count: "12.45"} dk</p>

        <div className="card2-buttons">
            <Button blue>Durdur</Button>
            <Button green>Devam</Button>
            <Button red>Bitir</Button>
        </div>
    </div>
  );
};

export default Card2;
