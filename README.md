<!-- TOC -->

- [A quick view of static build at Github page](#a-quick-view-of-static-build-at-github-page)
- [How to run complete demonstration](#how-to-run-complete-demonstration)
  - [Prerequisition](#prerequisition)
  - [Run demonstration](#run-demonstration)
  - [Run in development mode](#run-in-development-mode)
- [Source code structure](#source-code-structure)
  - [Slice, Epic and dependencies](#slice-epic-and-dependencies)
  - [Reading source code in Visual studio code without "missing type" error](#reading-source-code-in-visual-studio-code-without-missing-type-error)

<!-- /TOC -->

## A quick view of static build at Github page

[https://wfh-plink.github.io/aw-practice](https://wfh-plink.github.io/aw-practice/)
## How to run complete demonstration
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
Visit [http://localhost:14334](http://localhost:14334) (In case your default browser is not opened automatically).

> Ajax request is targeting local path `/api`, since there is a proxy server runs behind, which is eventually targeting `https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com` for bypassing CORS issue.
### Run in development mode
```bash
npm run dev:start
```
Press `ctrl + c` to quit process in terminal

> Please ignore terminal log about visiting http://localhost:14333, since this port is hosted by create-react-app without a proxy server. The proxy server will be running on 14334.


## Source code structure
```bash
   /
   |- packages/ # source code organized in package directories
   |   |- aw-main # client side feature directory
   |   |  |- components/  # Non-page level components
   |   |  |- configurable/  # route files
   |   |  |- main/  # App level entry component
   |   |  |- pages/ # page level components
   |   |  |- isom/   # Shared type definitions, for Plink isomophic usage
   |   |- aw-server # server side source code (for command line and API proxying)
   |- cra-space/  # create-react-app working directory (aka workspace tree)
   |- server-space/  # Node.js server working directory
   |- dist/static  # Already built static assets
   |- tarballs/  # Source packages reused from another repo
```

### Slice, Epic and dependencies

[![](https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IFREXG5cbkVwaWMoW0VwaWNdKVxuXG5zdWJncmFwaCBSZWR1eFxuICBydGtbUmVkdXgtdG9vbGtpdDxicj5taWRkbGV3YXJlXVxuICByb1tSZWR1eC1vYnNlcnZhYmxlPGJyPm1pZGRsZXdhcmVdXG4gIHJlZHV4U3RvcmVbKFJlZHV4IHN0b3JlKV1cbmVuZFxuXG5jb21wKFtjb21wb25lbnRdKSAtLT4gfGRpc3BhdGNoPGJyPnJlZHVjZXIgYWN0aW9ufCBydGtcbmNvbXAgLS4tPiB8dXNlRWZmZWN0LDxicj5wcm9wc3wgaG9va1tcIkB3ZmggaG9vayw8YnI-cmVhY3QtcmVkdXhcIl1cbmhvb2sgLS4tPiB8c3Vic2NyaWJlLDxicj5kaWZmfCByZWR1eFN0b3JlXG5ydGsgLS0-IHx1cGRhdGV8IHJlZHV4U3RvcmVcbnJ0ayAtLT4gcm9cbnJvIC0tPiB8YWN0aW9uIHN0cmVhbSw8YnI-c3RhdGUgY2hhbmdlIHN0cmVhbXwgRXBpY1xuRXBpYyAtLT4gfGRpc3BhdGNoPGJyPmFzeW5jPGJyPnJlZHVjZXIgYWN0aW9ufCBydGtcbkVwaWMgLS0-IHxyZXF1ZXN0fCBhcGlbKEFQSSldXG5ybyAtLi0-IHxkaWZmfCByZWR1eFN0b3JlXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCIsInRoZW1lVmFyaWFibGVzIjp7ImJhY2tncm91bmQiOiJ3aGl0ZSIsInByaW1hcnlDb2xvciI6IiNFQ0VDRkYiLCJzZWNvbmRhcnlDb2xvciI6IiNmZmZmZGUiLCJ0ZXJ0aWFyeUNvbG9yIjoiaHNsKDgwLCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJwcmltYXJ5Qm9yZGVyQ29sb3IiOiJoc2woMjQwLCA2MCUsIDg2LjI3NDUwOTgwMzklKSIsInNlY29uZGFyeUJvcmRlckNvbG9yIjoiaHNsKDYwLCA2MCUsIDgzLjUyOTQxMTc2NDclKSIsInRlcnRpYXJ5Qm9yZGVyQ29sb3IiOiJoc2woODAsIDYwJSwgODYuMjc0NTA5ODAzOSUpIiwicHJpbWFyeVRleHRDb2xvciI6IiMxMzEzMDAiLCJzZWNvbmRhcnlUZXh0Q29sb3IiOiIjMDAwMDIxIiwidGVydGlhcnlUZXh0Q29sb3IiOiJyZ2IoOS41MDAwMDAwMDAxLCA5LjUwMDAwMDAwMDEsIDkuNTAwMDAwMDAwMSkiLCJsaW5lQ29sb3IiOiIjMzMzMzMzIiwidGV4dENvbG9yIjoiIzMzMyIsIm1haW5Ca2ciOiIjRUNFQ0ZGIiwic2Vjb25kQmtnIjoiI2ZmZmZkZSIsImJvcmRlcjEiOiIjOTM3MERCIiwiYm9yZGVyMiI6IiNhYWFhMzMiLCJhcnJvd2hlYWRDb2xvciI6IiMzMzMzMzMiLCJmb250RmFtaWx5IjoiXCJ0cmVidWNoZXQgbXNcIiwgdmVyZGFuYSwgYXJpYWwiLCJmb250U2l6ZSI6IjE2cHgiLCJsYWJlbEJhY2tncm91bmQiOiIjZThlOGU4Iiwibm9kZUJrZyI6IiNFQ0VDRkYiLCJub2RlQm9yZGVyIjoiIzkzNzBEQiIsImNsdXN0ZXJCa2ciOiIjZmZmZmRlIiwiY2x1c3RlckJvcmRlciI6IiNhYWFhMzMiLCJkZWZhdWx0TGlua0NvbG9yIjoiIzMzMzMzMyIsInRpdGxlQ29sb3IiOiIjMzMzIiwiZWRnZUxhYmVsQmFja2dyb3VuZCI6IiNlOGU4ZTgiLCJhY3RvckJvcmRlciI6ImhzbCgyNTkuNjI2MTY4MjI0MywgNTkuNzc2NTM2MzEyOCUsIDg3LjkwMTk2MDc4NDMlKSIsImFjdG9yQmtnIjoiI0VDRUNGRiIsImFjdG9yVGV4dENvbG9yIjoiYmxhY2siLCJhY3RvckxpbmVDb2xvciI6ImdyZXkiLCJzaWduYWxDb2xvciI6IiMzMzMiLCJzaWduYWxUZXh0Q29sb3IiOiIjMzMzIiwibGFiZWxCb3hCa2dDb2xvciI6IiNFQ0VDRkYiLCJsYWJlbEJveEJvcmRlckNvbG9yIjoiaHNsKDI1OS42MjYxNjgyMjQzLCA1OS43NzY1MzYzMTI4JSwgODcuOTAxOTYwNzg0MyUpIiwibGFiZWxUZXh0Q29sb3IiOiJibGFjayIsImxvb3BUZXh0Q29sb3IiOiJibGFjayIsIm5vdGVCb3JkZXJDb2xvciI6IiNhYWFhMzMiLCJub3RlQmtnQ29sb3IiOiIjZmZmNWFkIiwibm90ZVRleHRDb2xvciI6ImJsYWNrIiwiYWN0aXZhdGlvbkJvcmRlckNvbG9yIjoiIzY2NiIsImFjdGl2YXRpb25Ca2dDb2xvciI6IiNmNGY0ZjQiLCJzZXF1ZW5jZU51bWJlckNvbG9yIjoid2hpdGUiLCJzZWN0aW9uQmtnQ29sb3IiOiJyZ2JhKDEwMiwgMTAyLCAyNTUsIDAuNDkpIiwiYWx0U2VjdGlvbkJrZ0NvbG9yIjoid2hpdGUiLCJzZWN0aW9uQmtnQ29sb3IyIjoiI2ZmZjQwMCIsInRhc2tCb3JkZXJDb2xvciI6IiM1MzRmYmMiLCJ0YXNrQmtnQ29sb3IiOiIjOGE5MGRkIiwidGFza1RleHRMaWdodENvbG9yIjoid2hpdGUiLCJ0YXNrVGV4dENvbG9yIjoid2hpdGUiLCJ0YXNrVGV4dERhcmtDb2xvciI6ImJsYWNrIiwidGFza1RleHRPdXRzaWRlQ29sb3IiOiJibGFjayIsInRhc2tUZXh0Q2xpY2thYmxlQ29sb3IiOiIjMDAzMTYzIiwiYWN0aXZlVGFza0JvcmRlckNvbG9yIjoiIzUzNGZiYyIsImFjdGl2ZVRhc2tCa2dDb2xvciI6IiNiZmM3ZmYiLCJncmlkQ29sb3IiOiJsaWdodGdyZXkiLCJkb25lVGFza0JrZ0NvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCb3JkZXJDb2xvciI6ImdyZXkiLCJjcml0Qm9yZGVyQ29sb3IiOiIjZmY4ODg4IiwiY3JpdEJrZ0NvbG9yIjoicmVkIiwidG9kYXlMaW5lQ29sb3IiOiJyZWQiLCJsYWJlbENvbG9yIjoiYmxhY2siLCJlcnJvckJrZ0NvbG9yIjoiIzU1MjIyMiIsImVycm9yVGV4dENvbG9yIjoiIzU1MjIyMiIsImNsYXNzVGV4dCI6IiMxMzEzMDAiLCJmaWxsVHlwZTAiOiIjRUNFQ0ZGIiwiZmlsbFR5cGUxIjoiI2ZmZmZkZSIsImZpbGxUeXBlMiI6ImhzbCgzMDQsIDEwMCUsIDk2LjI3NDUwOTgwMzklKSIsImZpbGxUeXBlMyI6ImhzbCgxMjQsIDEwMCUsIDkzLjUyOTQxMTc2NDclKSIsImZpbGxUeXBlNCI6ImhzbCgxNzYsIDEwMCUsIDk2LjI3NDUwOTgwMzklKSIsImZpbGxUeXBlNSI6ImhzbCgtNCwgMTAwJSwgOTMuNTI5NDExNzY0NyUpIiwiZmlsbFR5cGU2IjoiaHNsKDgsIDEwMCUsIDk2LjI3NDUwOTgwMzklKSIsImZpbGxUeXBlNyI6ImhzbCgxODgsIDEwMCUsIDkzLjUyOTQxMTc2NDclKSJ9fSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit/##eyJjb2RlIjoiZmxvd2NoYXJ0IFREXG5cbkVwaWMoW0VwaWNdKVxuXG5zdWJncmFwaCBSZWR1eFxuICBydGtbUmVkdXgtdG9vbGtpdDxicj5taWRkbGV3YXJlXVxuICByb1tSZWR1eC1vYnNlcnZhYmxlPGJyPm1pZGRsZXdhcmVdXG4gIHJlZHV4U3RvcmVbKFJlZHV4IHN0b3JlKV1cbmVuZFxuXG5jb21wKFtjb21wb25lbnRdKSAtLT4gfGRpc3BhdGNoPGJyPnJlZHVjZXIgYWN0aW9ufCBydGtcbmNvbXAgLS4tPiB8dXNlRWZmZWN0PGJyPnByb3BzfCBob29rW1wiQHdmaCBob29rLDxicj5yZWFjdC1yZWR1eFwiXVxuaG9vayAtLi0-IHxzdWJzY3JpYmUsPGJyPmRpZmZ8IHJlZHV4U3RvcmVcbnJ0ayAtLT4gfHVwZGF0ZXwgcmVkdXhTdG9yZVxucnRrIC0tPiByb1xucm8gLS0-IHxhY3Rpb24gc3RyZWFtLDxicj5zdGF0ZSBjaGFuZ2Ugc3RyZWFtfCBFcGljXG5FcGljIC0tPiB8ZGlzcGF0Y2g8YnI-YXN5bmM8YnI-cmVkdWNlciBhY3Rpb258IHJ0a1xuRXBpYyAtLT4gfHJlcXVlc3R8IGFwaVsoQVBJKV1cbnJvIC0uLT4gfGRpZmZ8IHJlZHV4U3RvcmVcbiIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkZWZhdWx0XCIsXG4gIFwidGhlbWVWYXJpYWJsZXNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIndoaXRlXCIsXG4gICAgXCJwcmltYXJ5Q29sb3JcIjogXCIjRUNFQ0ZGXCIsXG4gICAgXCJzZWNvbmRhcnlDb2xvclwiOiBcIiNmZmZmZGVcIixcbiAgICBcInRlcnRpYXJ5Q29sb3JcIjogXCJoc2woODAsIDEwMCUsIDk2LjI3NDUwOTgwMzklKVwiLFxuICAgIFwicHJpbWFyeUJvcmRlckNvbG9yXCI6IFwiaHNsKDI0MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSlcIixcbiAgICBcInNlY29uZGFyeUJvcmRlckNvbG9yXCI6IFwiaHNsKDYwLCA2MCUsIDgzLjUyOTQxMTc2NDclKVwiLFxuICAgIFwidGVydGlhcnlCb3JkZXJDb2xvclwiOiBcImhzbCg4MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSlcIixcbiAgICBcInByaW1hcnlUZXh0Q29sb3JcIjogXCIjMTMxMzAwXCIsXG4gICAgXCJzZWNvbmRhcnlUZXh0Q29sb3JcIjogXCIjMDAwMDIxXCIsXG4gICAgXCJ0ZXJ0aWFyeVRleHRDb2xvclwiOiBcInJnYig5LjUwMDAwMDAwMDEsIDkuNTAwMDAwMDAwMSwgOS41MDAwMDAwMDAxKVwiLFxuICAgIFwibGluZUNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwidGV4dENvbG9yXCI6IFwiIzMzM1wiLFxuICAgIFwibWFpbkJrZ1wiOiBcIiNFQ0VDRkZcIixcbiAgICBcInNlY29uZEJrZ1wiOiBcIiNmZmZmZGVcIixcbiAgICBcImJvcmRlcjFcIjogXCIjOTM3MERCXCIsXG4gICAgXCJib3JkZXIyXCI6IFwiI2FhYWEzM1wiLFxuICAgIFwiYXJyb3doZWFkQ29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiXFxcInRyZWJ1Y2hldCBtc1xcXCIsIHZlcmRhbmEsIGFyaWFsXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2cHhcIixcbiAgICBcImxhYmVsQmFja2dyb3VuZFwiOiBcIiNlOGU4ZThcIixcbiAgICBcIm5vZGVCa2dcIjogXCIjRUNFQ0ZGXCIsXG4gICAgXCJub2RlQm9yZGVyXCI6IFwiIzkzNzBEQlwiLFxuICAgIFwiY2x1c3RlckJrZ1wiOiBcIiNmZmZmZGVcIixcbiAgICBcImNsdXN0ZXJCb3JkZXJcIjogXCIjYWFhYTMzXCIsXG4gICAgXCJkZWZhdWx0TGlua0NvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwidGl0bGVDb2xvclwiOiBcIiMzMzNcIixcbiAgICBcImVkZ2VMYWJlbEJhY2tncm91bmRcIjogXCIjZThlOGU4XCIsXG4gICAgXCJhY3RvckJvcmRlclwiOiBcImhzbCgyNTkuNjI2MTY4MjI0MywgNTkuNzc2NTM2MzEyOCUsIDg3LjkwMTk2MDc4NDMlKVwiLFxuICAgIFwiYWN0b3JCa2dcIjogXCIjRUNFQ0ZGXCIsXG4gICAgXCJhY3RvclRleHRDb2xvclwiOiBcImJsYWNrXCIsXG4gICAgXCJhY3RvckxpbmVDb2xvclwiOiBcImdyZXlcIixcbiAgICBcInNpZ25hbENvbG9yXCI6IFwiIzMzM1wiLFxuICAgIFwic2lnbmFsVGV4dENvbG9yXCI6IFwiIzMzM1wiLFxuICAgIFwibGFiZWxCb3hCa2dDb2xvclwiOiBcIiNFQ0VDRkZcIixcbiAgICBcImxhYmVsQm94Qm9yZGVyQ29sb3JcIjogXCJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSlcIixcbiAgICBcImxhYmVsVGV4dENvbG9yXCI6IFwiYmxhY2tcIixcbiAgICBcImxvb3BUZXh0Q29sb3JcIjogXCJibGFja1wiLFxuICAgIFwibm90ZUJvcmRlckNvbG9yXCI6IFwiI2FhYWEzM1wiLFxuICAgIFwibm90ZUJrZ0NvbG9yXCI6IFwiI2ZmZjVhZFwiLFxuICAgIFwibm90ZVRleHRDb2xvclwiOiBcImJsYWNrXCIsXG4gICAgXCJhY3RpdmF0aW9uQm9yZGVyQ29sb3JcIjogXCIjNjY2XCIsXG4gICAgXCJhY3RpdmF0aW9uQmtnQ29sb3JcIjogXCIjZjRmNGY0XCIsXG4gICAgXCJzZXF1ZW5jZU51bWJlckNvbG9yXCI6IFwid2hpdGVcIixcbiAgICBcInNlY3Rpb25Ca2dDb2xvclwiOiBcInJnYmEoMTAyLCAxMDIsIDI1NSwgMC40OSlcIixcbiAgICBcImFsdFNlY3Rpb25Ca2dDb2xvclwiOiBcIndoaXRlXCIsXG4gICAgXCJzZWN0aW9uQmtnQ29sb3IyXCI6IFwiI2ZmZjQwMFwiLFxuICAgIFwidGFza0JvcmRlckNvbG9yXCI6IFwiIzUzNGZiY1wiLFxuICAgIFwidGFza0JrZ0NvbG9yXCI6IFwiIzhhOTBkZFwiLFxuICAgIFwidGFza1RleHRMaWdodENvbG9yXCI6IFwid2hpdGVcIixcbiAgICBcInRhc2tUZXh0Q29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgIFwidGFza1RleHREYXJrQ29sb3JcIjogXCJibGFja1wiLFxuICAgIFwidGFza1RleHRPdXRzaWRlQ29sb3JcIjogXCJibGFja1wiLFxuICAgIFwidGFza1RleHRDbGlja2FibGVDb2xvclwiOiBcIiMwMDMxNjNcIixcbiAgICBcImFjdGl2ZVRhc2tCb3JkZXJDb2xvclwiOiBcIiM1MzRmYmNcIixcbiAgICBcImFjdGl2ZVRhc2tCa2dDb2xvclwiOiBcIiNiZmM3ZmZcIixcbiAgICBcImdyaWRDb2xvclwiOiBcImxpZ2h0Z3JleVwiLFxuICAgIFwiZG9uZVRhc2tCa2dDb2xvclwiOiBcImxpZ2h0Z3JleVwiLFxuICAgIFwiZG9uZVRhc2tCb3JkZXJDb2xvclwiOiBcImdyZXlcIixcbiAgICBcImNyaXRCb3JkZXJDb2xvclwiOiBcIiNmZjg4ODhcIixcbiAgICBcImNyaXRCa2dDb2xvclwiOiBcInJlZFwiLFxuICAgIFwidG9kYXlMaW5lQ29sb3JcIjogXCJyZWRcIixcbiAgICBcImxhYmVsQ29sb3JcIjogXCJibGFja1wiLFxuICAgIFwiZXJyb3JCa2dDb2xvclwiOiBcIiM1NTIyMjJcIixcbiAgICBcImVycm9yVGV4dENvbG9yXCI6IFwiIzU1MjIyMlwiLFxuICAgIFwiY2xhc3NUZXh0XCI6IFwiIzEzMTMwMFwiLFxuICAgIFwiZmlsbFR5cGUwXCI6IFwiI0VDRUNGRlwiLFxuICAgIFwiZmlsbFR5cGUxXCI6IFwiI2ZmZmZkZVwiLFxuICAgIFwiZmlsbFR5cGUyXCI6IFwiaHNsKDMwNCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpXCIsXG4gICAgXCJmaWxsVHlwZTNcIjogXCJoc2woMTI0LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSlcIixcbiAgICBcImZpbGxUeXBlNFwiOiBcImhzbCgxNzYsIDEwMCUsIDk2LjI3NDUwOTgwMzklKVwiLFxuICAgIFwiZmlsbFR5cGU1XCI6IFwiaHNsKC00LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSlcIixcbiAgICBcImZpbGxUeXBlNlwiOiBcImhzbCg4LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSlcIixcbiAgICBcImZpbGxUeXBlN1wiOiBcImhzbCgxODgsIDEwMCUsIDkzLjUyOTQxMTc2NDclKVwiXG4gIH1cbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

- File name like `*Slice.tsx?` is **Redux store slice** file addressed in [redux-toolkit](https://redux-toolkit.js.org/)
  > There are 2 types of slice, _global_ (data, page) level slice and _component instance_ level slice, e.g. landingSlice.ts and inviteFormSlice.tsx

  Each slice file contains:
    - `State interface`
    - `initial state value`
    - `reducers` (which changes `state` and can be **dispatched**)
    - `addEpic()` which observes incoming `reducer action` and `state changing event`, react with [RxJS](https://rxjs-dev.firebaseapp.com/) based operations as **side effect**.

- **Epic** in those `*Slice.tsx?` files is concept of [redux-observable](https://redux-observable.js.org/), an alternative approach to using `React.useEffect()`.
  > Compare with React hooks, Redux-observable (RxJS) offers better time based manipulation ability of async logic, and play _side effect_ against not only `state` changes but also `action` streams.

- **Plink** command used in package.json's `scripts` is open source monorepo management tool [https://github.com/liujingbreak/plink](https://github.com/liujingbreak/plink)

- Source file of packages under `tarballs/` are also in [Plink repo](https://gitee.com/liujingbreak/dr-comp-package/tree/master)

  - [@wfh/doc-ui-common](https://gitee.com/liujingbreak/dr-comp-package/tree/master/doc-app/doc-ui-common/client): Material design wrapped in React

  - [@wfh/redux-toolkit-observable](https://gitee.com/liujingbreak/dr-comp-package/tree/master/main/redux-toolkit-observable) A better Typescript friendly wrapper of Redux-toolkit with Redux-observable

> Client side node packages in `tarballs/` actually contains source TS files without compilation, so they can be browsed by following Visual Studio Code type interence.
### Reading source code in Visual studio code without "missing type" error
A monorepo needs to switching `workspace tree` for changing top level tsconfig.json file to make Visual Studio Code be able to inference dependencies for specific source code package.

- Before read source code of `packages/aw-main`, please ensure current workspace-tree is `cra-space/` by either `npm run start` is the last command you ran, or executing command:
```bash
# switch space
npm run plink -- sync cra-space
# check whether "cra-space" is highlighted
npm run plink -- ls
```


