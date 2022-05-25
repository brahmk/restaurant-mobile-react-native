import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, ScrollView, Image, } from 'react-native';
import { useEffect, useState } from 'react';





const img = {uri:'https://i.pinimg.com/originals/cc/1e/c6/cc1ec66bb88d96db9fdb9f5e11f11cd4.jpg'}

export default function App() {

  const [allRestaurants, setAllRestaurants] = useState()

  useEffect(  () => {
    const getData = async () => {
    const response = await fetch('https://my-first-firestore-bk.web.app/restaurants')
    const data = await response.json()
    setAllRestaurants(data);
} 
getData()}, []) 


  
  

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} resizeMode='cover' source={img}>
    
    <ScrollView>
      { allRestaurants ? (allRestaurants?.map((restaurant) => (
        <>
         <Text style={styles.text} key={restaurant.id}>{restaurant.name} </Text>
        <Image 
        source={{uri: restaurant.image}}
         style={styles.image}/>

        </>
       
      ))
      ) : ( <ActivityIndicator size = 'large' color='pink'/> )
  
      
      }

      <StatusBar style="auto" />
      </ScrollView>
  
      </ImageBackground>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
 

  text: {
    fontSize: 34,
    marginVertical: 5,
  }, 

  image: {
    width: '100%',
    height: '100px',
  }

});
