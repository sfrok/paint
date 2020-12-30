module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3.8.1",
        targets: {},
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties"],
    ["babel-plugin-styled-components"],
    ["react-hot-loader/babel"],
  ],
};
