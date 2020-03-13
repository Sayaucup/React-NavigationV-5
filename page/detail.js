import React,{Component} from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

class Detail extends Component {
  state = {  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Detail Screen</Text>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}
                style={{ backgroundColor: '#f4511e', padding: 10, margin: 10 }}>
                <Text style={{color:'white',fontWeight:'bold'}}>Go back to Home</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

export default Detail;