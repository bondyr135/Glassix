import React from 'react';

import { mapsKey } from '../../utils';
import './map.css';

const MapComponent = (props) => {

    return (
        <div className="map_component">
            <div className="map">
                <iframe
                    title="title"
                    style={{ width: '100vw', height: '100vh' }}
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${mapsKey}
                    &q=${props.lat},${props.long}`} allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default MapComponent;