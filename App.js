import { StatusBar } from "expo-status-bar";
import {
  
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Image,

} from "react-native";
import { useEffect, useState } from "react";
import RestaurantCard from "./src/components/RestaurantCard";
import styles from './src/styles'

const img = {
  uri: "https://i.pinimg.com/originals/cc/1e/c6/cc1ec66bb88d96db9fdb9f5e11f11cd4.jpg",
};

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://my-first-firestore-bk.web.app/restaurants"
      );
      const data = await response.json();
      setAllRestaurants(data);
    };
    getData();
  }, []);

  return (
   
    <View style={styles.container}>
     
      {/* <ImageBackground style={styles.container} resizeMode="cover" source={img}> */}
        <ScrollView>
          {allRestaurants ? (
            allRestaurants?.map((restaurant) => (
          <RestaurantCard key = {restaurant.id} restaurant = {restaurant} />
            ))
          ) : <ActivityIndicator size="large" color="pink" />
          }

          <StatusBar style="auto" />
        </ScrollView>
      {/* </ImageBackground> */}
 
    </View>
  );
}


