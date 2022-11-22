import { StyleSheet, SafeAreaView, Text, View, Dimensions } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "25.25%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
