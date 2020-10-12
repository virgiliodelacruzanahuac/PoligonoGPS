
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
// You can import from local files
import Map from './Map';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() 
{
  const [position, setPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const getPosition = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync({});
      setPosition(coords);
      setMarkers([
        {
          latitude: coords.latitude,
          longitude: coords.longitude,
          message: "Estás aquí",
        },
      ]);
  } catch (error) {
      console.log("getPosition -> error", error);
      setPosition(null);
    }
  };
  const entryPoint = async () => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        getPosition();
      }
    } catch (error) {
      console.log("getPermissionAndPosition -> error", error);
    }
  };
  useEffect(() => {
    entryPoint();
  }, []);

  /* fin obtiene coordenadas */
  return (
    <View style={styles.container}>
      
        
     
      {(position && (
        <Card style={styles.mycard}>
        <Text>
        Poligono Mi posición en GPS{"\n"}
        </Text>
        <Text>
        Latitud={position.latitude} {"\n"}
          Longitud={position.longitude}{"\n"}
        </Text>

        
          <Map position={position} markers={markers} />
       </Card>
      )) || (
        <Card>
          <Text>GPS Unavailable</Text>
        </Card>
      )}
      
    </View>
  );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 25,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mycard:
  {
    width: "100%",
    height: "80%",
  }
});
