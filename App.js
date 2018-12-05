import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Main from "./src/Main";
import InputFormName from "./src/inputs/InputFormName";
import InputFormGender from "./src/inputs/InputFormGender";
import InputFormPhone from "./src/inputs/InputFormPhone";
import InputFormAddress from "./src/inputs/InputFormAddress";
import Result from "./src/Result";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNeedsTobeRendered: "Main",
      userName: "",
      gender: "",
      phone: "",
      address: ""
    };
  }

  navigateToInputFormName = () => {
    this.setState({ pageNeedsTobeRendered: "inputName" });
  };

  navigateToInputFormGender = () => {
    this.setState({ pageNeedsTobeRendered: "inputGender" });
  };

  navigateToInputFormPhone = () => {
    this.setState({ pageNeedsTobeRendered: "inputPhone" });
  };

  navigateToInputFormAddress = () => {
    this.setState({ pageNeedsTobeRendered: "inputAddress" });
  };

  navigateToMainPage = () => {
    this.setState({ pageNeedsTobeRendered: "Main" });
  };

  setUserName = (name) => {
    this.setState({ userName:  name });
  };

  setGender = (gender) => {
    this.setState({ gender:  gender });
  };

  setPhone = (phone) => {
    this.setState({ phone:  phone });
  };

  setAddress = (address) => {
    this.setState({ address:  address });
  };

  render() {
    const { pageNeedsTobeRendered, userName, gender, phone, address } = this.state; //Destructuring

    if (pageNeedsTobeRendered === "inputName") {
      return <InputFormName 
                navigateToMainPage={this.navigateToMainPage}
                setUserName={this.setUserName}/>;
    } 
    else if (pageNeedsTobeRendered === "inputGender") {
      return <InputFormGender 
                navigateToMainPage={this.navigateToMainPage}
                setGender={this.setGender}
      />;
    }
    else if (pageNeedsTobeRendered === "inputPhone") {
      return <InputFormPhone 
                navigateToMainPage={this.navigateToMainPage}
                setPhone={this.setPhone}
      />;
    }
    else if (pageNeedsTobeRendered === "inputAddress") {
      return <InputFormAddress 
                navigateToMainPage={this.navigateToMainPage}
                setAddress={this.setAddress}
      />;
    }

    return (
      <Main
        userName={userName}
        gender={gender}
        phone={phone}
        address={address}
        navigateToInputFormName={this.navigateToInputFormName}
        navigateToInputFormGender={this.navigateToInputFormGender}
        navigateToInputFormPhone={this.navigateToInputFormPhone}
        navigateToInputFormAddress={this.navigateToInputFormAddress}
      />
    );
  }
}

export default App;


