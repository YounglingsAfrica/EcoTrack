import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const Map = () => {
  const markers = [
    {
      position: [-33.91678386698706, 18.424734773014833],
      popupContent: "<strong>Younglings Africa</strong>",
    },
    {
      position: [-33.92165542649865, 18.454688811502823],
      popupContent: "<strong><h1>Woodstock Drop Off Facility Cape Town</h1></strong><br>Beach Rd, Woodstock, Cape Town, 7700<br>Garbage dump<br>Closes 5pm"
    },
    {
      position: [-33.92037341318676, 18.381904389398642],
      popupContent: "<strong><h1>City of Cape Town Solid Waste Recycling Depot</h1></strong><br>89 Tramway Rd, Sea Point, Cape Town, 8060<br>Recycling center<br>Closes 5pm"
    },
    {
      position: [-33.91641376570998, 18.507317302885248],
      popupContent: "<strong><h1>Clearer Conscience Environmental Services</h1></strong><br>27 7th Ave, Maitland, Cape Town, 7405<br>Waste management service<br>Closes 5pm"
    },
    {
      position: [-33.89148765188393, 18.547770044762526],
      popupContent: "<strong><h1>Tygerdal Drop Off Facility Cape Town</h1></strong><br>Oranje St, Tygerdal, Cape Town, 7460<br>Garbage dump<br>Closes 5pm"
    },
    {
      position: [-34.00122761918644, 18.483112917711814],
      popupContent: "<strong><h1>City Of Cape Town Recycling Drop-off Facility</h1></strong><br>40 Rosmead Ave, Wynberg, Cape Town, 7800<br>Recycling center<br>Closes 5pm"
    },
    // Add more markers here
  ];

  return (
    <div className="h-[86vh] sticky">
      <MapContainer center={[-33.91678386698706, 18.424734773014833]} zoom={13} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>
            <div dangerouslySetInnerHTML={{ __html: marker.popupContent }} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
