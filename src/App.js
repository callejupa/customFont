import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'


class App extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.grenzeSans}>
          Cargando...
        </Text>
      </View>
    )
  }
}

export default App