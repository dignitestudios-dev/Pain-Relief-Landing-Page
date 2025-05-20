import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "194px",
  borderRadius: "8px",
};

const defaultCenter = {
  lat: 24.8607, // Karachi
  lng: 67.0011,
};

const libraries = ["places"];

const GoogleMapComponent = ({ onLocationSelect, editAddress }) => {
  console.log(editAddress, "editAddress");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [marker, setMarker] = useState(defaultCenter);
  const [inputValue, setInputValue] = useState("");

  const autocompleteRef = useRef(null);
  useEffect(() => {
    if (editAddress?.location?.coordinates?.length) {
      const [lng, lat] = editAddress.location.coordinates;
      setMapCenter({ lat, lng });
      setMarker({ lat, lng });
      setInputValue(editAddress.address || "");
    }
  }, [editAddress]);
  if (!isLoaded) return <div>Loading...</div>;

  const handlePlaceChanged = () => {
    const autocomplete = autocompleteRef.current;
    // @ts-ignore
    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const addressComponents = place.address_components || [];

    const getComponent = (type) =>
      addressComponents.find((comp) => comp.types.includes(type))?.long_name ||
      "";

    const data = {
      country: getComponent("country"),
      city: getComponent("locality") || getComponent("sublocality"),
      state: getComponent("administrative_area_level_1"),
      zipCode: getComponent("postal_code"),
      address: place.formatted_address,
      location: {
        type: "Point",
        coordinates: [lng, lat],
      },
    };
    console.log(data, "data");
    setMapCenter({ lat, lng });
    setMarker({ lat, lng });
    setInputValue(place.formatted_address);

    onLocationSelect(data); // send back to parent
  };

  return (
    <div className="relative w-full h-full">
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          type="text"
                    value={inputValue}

          placeholder="Enter your street, city, state, zip?"
          className="w-full p-2 rounded-md border border-gray-300 mb-2"
            onChange={(e) => setInputValue(e.target.value)} // controlled input
        />
      </Autocomplete>
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

export default GoogleMapComponent;
