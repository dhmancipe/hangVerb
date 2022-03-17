import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';



const Hangman = ( props ) =>{

  getImgIcon = () => {

    if(props.img == 0){
      return require("./assets/ah0.jpg");
    }if(props.img == 1){
      return require("./assets/ah1.jpg");
    }if(props.img == 2){
      return require("./assets/ah2.jpg");
    }if(props.img == 3){
      return require("./assets/ah3.jpg");
    }if(props.img == 4){
      return require("./assets/ah4.jpg");
    }if(props.img == 5){
      return require("./assets/ah5.jpg");
    }if(props.img == 6){
      return require("./assets/ah6.jpg");
    }else{return require("./assets/ah6.jpg");}


  }








  return(

    <View  style={styles.container}   >

      <View style={styles.img}>
        <Image
        style={styles.image}
        source={getImgIcon()}
        />

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
      marginTop: 8
      //borderBottomColor: Colors.gris,
    //  borderBottomWidth: 1

  },
  row:{
    flexDirection:"row",
  },

  img:{

    alignItems: "center",
    padding: 30,

    //height: 100,
    //width: 200
  },
  image: {
    width: 250,
    height: 250,
  },



});

export default Hangman;
