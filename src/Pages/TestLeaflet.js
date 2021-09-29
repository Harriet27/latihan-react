import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import '../App.css';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const TestLeaflet = () => {
    useEffect(() => {
        document.title = "React Leaflet";
    }, []);

    return (
        <div style={styles.root}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://github.com/Harriet27/latihan-react" target="_blank">fuck</a> contributors'
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <div className='d-flex'>
                <a href='/'>
                    <input type='button' value='Back to Home' />
                </a>
            </div>
        </div>
    );
};

const styles = {
    root: {
        justifyContent: "center",
    },
};

export default TestLeaflet;
