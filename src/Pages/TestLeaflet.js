import React, { useEffect } from "react";
import '../App.css';
import 'leaflet/dist/leaflet.css';
import Map from "../Components/Map";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const TestLeaflet = () => {
    useEffect(() => {
        document.title = "React Leaflet";
    }, []);

    return (
        <div style={styles.root}>
            <div style={{display:"flex"}}>
                <Map url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png" id={"map1"} />
                <Map url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" id={"map2"} />
            </div>
            <div style={{display:"flex"}}>
                <Map url="https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png" id={"map3"} />
                <Map url=" https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png" id={"map4"} />
            </div>
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
