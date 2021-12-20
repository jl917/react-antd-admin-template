# react-antd-admin-template

## 빌드 관련

- buildRoot {mode: dev | qa | stage | production}
- buildBundle {mode} {name} {filePath}
- buildAll {mode}

```sh
# build Root
$ node scripts/buildRoot dev

# build page
$ node scripts/buildBundle dev dashboard ./components/dashboard/index.tsx 

# build all
$ node scripts/buildAll dev
```

### Root부분 빌드

- `src/public/entry` 폴더는 지운다. (개발용 entry는 삭제, 빌드시 자동으로 처리됨.)

### Unit빌드 관련 설명

서버단 dist폴더는 지우는 방식이 아닌 교체(덮어 씌우는)하는 방식을 택해야 한다.(dist폴더가 리셋되는 경우 기존 파일도 재빌드 해야됨.)

#### vite.config.bundle.js

- build.lib.name : 빌드할 라이브러리 이름을 정의 한다. (예: dashboard, about,  company_resume 등등)
- build.lib.entry : 빌드할 파일 경로를 정의 한다. (예: './components/dashboard/index.tsx')
- build.lib.fileName: export할 파일명을 정의 한다. build.lib.name과 동일하게 가져가는것을 원칙으로 한다.
- build.outDir: 개발 모드에서는 `./public/entry`를 기본으로 하고, 빌드 할때는 `../dist/entry`폴더로 지정한다.
