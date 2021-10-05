import React, { useRef, useState } from 'react'
import { MapContainer, Marker, TileLayer, Tooltip, GeoJSON, useMap } from "react-leaflet";
import geoJsonData from '../Gejson/test'
import basic_1 from '../Gejson/poi-1'

export default function Geojson() {

    const map = useRef(null)
    const geoJsonEl = useRef(null)
    const [muncul, setMuncul] = useState(false)

    const removeLayer = () => {
        const mapEL = map.current
        const layers = geoJsonEl.current._layers
        Object.keys(layers).forEach(key => {
            mapEL.removeLayer(layers[key])
        })
    }

    const addLayer = () => {
        const mapEL = map.current
        console.log(mapEL);
        const layers = geoJsonEl.current._layers
        Object.keys(layers).forEach(key => {
            layers[key].addTo(mapEL)
        })
    }

    const onEachFeature = (feature, layer) => {
        layer.on({
            click: clickLayer
        });
    }

    const clickLayer = (e) => {
        setMuncul(true)

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
        <>
            <MapContainer whenCreated={(el) => map.current = el} center={[37.8, -96]} zoom={4} bounds={[[50, -120], [22.5, -75]]} scrollWheelZoom={true  }>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"
                />
                <GeoJSON ref={geoJsonEl} data={geoJsonData} style={style} onEachFeature={onEachFeature} />
            </MapContainer>
            <button onClick={removeLayer} dangerouslySetInnerHTML={{__html: "<h1>Clear Layer</h1>"}}/>
            <button onClick={addLayer}> <h1>Add Layer</h1> </button>
            {
                muncul ? 
                    <div>
                        <h1>
                            ceritanya popup/sidebar
                            <button onClick={() => setMuncul(false)}>X</button>
                        </h1>
                    </div>
                    : ''
            }
        </>
    )
}