import React, { useRef } from 'react'
import { MapContainer, Marker, TileLayer, Tooltip, GeoJSON, useMap } from "react-leaflet";
import geoJsonData from '../Gejson/basic-1'

export default function Geojson() {

    const map = useRef(null)
    const geoJsonEl = useRef(null)

    const onEachFeature = () => {

    }

    const style = (feature) => {
        return ({
          weight: 2,
          opacity: 1,
          color: "white",
          dashArray: "3",
          fillOpacity: 0.7,
          fillColor: getColor(feature.properties.density)
        });
      }
    
      const getColor = (d) =>{
        return d > 1000
        ? "#800026"
        : d > 500
          ? "#BD0026"
          : d > 200
            ? "#E31A1C"
            : d > 100
              ? "#FC4E2A"
              : d > 50
                ? "#FD8D3C"
                : d > 20 ? "#FEB24C" : d > 10 ? "#FED976" : "#FFEDA0";
      }

    return (
        <div style={styles.root}>
            <MapContainer whenCreated={(el) => map.current = el} center={[37.8, -96]} zoom={4} bounds={[[50, -120], [22.5, -75]]} scrollWheelZoom={true  }>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"
                />
                <GeoJSON ref={geoJsonEl} data={geoJsonData} style={style} onEachFeature={onEachFeature} />
            </MapContainer>
            <button onClick={() => {
                const mapEL = map.current
                console.log(map);
                const layers = geoJsonEl.current._layers
                Object.keys(layers).forEach(key => {
                    mapEL.removeLayer(layers[key])
                })
            }}> <h1>Clear Layer</h1> </button>
            <button onClick={() => {
                const mapEL = map.current
                console.log(map);
                const layers = geoJsonEl.current._layers
                Object.keys(layers).forEach(key => {
                    layers[key].addTo(mapEL)
                })
            }}> <h1>Add Layer</h1> </button>
        </div>
    )
}

const styles = {
    root: {
        margin: "0 auto",
    },
};