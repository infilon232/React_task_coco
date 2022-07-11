import AsyncStorage from "@react-native-async-storage/async-storage";
const PrefManager = {
  setValue: function (key, value) {
    AsyncStorage.setItem(key, JSON.stringify(value));
  },
  getValue: async (key) => {
    let value = "";
    try {
      value = (await AsyncStorage.getItem(key)) || "";
    } catch (error) {
      console.log("PrefManager error", error);
    }
    return value ? JSON.parse(value) : value;
  },
  removeValue: async (key) => {
    await AsyncStorage.removeItem(key);
  },
  removeAll: async () => {
    await AsyncStorage.clear();
  }
};
export default PrefManager;
