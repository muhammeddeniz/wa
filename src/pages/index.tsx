import React from 'react';

import { Button, Input, Card1, Card2 } from '../components/index';
 

interface IProps {
    myStore: any;
}

const Home: React.FC<any> = ({myStore}) => {
    return(
        <div className="home">
            <div className="home-new">
                
                <div className="home-new-input">
                    <Input title="Yapılacak iş ismi"/>
                    <div className="home-new-input-2">
                    <Input width={400} title="Neler yapılacak"/>
                    </div>
                    <Button input>EKLE</Button>
                </div> 
                <div className="home-new-cards">
                    {
                        myStore.cards.map(index => {
                            return(
                                <div>
                                    {
                                        <Card1 
                                        onClick={() => {
                                            console.log(index.title);
                                            
                                        }}
                                        title={index.title} text={index.text} />    
                                    }
                                </div>
                            )
                        })
                    }
                </div> 
            </div>

            <div className="home-working">
                <div className="home-working-title">
                    <h2>Şu an çalışılıyor</h2>
                    <div className="home-working-title-underline"></div>
                </div>
                    <Card2 />
            </div>
        </div>
    )
}

export default Home;