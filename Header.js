import React from "react";
import { View, Text, Button,image } from "react-native";

function Header() {
  return (
    <View>
      <Text>DIGITAL TATSAT</Text>

      <Button
        title="Menu"
        onPress={() => console.log("Menu pressed")}
      />

      <Text style={{color:'blue' , fontSize:'', fontFamily:''}}>Sharik Malik</Text>
       <Text >
        Digital Tatsat
      </Text>


      <Text >
        Welcome to Digital Tatsat. We help businesses
        grow with digital marketing and technology.
      </Text>
      <Image
  source={require("./assets/image.png")}
  style={{ width: 200, height: 200 }}
/>


    </View>
  );
}

export default Header;