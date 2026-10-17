
import { View, Text, Button } from "react-native";
import Header from "./Header";

function Sharik() {
    return (
        <View>
            <Header />

            <Text>
                SBS Online Classes
            </Text>

            <Button
                title="Sharik Malik DT"
                onPress={() => console.log("Button pressed")}
            />
        </View>
    );
}

export default Sharik;

