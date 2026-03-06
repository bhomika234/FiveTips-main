import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      {/* Profile Image */}
      <Image
        source={{ uri: "https://i.pravatar.cc/150" }}
        style={styles.image}
      />

      {/* Name */}
      <Text style={styles.name}>John Doe</Text>

      {/* Email */}
      <Text style={styles.email}>johndoe@email.com</Text>

      {/* Logout Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
alignItems:"center",
justifyContent:"center",
backgroundColor:"#f5f5f5"
},

image:{
width:120,
height:120,
borderRadius:60,
marginBottom:20
},

name:{
fontSize:22,
fontWeight:"bold"
},

email:{
fontSize:16,
color:"gray",
marginBottom:30
},

button:{
backgroundColor:"#2ecc71",
paddingVertical:12,
paddingHorizontal:40,
borderRadius:10
},

buttonText:{
color:"#fff",
fontSize:16,
fontWeight:"bold"
}

});