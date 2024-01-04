import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  handlePress: () => void;
}

export default function SeeMoreButton({ text, handlePress }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={{ color: "#9759C4" }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
