import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

function ChatHeader() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(false)}>
        <Text style={styles.buttonText}>Close</Text>
      </Pressable>
      <Text style={styles.heading}>Chat</Text>
      <Entypo name="bell" size={25} color="#efefef" />
    </View>
  );
}

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    fontSize: 10,
  },
});
