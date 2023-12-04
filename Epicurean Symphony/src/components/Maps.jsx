import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/data');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Map
      google={props.google}
      zoom={8}
      style={{ width: '100%', height: '100%' }}
      initialCenter={{
        lat: data.message.restaurant.location.latitude,
        lng: data.message.restaurant.location.longitude ,
      }}
    >
      <Marker
        position={{
          lat: data.message.restaurant.location.latitude,
          lng: data.message.restaurant.location.longitude,
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE',
})(MapContainer);
