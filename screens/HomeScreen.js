import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "http://bugtreat.org/onlinego_app/index.php?dispatch=app.categories"
      )
        .then((response) => response.json())
        .then((data) => setData(data.categories.flat()));
    };
    fetchData();
  }, []);

  const parentData = data.map((datum, index) => {
    if (Number(datum.parent_id) === 0) {
      return (
        <View key={datum.category_id}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => toggleHandler(index)}
          >
            <View style={styles.mainContainer}>
              <Text style={styles.dataText}>{datum.category}</Text>
              {!expanded[index] ? (
                <AntDesign name="down" size={24} color="#333" />
              ) : (
                <AntDesign name="up" size={24} color="#333" />
              )}
            </View>
          </TouchableOpacity>
          {datum.children.map((sub) => {
            return (
              expanded[index] && (
                <View key={sub.category_id} style={styles.subContainer}>
                  <Text style={styles.subText}>{sub.category}</Text>
                  <Text style={styles.subText}>{sub.product_count}</Text>
                </View>
              )
            );
          })}
        </View>
      );
    }
  });

  function toggleHandler(id) {
    setExpanded((prevShownComments) => ({
      ...prevShownComments,
      [id]: !prevShownComments[id],
    }));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Menu Bar</Text>
      <ScrollView style={styles.appContainer}>{parentData}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "dodgerblue",
    fontSize: 32,
  },
  appContainer: {
    width: "90%",
    marginBottom: 25,
  },
  mainContainer: {
    backgroundColor: "#EBA286",
    padding: 8,
    borderBottomColor: "brown",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataText: {
    color: "#333",
    fontSize: 18,
  },

  subContainer: {
    backgroundColor: "#EBC6B8",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subText: {
    fontSize: 16,
    color: "#666",
    padding: 6,
  },
});
