import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";

import styled from "styled-components/native";
import Items from "./ItemList";

const List = ({ item }) => {
  return (
    <Container>
      <ListItem
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: 14 }}
        data={item}
        renderItem={({ item }) => <Items data={item} />}
      />
    </Container>
  );
};

const ListItem = styled.FlatList`
  display: flex;
  width: 100%;
  background-color: #fff;
`;

const Container = styled.View`
  height: 200px;
  margin-top: 20px;
`;

export default List;
