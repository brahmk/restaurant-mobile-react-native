import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: "grey",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10
    },
  
    text: {
        marginHorizontal: 12,
      fontSize: 24,
      fontWeight:'600',
      marginVertical: 15,
      backgroundColor: "white",
    },
  
    image: {
      width: 366,
      height: 100,
      borderRadius: 10,
    },

    restaurantCard: {
        width: '100%',
        backgroundColor:'#fff',
        color:'#444',
        marginVertical: 8,
        borderRadius: 9,
       
        
    },

    cuisine: {
        marginHorizontal: 12,
        fontSize: 18,
        fontWeight: '100',
        color: '#ff3333',



    },
    address: {
        marginHorizontal: 12,
        fontSize:14,
        color: 'grey'
    }
  });