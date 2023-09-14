import { View, Text, FlatList, Dimensions } from "react-native";
import { styles } from "./styles";
import cars from "./cars";
import { CarItem } from "../CarItem";

export function CarsList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}
