import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

const Map = ({ selectedRoute }) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const routeControlRef = useRef(null);

    useEffect(() => {
        if (!mapInstanceRef.current) {
            const map = L.map(mapRef.current).setView([-33.9249, 18.4241], 12);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
            }).addTo(map);

            mapInstanceRef.current = map;
        }

        const map = mapInstanceRef.current;

        if (selectedRoute && selectedRoute.startAddress && selectedRoute.endAddress) {
            try {
                const { startAddress, endAddress } = selectedRoute;
                const startLatLng = L.latLng(startAddress.lat, startAddress.lng);
                const endLatLng = L.latLng(endAddress.lat, endAddress.lng);

                // Clear existing layers
                map.eachLayer((layer) => {
                    if (!(layer instanceof L.TileLayer)) {
                        map.removeLayer(layer);
                    }
                })

                // Create routing control
                if (!routeControlRef.current) {
                    routeControlRef.current = L.Routing.control({
                        waypoints: [
                            L.latLng(startLatLng),
                            L.latLng(endLatLng)
                        ],
                        dragging: true,
                        styles: [{ color: 'blue', weight: 5 }],
                        tilePane: 200, 
                    }).addTo(map);
                } else {
                    routeControlRef.current.setWaypoints([
                        L.latLng(startLatLng),
                        L.latLng(endLatLng)
                    ]);
                }
            } catch (error) {
                console.error('Error in Map component:', error);
            }
        }

        return () => {
            map.eachLayer((layer) => {
                if (!(layer instanceof L.TileLayer)) {
                    map.removeLayer(layer);
                }
            });
        };
    }, [selectedRoute]);

    return <div id="map" style={{ height: '800px' }} ref={mapRef}></div>;
};

export default Map;