import React, { useState, useEffect } from "react";

import "./card2.scss";

import { Button } from '../index';

type Props = JSX.IntrinsicElements["div"] & {
  title?: string;
  desc?: string;
  timerStart?: boolean;
};

const Card2: React.FC<Props> = ({ title, timerStart,  desc,  ...rest }) => {

  const [timer, setTimer] = useState(57);


  const [sa, setSa] = useState(0);
  const [dk, setDk] = useState(0);
  const [sny, setSny] = useState(0);

 

    (timerStart)?
    setTimeout(() => {
      if(timer == 60){
        setTimer(0);
        setDk(dk + 1);
        
      }else{
        setTimer(timer + 1);
      }
      if(dk==60){
        setDk(0);
        setSa(sa+1);
      }
     
    },1000):
    console.log("nothing"); 
   
    
 

  return (
    <div className="card2">
      <div className="card2-leftside">
        <p className="card2-leftside-title">{title ? title : "default"}</p>
        <p className="card2-leftside-text">{desc ? desc : "default"}</p>
      </div>

        <p className="card2-count">{sa?sa:"0"}.{dk?dk:"0"}.{timer} dk</p>

        <div className="card2-buttons">
            <Button blue>Durdur</Button>
            <Button green>Devam</Button>
            <Button red>Bitir</Button>
        </div>
    </div>
  );
};

export default Card2;
