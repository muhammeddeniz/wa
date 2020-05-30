import React from "react";

import "./card1.scss";

type Props = JSX.IntrinsicElements["div"] & {
  title?: string;
};

const Card1: React.FC<Props> = ({ title, ...rest }) => {
  return (
 
      <div className="card1">
        <div className="card1-image">
          <div className="card1-image-title">
            <h5>Card1 Title</h5>
          </div>
        </div>
        <div className="card1-description">
          <h5> Card1 Title </h5>
          <p>
            Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
            Bingo. Lorem Ipum doth be hard.
          </p>
        </div>
      </div>
 
  );
};

export default Card1;
