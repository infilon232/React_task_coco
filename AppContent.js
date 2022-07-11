/**
 * @formatc
 */
import React from "react";
import App from "./src/navigation";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import configureStore from "./src/redux/configureStore";
function ReduxApp() {
  const Store = configureStore();
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </SafeAreaProvider>
  );
}
export default React.memo(ReduxApp);
