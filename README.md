<!-- TOC -->

- [How to run demonstration](#how-to-run-demonstration)
  - [Prerequisition](#prerequisition)
  - [Run demonstration](#run-demonstration)
  - [Run in development mode](#run-in-development-mode)
- [Source code structure](#source-code-structure)
  - [Slice, Epic and dependencies](#slice-epic-and-dependencies)
  - [Reading source code in Visual code without "missing type" error](#reading-source-code-in-visual-code-without-missing-type-error)

<!-- /TOC -->

## How to run demonstration
### Prerequisition
A local installed _Node.js_ that is above v12.16.0, and _npm_ which is above v6.6.0.
### Run demonstration
Install and initialize environment for the very first time.
```bash
npm run init
```

Run static demo server.
```bash
npm run start
```
Navigate brawser to [http://localhost:14334](http://localhost:14334) (Your default browser is supposed to be automatically opened).

Press `ctrl + c` to quit process in terminal

> Ajax request is targeting local Path `/api`, since there is a proxy server runs behind, which is eventually targeting `https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com` for bypassing CORS issue.
### Run in development mode
```bash
npm run dev:start
```

## Source code structure
```bash
   /
   |- packages/ # source code organized in package directories
   |   |- aw-main # client side source code
   |   |  |- components/  # Non-page level components
   |   |  |- configurable/  # route files
   |   |  |- main/  # App level entry component
   |   |  |- pages/ # page level components
   |   |
   |   |- aw-server # server side source code (for command line and API proxying)
   |- cra-space/  # create-react-app working directory (aka workspace tree)
   |- server-space/  # Node.js server working directory
   |- dist/static  # Already built static assets
   |- tarballs/  # Source packages from another repo
```

### Slice, Epic and dependencies
- File name like `*Slice.tsx?` is **Redux store slice** file addressed in [redux-toolkit](https://redux-toolkit.js.org/)
  > There are 2 type of slices, global level slice and local component level slice, e.g. landingSlice.ts and inviteFormSlice.tsx

  Each slice file contains:
    - `State interface`
    - `initial state value`
    - `reducers` (which changes `state` and can be **dispatched**)
    - `addEpic()` which observes incoming `reducer action` and `state changing event`, react with [RxJS](https://rxjs-dev.firebaseapp.com/) based operations as **side effect**.

- **Epic** in those `*Slice.tsx?` files is concept of [redux-observable](https://redux-observable.js.org/), an alternative approach to using `React.useEffect()`.
  > Compare with React hooks, Redux-observable (RxJS) offers better time based manipulation ability of async logic, and play _side effect_ with not only `state` changes but also `action` streams.

- **Plink** command used in package.json's `scripts` is open source monorepo management tool [https://gitee.com/liujingbreak/dr-comp-package](https://gitee.com/liujingbreak/dr-comp-package)

- Source file of packages under `tarballs/` are also in [Plink repo](https://gitee.com/liujingbreak/dr-comp-package/tree/master)

  - [@wfh/doc-ui-common](https://gitee.com/liujingbreak/dr-comp-package/tree/master/doc-app/doc-ui-common/client): Material design wrapped in React

  - [@wfh/redux-toolkit-observable](https://gitee.com/liujingbreak/dr-comp-package/tree/master/main/redux-toolkit-observable) A better Typescript friendly wrapper of Redux-toolkit with Redux-observable

> Client sided node packages in `tarballs/` actually contains source files without compilation, so you may navigate the source code by Visual Studio Code type interence.
### Reading source code in Visual code without "missing type" error
A monorepo needs to switching `workspace tree` for changing top level tsconfig.json file to make Visual Studio Code be able to inference dependencies for specific source code package.

- Before read source code of `packages/aw-main`, ensure current workspace-tree is `cra-space/` by either `npm run start` is the last command you ran, or by command:
```bash
npm run plink -- sync cra-space
```


