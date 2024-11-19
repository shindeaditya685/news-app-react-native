import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NewsDataType } from "@/types";

type Props = {
    newList: NewsDataType[]
}

const NewsList = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>NewsList</Text>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
