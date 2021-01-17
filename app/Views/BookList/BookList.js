import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import HeaderImage from "../../assets/images/header-image.png";
import Book from "../../Components/Book/Book";

const BookList = () => (
    <View>
        <View style={styles.headerContainer}>
            <Image source={HeaderImage} style={styles.headerImage} />
            <View style={styles.headerImageOverlay}>
            </View>
        </View>
        <View style={{ alignItems: "center", height: "100%" }}>
            <View style={{ height: "100%", position: "absolute", borderColor: "#eee", borderWidth: 1, top: -30, width: "99.9%", backgroundColor: "#f7f7f7", elevation: 5, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <View style={{ padding: 10 }}>
                    <Text style={{ textAlign: "center", fontSize: 16, fontWeight: 'bold', marginBottom: 20 }}>
                        BOOK LIST
                    </Text>
                    <Book />
                    <Book />
                </View>
            </View>
        </View>
    </View>
)

export default BookList;

const styles = StyleSheet.create({
    headerContainer: {
      height: 250
    },
    headerImage: {
      width: "100%",
      height: 250
    },
    headerImageOverlay: {
      width: "100%",
      height: 250,
      backgroundColor: "rgba(0,0,0,0.4)",
      position: "absolute",
      top: 0
    }
  });