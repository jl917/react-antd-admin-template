# 빌드 방법

## webpack 설정 이유.(vs vite)

1. bundle-analyzer 활용가능(rollup도 유사한 도구는 있으나 성숙되지 않음.)
2. cache설정 쉽다. (vite는 빌드 캐시 기능이 없음.rollup별도 지원 가능하나 복잡합.)
3. vendor 별도 처리가 가능하다.

## 벤더 빌드

로컬 개발모드, 빌드 성능을 향상 시키기 위해서 중복 빌드 하는 dependence를 한번 빌드하고 링크하는 방식으로 처리,

디펜던시가 업데이트 되거나, 추가, 삭제 되는 경우 실행

```shell
npm run build:vendor 실행.
```

## 환경별 빌드

```sh
npm run build
npm run build:dev
npm run build:qa
npm run build:stage
```

## 분석

```sh
npm run build:report
npm run build:smp
```

## webpack 설명

### loader

1. js번들은 esbuild-loader를 사용(babel-loader, ts-loader는 속도가 느림.)

### plugin

1. dotenv-webpack
2. ProvidePlugin(화면단 process.env.ABC에 접근하기 위한 용도, 별도의 process 패키지 설치 필요.)
3. DefinePlugin(정의된 값을 프론트에서 직접 사용할 수 있다.)
4. bundle-analyzer 플러그인 (번들링 사이즈 분석)
5. speed-measure 플러그인 (각 로더, 플러그인 실행 시간 분석)
