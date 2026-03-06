import React, { useState, useRef } from "react"
import { View, FlatList, ImageBackground, Dimensions, ViewStyle, TextStyle, TouchableOpacity } from "react-native"
import { Text, Screen } from "../Components"

const { width, height } = Dimensions.get("window")


const SPLASH_DATA = [
  { id: "1", image: require("../assets/Splash screen 2.png "), title: "Welcome to My Homes", desc: "Explore a world of tailored properties." },
  { id: "2", image: require("../assets/Splash screen 3.png"), title: "Discover Properties", desc: "Your perfect match awaits." },
  { id: "3", image: require("../assets/Splash screen 4.png"), title: "Start your Search", desc: "Start your journey with us." },
]

export const SplashScreen = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)

  return (
    <Screen preset="fixed">
      <FlatList
        ref={flatListRef}
        data={SPLASH_DATA}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={(e) => setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / width))}
        renderItem={({ item }) => (
          <ImageBackground source={item.image} style={{ width, height }}>
            <View style={$overlay}>
              <Text style={$title}>{item.title}</Text>
              <Text style={$desc}>{item.desc}</Text>
              <TouchableOpacity 
                style={$btn} 
                onPress={() => currentIndex === 2 ? navigation.navigate("Login") : flatListRef.current?.scrollToIndex({index: currentIndex + 1})}
              >
                <Text style={{ color: "white" }}>{currentIndex === 2 ? "Get Started" : "Next"}</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      />
    </Screen>
  )
}

const $overlay: ViewStyle = { position: 'absolute', bottom: 0, backgroundColor: 'rgba(26, 28, 61, 0.9)', width: '100%', padding: 40, borderTopLeftRadius: 30, borderTopRightRadius: 30 }
const $title: TextStyle = { color: 'white', fontSize: 24, fontWeight: 'bold' }
const $desc: TextStyle = { color: '#ccc', marginVertical: 10 }
const $btn: ViewStyle = { backgroundColor: '#34C759', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 }