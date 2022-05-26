import {View, Text, Image, ActivityIndicator,Button} from 'react-native';
import styles from '../styles';
import  {useContext, useState}  from 'react';
import { SingleRestContext } from '../../App';



export default function Details(){
    // const [isRated, setIsRated] = useState(false)
    const { currentRest, setCurrentRest } = useContext(SingleRestContext)

    const handleRating = (newRating) => {
        fetch(`https://my-first-firestore-bk.web.app/restaurants/${currentRest.id}/rating`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({rating: newRating}),
        })
        .then(res => res.json())
        .then(data => setCurrentRest(data) )
        .catch(console.error)
    }
return (
    <View style={styles.restaurantCard}>
        {!currentRest
        ? <ActivityIndicator/>
        : (
            <>
            
            <Image source = {{uri: currentRest.image}}
             style={{width: '100%', height:240}} />
            <Text style={styles.text}>{currentRest.name}</Text>
            <Text style={styles.cuisine}>{currentRest.cuisine}</Text>
            <Text style={[styles.address, {fontWeight: '700'}]}>{currentRest.address}</Text>
            <Text style={[styles.address, {fontWeight: '700'}]}>Rating: {currentRest.rating}</Text>
            <Text style={[styles.address, {fontWeight: '700'}]}>My Rating:</Text>
            <View 
            style={{flexDirection:'row',
             justifyContent:'space-evenly',
             paddingVertical: 24,}}>
                <Button onPress={() => handleRating(1)} title="⭐️" />
                <Button onPress={() => handleRating(2)} title="⭐️" />
                <Button onPress={() => handleRating(3)} title="⭐️" />
                <Button onPress={() => handleRating(4)} title="⭐️" />
                <Button onPress={() => handleRating(5)} title="⭐️" />
            </View>
            </>
        )}

    </View>


)


}