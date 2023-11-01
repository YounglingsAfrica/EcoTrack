import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {
  return (
    <div className="h-screen">
      <MapContainer center={[51.505, -0.09]} zoom={13} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map
