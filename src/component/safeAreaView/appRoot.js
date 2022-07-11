import React, { memo } from "react";
import AppSafeAreaView from "./appSafeAreaView";
const AppRoot = ({ children, theme, needsSafeArea, safeAreaTheme }) => {
  return (
    <AppSafeAreaView
      theme={theme}
      needsSafeArea={needsSafeArea}
      safeAreaTheme={safeAreaTheme}
    >
      {children}
    </AppSafeAreaView>
  );
};
export default memo(AppRoot);
