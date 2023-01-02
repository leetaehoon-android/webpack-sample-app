[React 홈페이지](https://reactjs.org)

[자바스크립트 튜토리얼](https://ko.javascript.info)

---

## 어플 설치 사전 과정

### Package 관리

터미널에 npm install `package name`을 통해 설치하거나 package.json에 직접 입력해줄 수 있습니다.

`--save-dev` 옵션을 통해 개발 환경에서만 패키지 설치할 수 있습니다. 이 옵션을 적용하면 package.json에 devDependencies 항목에 들어갑니다.

### Webpack 번들링

package.json 파일에서 작성한 script로 실행합니다.
아래는 webpack 빌드를 진행하는 예시입니다.

```
  "scripts": {
    "dev": "webpack-dev-server --progress --mode development",
    "build": "NODE_ENV=production webpack --progress --mode production && cp tizen/* dist"
  }
```
  
터미널에서 `npm run build`를 입력하면 webpack 번들링 진행됩니다.
  
터미널에서 `npm run dev`를 입력하면 webpack dev server에 배포하여 임의의 주소로 웹사이트 확인 가능합니다. 임의의 주소는 webpack.config.js에서 devServer에서 지정한 값으로 됩니다.
```
devServer: {
        port: 3000,
        host: 'localhost',
        open: true,
        compress: true,
        historyApiFallback: true,
    }
```
위와 같은 옵션을 줬을 시 dev server는 localhost:3000이 됩니다.

### Tizen Packaging

Webpack 번들링해서 나온 폴더에 `config.xml`을 넣고 tizen cli로 패키징 및 기기에 설치하시면 됩니다.

이 레포에서는 `NODE_ENV=production webpack --progress --mode production && cp tizen/* dist`을 통해 webpack 번들링을 완료하면 config.xml 파일을 dist 폴더에 넣어줍니다.

그 이후에는 저는 편의상으로 vscode extension으로 패키징 및 어플 설치를 진행합니다.

#### VSCode를 통한 Packaging 및 Launching

1. VSCode에서 config.xml파일과 webpack에서 번들링된 파일이 있는 폴더를 엽니다.
2. fn + F1 키를 눌러 Command 창을 엽니다.
3. (Certificate가 없을 시) Tizen TV: Run Certificate Manager를 실행해 Certificate를 생성합니다.
4. Tizen TV: Build Signed Package를 실행해 패키지를 생성합니다.
5. Tizen TV: Launch Application를 실행해 TV에 실행합니다.

---

## 개발 환경 구성

### tizen 공식 홈페이지 babel 관련 글

> https://developer.tizen.org/ko/community/tip-tech/using-ecmascript-6-tizen-web-projects.

- 대충 es6를 사용하려면 babel을 사용하라는 글입니다.

### create-react-app 없이 react 개발환경 구성

> https://blog.joyfui.com/1243
> 
> https://velog.io/@kmlee95/CRA없이-React환경-구축하기
>
> https://baeharam.netlify.app/posts/react/React-CRA-없이-리액트-환경-만들기
> 
> https://velog.io/@ksh4820/CRA-없이-React-개발-환경-구축하기
>
> https://sihus.tistory.com/32

- create-react-app을 사용하였을 때 내재되어있는 react-script 패키지의 node 버전이 제한적이라 직접 react 개발환경을 구성하는 것을 택했었습니다.
- react-script가 es5 버전 문법을 사용했을 때 동작하지 않는 이슈가 있었습니다.

### webpack에 babel 구성

> https://yamoo9.gitbook.io/webpack/react/create-your-own-react-app/configure-babel

- 위의 포스팅에도 많이 나와있지만 추가적으로 찾아봤던 글입니다.

### react component inline으로 구성

> https://netflixtechblog.com/crafting-a-high-performance-tv-user-interface-using-react-3350e5a6ad3b
>
> https://github.com/facebook/react/issues/3228
>
> https://github.com/ecomfe/reskript/pull/261
>
> https://babeljs.io/docs/en/babel-plugin-transform-react-inline-elements/

- 굳이 필요없지만 저사양 티비 기기에서 쓸모 있을까 해서 찾아본 것들입니다.

### 리액트로 타이젠 프로젝트 구성한 깃헙 레포

> https://github.com/Dramloc/react-tizen/tree/master/tizen
>
> https://developer.tizen.org/ko/development/tizen-studio/web-tools/cli

- react 프로젝트 환경에서 따로 tizen package 빌드 용 config.xml을 추가한 것밖에 없습니다.
- webpack으로 번들링한 결과물에 config.xml을 넣어서 tizen cli로 패키징 및 티비에 띄우면 됩니다. (vscode에서 하시면 편합니다.)
- cli로 타이젠 빌드하는 것 참고하시면 좋을 것 같습니다.

### VSCode

> https://github.com/Samsung/vscode-extension-tizentv

- VSCode Extension
- Package 빌드 및 어플리케이션 티비에 띄울 때 용이합니다

### Tizen Web API

> https://docs.tizen.org/application/web/api/7.0/device_api/tv/index.html
>
> https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references.html
>
> https://github.com/Samsung/webIDE-common-tizentv
>
> https://github.com/Samsung/tizen-common-web

자바스크립트에서 사용할 수 있는 tizen api

---

## 그 이외

### Gastby

> https://www.gatsbyjs.com
>
> https://velog.io/@guri_coding/React-Gatsby-사용하기-1-설치-및-생성

현구 선배님이 언급하셨던 개츠비입니다.

