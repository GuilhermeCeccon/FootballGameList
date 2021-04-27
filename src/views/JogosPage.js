import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

const JogosPage = (props) => {
  const { route } = props;
  const { faseId } = route.params;

  const [jogos, setJogos] = useState([]);

  const getJogos = () => {
    axios
      .get(
        `https://api.api-futebol.com.br/v1/campeonatos/2/fases/${faseId}`,
        {
          headers: {
            Authorization: `Bearer live_bc7abcdb76feaa027225b40683d667`,
          },
        }
      )
      .then((res) => {
        const jogos = res.data.chaves;
        const arrJogos = [];
        jogos.map((item) => {
          const valor = item.partida_ida.placar
            arrJogos.push(valor)
        })
        setJogos(arrJogos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getJogos();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{jogos}</Text>
    </View>
  );
};

export default JogosPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: "10",
  },
});