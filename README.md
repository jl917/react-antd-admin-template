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
│  │  │  ├─index.page.tsx       // 라우팅 생성 (/apage or /apage/index)
│  │  │  ├─index.page.tsx       // 라우팅 생성 (/apage or /apage/index)

│  ├─provider                   // provider 정의(recoil, react-query, redux등등 정의)
│  │  ├─Recoil.tsx              // recoil Provider정의
│  │  ├─Query.tsx               // react-query Provider정의
│  │  ├─index.tsx               // 프로젝트명.

│  ├─public                     // fav.ico, image등 static assets파일
│  ├─router                     // 라우터 로직 처리
│  ├─types                      // 공통타입(router/provider)
│  index.html                   // entry html(vite)
│  index.tsx                    // entry

├─.env.* (dev,qa...)            // 각 환경별 env설정 지정
```

### 폴더별 설명

#### ./jest

jest 관련된 설정 파일(fileMock, setupFiles)이 포함되고 ./jest/expect 에 필요한 확장기능을 추가한다.(js로 추천)

#### ./env.*

각환경별 분기가 필요한 변수를 선언하고 ./src/components/constants/env.ts 에서 재정의 해서 사용한다.

#### ./src/components/**/*.page.tsx

components폴더내에 라우팅이 필요한 부분은 `.page.tsx` postFix를 추가해주면 자동으로 라우팅을 잡아준다.

#### ./src/provider/

프로젝트 전체 provider를 관리 한다. 각 Root별 환경설정은 개별파일로 정의 하고 index에서 감싸준다.(각 root별 옵션이 다양해서 별도 분리)

#### ./src/common/

전체 페이지에 공통으로 사용될 부분.

#### ./src/common/apis/

필요한 요청은 전부 apis를 통해서 서버로 통신한다. 각 주제별 별도의 파일로 관리를 하고 index에 관련된 모듈을 수동 매핑해서 사용한다.

#### ./src/common/constants/

모든 상수는 대문자로 시작하고 Kebab Case로 작성한다. (예: DB_NAME, API_URL...)

#### ./src/common/domains/

통신관련 데이터 변환시 필요한 로직처리 한다. 각 주제별 별도의 파일로 관리를 하고 index에 관련된 모듈을 수동 매핑해서 사용한다.

#### ./src/common/hooks/

react hook 관련 부분을 처리한다. 파일명은 use prefix로 시작한다. (ex. usePermission 기타 등등.)

#### ./src/common/query/

준비중......

#### ./src/common/store/

관련된 주제별 파일을 생성하고 atom, selector를 동시에 관리한다.

atom 같은 경우 atom prefix로 시작하고 selector 같은 경우 selector prefix로 시작한다.

필요한 경우 별도의 공통 state 생성해서 사용해도 된다. ./src/common/store/globalKey.ts 참고

#### ./src/common/ui/

아토믹 디자인 패턴 참고. https://atomicdesign.bradfrost.com/

#### ./src/common/utils/

공통으로 사용될 유틸 모음.

#### ./src/common/validations/

async-validation을 기본으로 사용한다. antd form(rc-field-form) 호환 가능(https://github.com/tmpfs/async-validate)

#### 각 폴더별 types

- ./types/ : 글로벌 환경에 대한 정의(jest extends, scss, stylus등)
- ./src/types/ : 프로젝트내 환경에 대한 정의(router, provider등)
- ./src/common/types/ : 공통에 사용될 타입정의(util, api등)
- ./src/components/**/types/ : 각개 프로젝트별 개별 타입정의


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