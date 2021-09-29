import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import '../App.css';
import 'leaflet/dist/leaflet.css';

const Map = ({ id, url }) => {
    const [state, setState] = useState({
        map1: 0,
        map2: 1,
        map3: 2,
        map4: 3,
    });

    return (
        <div style={styles.root}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true  }>
                <TileLayer
                    url={url || "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"}
                />
                <Marker position={[51.505, -0.09]}
                    eventHandlers={{
                        click: (e) => {
                            setState({
                                map1: state[id] + 1,
                                map2: state[id] + 1,
                                map3: state[id] + 1,
                                map4: state[id] + 1,
                            });
                        }
                    }}
                    draggable={true}
                >
                <Tooltip>
                    ID { id }
                </Tooltip>
                </Marker>
            </MapContainer>
            <p>
                {state[id]}
            </p>
        </div>
    );
};

const styles = {
    root: {
        margin: "5px",
    },
};

export default Map;
