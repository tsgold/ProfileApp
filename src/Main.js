import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

class Main extends Component {
  render() {
    const { userName, gender, phone, address } = this.props;
    return (
      <View style={Styles.classContainer}>
        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Name</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigateToInputFormName()}
            style={Styles.inputContainer}
          >
            <Text style={Styles.inputResult}>{userName}</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Gender</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigateToInputFormGender()}
            style={Styles.inputContainer}
          >
            <Text style={Styles.inputResult}>{gender}</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Phone</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigateToInputFormPhone()}
            style={Styles.inputContainer}
          >
            <Text style={Styles.inputResult}>{phone}</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.containerPerSection}>
          <View style={Styles.textContainer}>
            <Text style={Styles.text}>Address</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigateToInputFormAddress()}
            style={Styles.inputContainer}
          >
            <Text style={Styles.inputResult}>{address}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Styles.buttonSubmit}>
          <Text style={Styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  classContainer: { flex: 1, padding: 15 },
  containerPerSection: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  textContainer: { width: "30%" },
  text: { fontSize: 20, fontWeight: "bold" },
  inputContainer: { width: "70%", backgroundColor: "#176B63" },
  inputResult: { fontSize: 20, marginLeft: 5, color: "#FFF" },
  buttonSubmit: {
    backgroundColor: "#d2d2d2",
    borderRadius: 3,
    borderWidth: 1,
    position: "absolute",
    bottom: 10,
    right: 10,
    left: 10
  },
  textButton: { textAlign: "center", margin: 10, fontWeight: "bold" }
});

export default Main;
