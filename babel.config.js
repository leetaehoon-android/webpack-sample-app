/**
 * Babel configuration
 * 기본적으로 react에서 사용되는 @babel/preset-react와 es6 문법을 환경에 맞게 바꿔주는 @babel/preset-env 플러그인 적용
 * @see {@link https://babeljs.io/docs/en/babel-preset-react}
 * @see {@link https://babeljs.io/docs/en/babel-preset-env#docsNav}
 *
 * React에서 inline component를 적용하기 위해 @babel/plugin-transform-react-inline-elements를 프로덕션 릴리즈에만 적용
 * @see {@link https://github.com/leetaehoon-android/SampleWebpackApp/blob/main/README.md#react-component-inline으로-구성}
 */
module.exports = {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    env: {
        production: {
            plugins: ['@babel/plugin-transform-react-inline-elements']
        }
    }
};