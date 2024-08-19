import { Text, View } from "react-native";
import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  // TODO: Add region
  // const region = {}

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      tintColor="black"
      showsPointsOfInterest={false}
      mapType="mutedStandard"
      showsUserLocation={true}
      
    // region={region}
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
