import React from 'react';
import { Text, View, TextInput  } from 'react-native'; 

function App() {
  return (
    <View
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}>
      <View style={{backgroundColor: '#5FD068', width: '100%', height: '15%'}}>
        <Text>1</Text>
      </View>
      <View style={{backgroundColor: "#F6FBF4", width: '100%', height: '40%'}}>
        <Text>2</Text>
      </View>
      <View style={{backgroundColor: "#4B8673", width: '100%', height: '10%', justifyContent: "center", alignItems: "center"}}>
        <TextInput
          style={{
            width: "90%",
            height: "70%",
            backgroundColor: "white",
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
            shadowColor: "black",
            
            shadowOpacity: 0.2,
            shadowRadius: 3
          }}
        />
      </View>
      <View style={{backgroundColor: "#F5DF99", width: '100%', height: '35%'}}>
        <Text>4</Text>
      </View>
    </View>
  )
}

export default App;
