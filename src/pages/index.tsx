import React from 'react';

import { Button, Input, Card1, Card2 } from '../components/index';

const Home: React.FC<any> = (props) => {
    return(
        <div className="home">
            <div className="home-new">
                <Button red>Deneme</Button> 
                <Button green >Deneme</Button> 
                <Button blue >Deneme</Button> 
                <Input /> 
                <Card1></Card1>
                <Card2></Card2>
            </div>
        </div>
    )
}

export default Home;