import React from 'react';

import './header.css';

const Header = (props) => {


    return (
        < header className="header" >
            {`Where... where am I?`
            } <br />
            <div>{'Well, you\'re in '}
                <span>{`${props.city}, ${props.country}`}</span>
            </div>
        </header >
    )
}

export default Header;