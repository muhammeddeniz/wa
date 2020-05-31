import React from 'react';

import { Button, Input, Card1, Card2 } from '../components/index';

const Home: React.FC<any> = (props) => {
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
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
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