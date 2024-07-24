import React, { useRef, useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';

function MyMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const budapestCoords = fromLonLat([19.0402, 47.4979]);
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            }),
          }),
        ],
        view: new View({
          center: budapestCoords,
          zoom: 7,
        }),
      });

      return () => map.dispose();
    }
  }, []);

  return (
 
    <div ref={mapRef} style={{ width: '100%', height: '90vh' }} />
    );
   
  
}

export default MyMap;
