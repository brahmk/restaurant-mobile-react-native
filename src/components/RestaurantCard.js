
import {Text, Image,View} from 'react-native';
import styles from '../styles'




export default function RestaurantCard({restaurant}) {

    return (
        <View style={styles.restaurantCard}>
        <Text style={styles.text} key={restaurant.id}>
          {restaurant.name}
        </Text>
        <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
        <Text style = {styles.address}>{restaurant.address}</Text>
        <Image
          source={{ uri: restaurant.image }}
          style={styles.image}
        />
  </View>



    )
}