import React from "react";

import "./card1.scss";

type Props = JSX.IntrinsicElements["div"] & {
  title?: string;
};

const Card1: React.FC<Props> = ({ title, ...rest }) => {
  return (
 
      <div className="card">
        <div className="card-image">
          <div className="card-image-title">
            <h5>Card Title</h5>
          </div>
        </div>
        <div className="card-description">
          <h5> Card Title </h5>
          <p>
            Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
            Bingo. Lorem Ipum doth be hard.
          </p>
        </div>
      </div>
 
  );
};

export default Card1;
