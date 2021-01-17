import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import CardView from "react-native-cardview";
import DawatESufia from "../../assets/images/Dawat-e-sufia.png";

const Book = () => (
    <TouchableOpacity style={{ alignItems: "center", marginVertical: 10 }}>
        <CardView cardElevation={5} cornerRadius={5} style={{ width: "98%", elevation:5, backgroundColor: "#FFF" }}>
            <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ width: 140, height: 160}}>
                    <Image source={DawatESufia} resizeMode="contain" style={{ width: 140, height: 160 }}/>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        DAWAT-E-SOFIA
                    </Text>
                    <Text style={{ fontSize: 14, marginTop: 1, color: "#cacdcf" }}>481 pages</Text>
                    <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 2 }}>
                        Urdu translation
                    </Text>
                </View>
            </View>
        </CardView>
    </TouchableOpacity>
)

export default Book;