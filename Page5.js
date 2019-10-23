import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

class Page5 extends React.Component {

  constructor (props){
     super (props);
     this.state ={
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       imageuri:'https://sv1.picz.in.th/images/2019/08/22/ZRRyeW.png',
     };

  }

  onPressAddAccount = () => {
    this.props.navigation.navigate("Page4Screen")
  };

  add_Account_success=async(id)=>{

  }

  add_Account_fail=async()=>{

  }

  add_Aut_success=async()=>{

  }

  add_Aut_fail=async(error)=>{

  }


  onChangeTextFirstName = firstName => this.setState({ firstName });
  onChangeTextLastName = lastName => this.setState({ lastName });
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });

  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>

      <View style={{flex:1,justifyContent: 'center'}}>

        <View style={{justifyContent:'center', width:150}}>
          <Text style={{textAlign:'center',marginTop:20,color:'white',fontSize:20}}>Profile Image</Text>
             <TouchableOpacity onPress={this.pickImage}>
             <Image
                 style={styles.imgStyles}
                 source={{uri:this.state.imageuri}}/>
             </TouchableOpacity>
        </View>

        <TextInput
          style={styles.nameInput}
          placeholder="First Name"
          onChangeText={this.onChangeTextFirstName}/>

        <TextInput
          style={styles.nameInput}
          placeholder="Last Name"
          onChangeText={this.onChangeTextLastName}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Email"
          onChangeText={this.onChangeTextEmail}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Password"
          onChangeText={this.onChangeTextPassword}
        />

        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressAddAccount}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Create</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
    marginTop:20,
  },
  touchablePassword:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
  nameInput: {
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },

  buttonText: {
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:30,
      color:'#ffffff'
  },
  imgStyles: {
    width: 120,
    height: 120,
    alignItems:'center',
    resizeMode:'stretch',
    margin:10,
  }
});

export default Page5;
