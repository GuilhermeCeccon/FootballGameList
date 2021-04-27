import { View, Text, Image, Button, StyleSheet } from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";

const InitialPage = (props) => {
  const { navigation, route } = props;
  const [campeonato, setCampeonato] = useState([]);
  const getCampeonato = () => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos/2", {
        headers: {
          Authorization: `Bearer live_bc7abcdb76feaa027225b40683d667`,
        },
      })
      .then((res) => {
        setCampeonato(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

      useEffect(() => {
        getCampeonato();
      }, []);
  
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 80, width: 80 }}
        source={{
          uri: campeonato.logo,
        }}
      />
      <Text>{campeonato.nome}</Text>
      <Button
        title="Fases"
        onPress={() => navigation.navigate("FasesPage")}
      ></Button>
    </View>
  );
}
export default InitialPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
