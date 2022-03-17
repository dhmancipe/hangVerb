import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



const Definition = ( props ) =>{


  return(

    <View  style={styles.container}   >

      <View style={styles.img}>
        <Text style={styles.text}>{props.definition}</Text>

      </View>

    </View>
  )
}

const styles=StyleSheet.create ({
  container:{
    //  flexDirection: "row",
    //  justifyContent: "space-between",
      padding: 16,
      backgroundColor: "white",
      borderRadius: 12,

      marginLeft: 16,
      marginRight: 16,
      marginBottom: 8,
      marginTop: 8,
      borderWidth: 1,
      borderColor: "#029ACF",
      //borderBottomColor: Colors.gris,
    //  borderBottomWidth: 1

  },
  row:{
    flexDirection:"row",
  },
  text:{
    fontSize:  20,


    color: 'gray'


  },





});

export default Definition;
