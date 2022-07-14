import React from "react";
import { AppRoot, Header } from "../../component";

import { Strings } from "../../config/appConstants";

const Home = () => {
  return (
    <AppRoot>
      <Header
        lable={Strings.app_Name}
        openAccount={() => {}}
        openDrawer={() => {}}
      />
    </AppRoot>
  );
};

export default Home;
