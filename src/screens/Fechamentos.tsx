import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export default function Fechamentos({ navigation }) {
  useEffect(() => {
    getFechamentos();
  }, []);

  const [fechamentos, setFechamentos] = useState([]);

  const getFechamentos = async () => {
    const url = "https://us-central1-server-001a.cloudfunctions.net/app/";
    try {
      const response = await fetch(`${url}go-finished-loteria`, {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify({
          loteria: "megasena",
          concurso: "",
        }),
      });
      const responseJSON = await response.json();
      setFechamentos(responseJSON);
    } catch (error) {
      console.log("response error: " + error);
    }
  };

  return (
    <View>
      <SafeAreaView>
        <Text>closeds</Text>
      </SafeAreaView>
    </View>
  );
}
