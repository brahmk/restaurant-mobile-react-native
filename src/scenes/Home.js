import { CurrentRestContext } from '@react-navigation/native';
import { useEffect, useState, useContext } from 'react';
import { ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import {SingleRestContext} from '../../App'

export default function Home( {navigation}) {
  const [allRestaurants, setAllRestaurants] = useState();

  const {setCurrentRest} = useContext(SingleRestContext)

  useEffect(() => {
    fetch('https://my-first-firestore-bk.web.app/restaurants/')
      .then(res => res.json())
      .then(setAllRestaurants)
      .catch(console.error)
  }, [])

  const handlePress = (restaurant) => {
    setCurrentRest(restaurant)
    navigation.navigate('Details')
  }

  return (
    <ScrollView>
      {!allRestaurants
          ? <ActivityIndicator size='large' color='orange' />
          : allRestaurants.map(restaurant => (
              <TouchableOpacity key={restaurant.id}
               onPress={() => handlePress(restaurant)} >
            <RestaurantCard   restaurant={restaurant} />
            </TouchableOpacity>
            ))
          }
    </ScrollView>
  )
}