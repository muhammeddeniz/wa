import React from "react";

import "./card1.scss";

type Props = JSX.IntrinsicElements["div"] & {
  title?: string;
  text?: string;

};

const Card1: React.FC<Props> = ({
   title, 
   text,
   ...rest 
  }) => {
  return (
 
      <div className="card1">
        <div className="card1-image">
          <h1>Çalışmaya Başla</h1>
        </div>
        <div className="card1-description">
          <h5> {title? title : "default"} </h5>
          <p>{text? text : "fdsljkaf fsjda lkjfasldk lkjfasldklk jfasldklk jfasldklkjfasldk jlaf jlasdjlksafjl"}</p>
        </div>
      </div>
 
  );
};

export default Card1;
