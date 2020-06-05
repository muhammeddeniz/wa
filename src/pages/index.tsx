import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button, Input, Card1, Card2 } from "../components/index";

interface IProps {
  myStore: any;
}

const Home: React.FC<any> = ({ myStore }) => {
  const [inTitle, setinTitle] = useState("");
  const [inText, setinText] = useState("");

  return (
    <div className="home">
      <div className="home-new">
        <div className="home-new-input">
          <Input
            onChange={(e) => setinTitle(e.target.value)}
            title="Yapılacak iş ismi"
          />
          <div className="home-new-input-2">
            <Input
              onChange={(e) => setinText(e.target.value)}
              width={400}
              title="Neler yapılacak"
            />
          </div>
          <Button
            onClick={() => {
              myStore.ekle({ title: inTitle, text: inText });
            }}
            input
          >
            EKLE
          </Button>
        </div>
        <div className="home-new-cards">
          {myStore.cards.map((index, key) => {
            return (
              <div key={key}>
                {
                  <Card1
                    onClick={(e: any) => {
                      let control;
                      myStore.working.forEach((element) => {
                        element.title === index.title &&
                        element.text === index.text
                          ? (control = true)
                          : (control = false);
                      });

                      control
                        ? alert("Bu iş şu anda zaten çalışılıyor")
                        : myStore.addWorking({
                            title: index.title,
                            text: index.text,
                            timerStart: true,
                          });
                    }}
                    title={index.title}
                    text={index.text}
                  />
                }
              </div>
            );
          })}
        </div>
      </div>

      <div className="home-working">
        <div className="home-working-title">
          <h2>Şu an çalışılıyor</h2>
          <div className="home-working-title-underline"></div>
        </div>
        {myStore.working?.map((index, key) => {
          return (
            <div key={key} className="home-working-new">
              <Card2
                title={index.title}
                desc={index.text}
                timerStart={index.timerStart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default observer(Home);
