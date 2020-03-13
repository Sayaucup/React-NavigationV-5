import React,{Component} from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

class Home extends Component {
  state = {  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Home Screen</Text>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={{backgroundColor:'#f4511e',padding:10,margin:10}}>
                <Text style={{color:'white',fontWeight:'bold'}}>Go to Detail</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

export default Home;