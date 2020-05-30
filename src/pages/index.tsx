import React from 'react';

import { Button } from '../components/index';

const Home: React.FC<any> = (props) => {
    return(
        <div className="home">
            <div className="home-new">
                <Button red>Deneme</Button> 
                <Button green >Deneme</Button> 
                <Button blue >Deneme</Button> 
            </div>
        </div>
    )
}

export default Home;