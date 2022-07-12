module.exports = {
  plugins: ["react-native-reanimated/plugin"],

  presets: [
    "module:metro-react-native-babel-preset",
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript"
  ]
};
