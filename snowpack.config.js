module.exports = {
  // bundle option esbuild
  // 小規模のみ推薦
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: 'es2018',
  // },
  plugins: [
    [ '@snowpack/plugin-sass', {}],
    // webpack 中~大規模
    [ '@snowpack/plugin-webpack', {}]
  ],
};