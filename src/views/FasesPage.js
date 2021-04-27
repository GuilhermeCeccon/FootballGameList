import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const Fases = (props) => {
  const { navigation } = props;
  const [fases, setFases] = useState([]);
  const [title, setTitle] = useState([]);

  const getFases = () => {
    axios
      .get(`https://api.api-futebol.com.br/v1/campeonatos/2/fases`, {
        headers: {
          Authorization: `Bearer live_bc7abcdb76feaa027225b40683d667`,
        },
      })
      .then((res) => {
        const fases = res.data;
        if (fases.length < 1) {
          setTitle("Não existem informações nesse momento.");
        } else {
          const availablePhases = [];
          fases.map((item) => {
            if (item.status === "finalizado") {
              availablePhases.push(item);
            }
          });
          setFases(availablePhases);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFases();
  }, []);

  return (
    <View style={styles.container}>
      <Text> {title} </Text>
      <FlatList
        data={fases}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.replace("JogosPage", {
                faseId: item.fase_id,
              })
            }
          >
            <Text style={styles.item}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Fases;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  item: {
    borderWidth: 1,
    borderColor: "gray",
    textAlign: "center",
    width: "80vw",
    marginTop: 10,
    padding: 5,
  },
});