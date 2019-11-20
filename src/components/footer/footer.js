import React from 'react';

import './footer.css';

const Footer = (props) => {


    const fact = props.city === 'Hidden Hills'
        ? 'Yay! Right next to Kanye'
        : props.city === 'Somewhere'
            ? 'It seems like something went wrong...'
            : 'Nope. You\'re still far from Kanye... Maybe that\'s for the best.';

    return (
        <section className="footer">
            { fact  }
        </section>
    )
}

export default Footer;