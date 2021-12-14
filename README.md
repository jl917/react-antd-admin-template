# react-antd-admin-template

## Project Composition

- typescript
- vitejs
- UI Framework - antd
- Style - stylus
- State Management - recoil
- Code Quality
  - eslint with airbnb-config(prettier)
  - stylelint(with stylus)
- Test
  - jest
  - @testing-library/react
- husky

## Structures Folder

```plan
├─.github                       // github actions workflow
├─.husky                        // git hooks(precommit)
├─jest                          // jest setup
│  ├─expect                     // jest expect extend(확장)
│  ├─fileMock.js                // jest fileMock
│  ├─setupFiles.js              // jest runtime setup

├─src                           // source 디렉토리
│  ├─common                     // 공통영역
│  │  ├─apis                    // 공통 http요청 관리
│  │  ├─constants               // 공통 const 관리 
│  │  ├─domains                 // 공통 api req, res데이터 변환.
│  │  ├─hooks                   // 공통 hooks(usePermission, useUserName)
│  │  ├─store                   // 공통 상태 관리
│  │  ├─query????               // 공통 http 상태 관리??
│  │  ├─ui                      // 공통 ui(atomic디자인)
│  │  ├─utils                   // 공통 유틸
│  │  ├─validations             // 공통 유효성 체크
│  │  ├─types                   // 공통 타입
│  ├─components                 // 서비스별 컴포넌트
│  │  ├─apage                   // 프로젝트명.
│  │  │  ├─apis                 // 개별 http요청 관리
│  │  │  ├─constants            // 개별 const 관리 
│  │  │  ├─domains              // 개별 api req, res데이터 변환.
│  │  │  ├─hooks                // 개별 hooks(usePermission, useUserName)
│  │  │  ├─store                // 개별 상태 관리
│  │  │  ├─query????            // 개별 http 상태 관리??
│  │  │  ├─ui                   // 개별 ui(atomic디자인)
│  │  │  ├─utils                // 개별
│  │  │  ├─validations          // 개별 유효성 체크
│  │  │  ├─types                // 개별 타입
│  │  │  ├─index.tsx            // 개별 intro
│  │  │  ├─*index.entry.tsx     // **라우팅 처리(src/pages폴더 삭제 가능)

│  ├─pages                      // 라우팅 entry
│  │  ├─apage                   // 프로젝트명.

│  ├─provider                   // provider 정의(recoil, react-query, redux등등 정의)
│  │  ├─Recoil.tsx              // recoil Provider정의
│  │  ├─Query.tsx               // react-query Provider정의
│  │  ├─index.tsx               // 프로젝트명.

│  ├─public                     // fav.ico, image등 static assets파일
│  ├─router                     // 라우터 로직 처리
│  ├─types                      // 공통타입(router/provider)
│  index.html                   // entry html(vite)
│  index.tsx                    // entry
```

## Reference

- https://vitejs.dev/
- https://eslint.org/
- https://prettier.io/
- https://www.npmjs.com/package/eslint-config-airbnb
- https://stylus-lang.com/
- https://stylelint.io/
- https://jestjs.io/
- https://testing-library.com/
- https://typicode.github.io/husky/#/
- https://github.com/elsewhencode/project-guidelines/blob/master/README-ko.md
- https://github.com/apple77y/javascript/tree/master/react


## Dependence

- https://day.js.org/
- https://momentjs.com/
- https://sentry.io/
- https://ant.design
- https://axios-http.com/
- https://lodash.com/
- https://reactjs.org
- https://recoiljs.org/
- https://reactrouter.com/