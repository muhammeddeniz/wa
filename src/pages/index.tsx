import React from 'react';

import { Button, Input } from '../components/index';

const Home: React.FC<any> = (props) => {
    return(
        <div className="home">
            <div className="home-new">
                <Button red>Deneme</Button> 
                <Button green >Deneme</Button> 
                <Button blue >Deneme</Button> 
                <Input /> 
            </div>
        </div>
    )
}

export default Home;