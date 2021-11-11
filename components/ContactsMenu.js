import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Farrukh",
    photo: require("../assets/farrukh.png"),
  },
  {
    type: "contact",
    name: "Sheroze",
    photo: require("../assets/sheroze.png"),
  },
  {
    type: "contact",
    name: "Khalil",
    photo: require("../assets/khalil.png"),
  },
];

function ContactsMenu() {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {contact.type == "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
}

export default ContactsMenu;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
