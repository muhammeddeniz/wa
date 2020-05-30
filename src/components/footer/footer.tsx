import React from 'react';

import './footer.scss';

interface IProps {
    store?: any;
}

const Footer: React.FC<IProps> = ({store}) => {
    return(
        <div>
            <h1>Footer</h1>
        </div>
    );
}

export default Footer;