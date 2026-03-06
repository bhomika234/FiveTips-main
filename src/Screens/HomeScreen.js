import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Today's Stock Tips</Text>
        <Text style={styles.date}>March 4, 2026</Text>
      </View>

      <ScrollView>

        <View style={styles.card}>
          <Text style={styles.stock}>AAPL</Text>
          <Text>Buy Zone: $170</Text>
          <Text>Target: $185</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.stock}>TSLA</Text>
          <Text>Buy Zone: $200</Text>
          <Text>Target: $230</Text>
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f2f2f2"
},

header:{
backgroundColor:"#16a085",
height:180,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
alignItems:"center",
justifyContent:"center"
},

title:{
color:"#fff",
fontSize:22,
fontWeight:"bold"
},

date:{
color:"#fff"
},

card:{
backgroundColor:"#fff",
margin:15,
padding:15,
borderRadius:15,
elevation:5
},

stock:{
fontSize:18,
fontWeight:"bold"
}

});