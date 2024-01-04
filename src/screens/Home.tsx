import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import List from "../components/ListHome";
import SeeMoreButton from "../components/atomic/SeeMoreButton";

export default function Home() {
  const navigation = useNavigation();

  const [fechamento, setFechamento] = useState([
    { loteria: "Loto-Fácil", numbers: [7, 5, 3, 9, 4, 5, 2] },
    { loteria: "Quina", numbers: [1, 8, 5, 6, 8, 7, 4] },
    { loteria: "Sena", numbers: [6, 2, 3, 8, 9, 4, 1] },
  ]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, alignItems: "center", paddingTop: 10 }}>
        <View style={{ marginTop: 10 }}>
          <Title>Mega Sorte</Title>
          <List item={fechamento} />
        </View>

        <SeeMoreButton
          text={"ver mais"}
          handlePress={() => console.log("clicked see more...")}
        />

        <ContainerButtons>
          <ButtonNewNumbers style={{ margin: 10 }}>
            <Text style={{ color: "#fff" }}>Gerar números</Text>
          </ButtonNewNumbers>

          <Divider />

          <ButtonClosed
            style={{ margin: 10 }}
            onPress={() => [navigation.navigate("Fechamentos")]}
          >
            <Text style={{ color: "#fff" }}>Fechamentos</Text>
          </ButtonClosed>
        </ContainerButtons>
      </SafeAreaView>

      <Modal>
        <Welcome>Bem vindo,</Welcome>
        <ModalText>tudo sobre as loterias estão fácil aqui</ModalText>
      </Modal>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
  color: #3bb556;
`;

const ContainerButtons = styled.View`
  margin-top: 80px;
  justify-content: center;
  flex-direction: row;
  align-items: space-between;
`;

const ButtonNewNumbers = styled.TouchableOpacity`
  padding: 18px;
  background-color: #9759c4;
  border-radius: 100px;
`;

const ButtonClosed = styled.TouchableOpacity`
  padding: 18px;
  background-color: #161616;
  border-radius: 100px;
`;

const Divider = styled.View`
  width: 10%;
`;

const Welcome = styled.Text`
  font-size: 30px;
  color: #3bb556;
`;

const ModalText = styled.Text`
  font-size: 30px;
  font-weight: normal;
  text-align: left;
  color: #0b0b0b;
`;

const Modal = styled.View`
  justify-content: left;
  align-items: left;
  margin: 28px;
  margin-bottom: 44px;
`;
