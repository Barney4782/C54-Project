import React, { Component } from 'react';

import {View, Button} from 'react-native';

export default class App extends Component {

showAlertCB(){

  alert("The father of computing")

}

showAlertMG(){

  alert("The father of nation")

}

showAlertNM(){

  alert("The first black president")

}

showAlertMT(){

  alert("Saint Teresa of Calcutta")

}

render(){
  return (
    <View>
    <View style={{ width:200 , height:100, marginTop:80, marginLeft:80 }}>
      <Button title="Charles Babbage" color="red" onPress={this.showAlertCB}/>
    </View>

    <View  style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
      <Button title="Mahatma Gandhi" color="blue" onPress={this.showAlertMG}/>
    </View>

    <View  style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
      <Button title="Nelson Mandela" color="purple" onPress={this.showAlertNM}/>
    </View>

    <View  style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
      <Button title="Mother Teresa" color="green" onPress={this.showAlertMT}/>

    </View>

    </View>

  )


}


}