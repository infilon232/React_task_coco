import Snackbar from "react-native-snackbar";
import { Colors } from "../config/appConstants";
function Snack(msg, action, onPress) {
  Snackbar.show({
    text: msg,
    backgroundColor: Colors.black,
    duration: Snackbar.LENGTH_SHORT,
    action: {
      text: action,
      textColor: Colors.white,
      onPress: () => onPress
    }
  });
}

export default Snack;
