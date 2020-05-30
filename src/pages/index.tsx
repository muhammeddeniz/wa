import React from 'react';

import { Button } from '../components/index';

const Home: React.FC<any> = (props) => {
    return(
        <div className="home">
            <div className="home-new">
                <Button /> 
            </div>
        </div>
    )
}

export default Home;