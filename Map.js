import React from "react";
import MapView, { Marker ,Polyline} from "react-native-maps";

export default function Map({ position, markers }) {
  return (
    <MapView
      initialRegion={{
        latitude: position.latitude,
        longitude: position.longitude,
        longitudeDelta: 2,
        latitudeDelta: 2,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      minZoomLevel={8}
    >
      <Polyline
		coordinates={[
			{ latitude: 19.7, longitude: -98.966667 }, //tecamac
			{ latitude: 19.716111, longitude: -99.223611 }, //Tepotzotlán
			{ latitude: 19.62302, longitude: -99.31143 }, // Villa nicolas romero
      { latitude: 19.283333, longitude: -99.35 }, // La marquesa
      { latitude: 19.028333, longitude: -99.267222 }, //Huitzilac
      { latitude: 18.985278, longitude: -99.099722 }, // Tepoztlan
      { latitude: 19.127778, longitude: -98.762778 }, // Amecameca
      { latitude: 19.3525, longitude: -98.6697 }, // Rio Frio
      { latitude: 19.7, longitude: -98.966667 }, //tecamac
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={6}
	/>
      {markers.map((marker) => (
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.message}
        />
      ))}
    </MapView>
  );
}