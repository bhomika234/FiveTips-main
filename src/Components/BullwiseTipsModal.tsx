import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../assets/Images";
import { Text } from "./Text";

interface BullwiseTipsModalProps {
  visible: boolean;
  onClose: () => void;
}

export const BullwiseTipsModal: React.FC<BullwiseTipsModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Logo */}
          <Image source={Images.logo2} style={{ height: 150, width: 200 }} />
          {/* <Text style={styles.logo}><Text style={{color: '#01B98F'}}>Bull</Text><Text style={{color: '#019B77'}}>wise</Text></Text> */}

          {/* Step 1 */}
          <Text style={styles.heading} weight="bold">
            1. Follow the Exact Strategy
          </Text>
          <Text style={styles.desc} weight="medium">
            Use the specific buy price, stop loss, and sell target provided with
            each pick.
          </Text>

          {/* Step 2 */}
          <Text style={styles.heading} weight="bold">
            2. Wait for the Signal
          </Text>
          <Text style={styles.desc} weight="medium">
            Only enter the trade when the buy price is hit — not before.
          </Text>

          {/* Step 3 */}
          <Text style={styles.heading} weight="bold">
            3. Set and Forget
          </Text>
          <Text style={styles.desc} weight="medium">
            <Text weight="medium">
              Automate the trade and let the strategy play out. No guesswork, no
              tweaking.
            </Text>
          </Text>

          {/* Got it button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onClose}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={["#01B98F", "#019B77"]}
              style={styles.button}
            >
              <Text style={styles.buttonText} weight="semiBold">
                Got it
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    // width: 320,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    width: "90%",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 0,
    letterSpacing: 1,
  },
  heading: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 2,
    alignSelf: "flex-start",
    color: "#222",
  },
  desc: {
    fontSize: 14,
    color: "#444",
    marginBottom: 2,
    alignSelf: "flex-start",
    marginLeft: 2,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 24,
    borderRadius: 24,
    overflow: "hidden",
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
