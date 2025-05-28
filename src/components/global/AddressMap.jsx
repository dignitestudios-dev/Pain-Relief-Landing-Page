import { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "8px",
  padding: "12px",
};

const defaultCenter = {
  lat: 40.7128, // New York City
  lng: -74.006,
};

const libraries = ["places"];

const AddressMap = ({ location }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [marker, setMarker] = useState(defaultCenter);

  useEffect(() => {
    const [lng, lat] = location;
    setMapCenter({ lat, lng });
    setMarker({ lat, lng });
  }, [location]);
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="relative w-full h-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={14}
      >
        <Marker position={marker} />
      </GoogleMap>
    </div>
  );
};

export default AddressMap;
