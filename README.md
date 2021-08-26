### Developing

#### Using Plink command line
Through npm run scripts:
```bash
npm run plink -- <sub-command> [options...] [arguments...]
```
Or install globally by `npm i -g @wfh/plink-cli`

Plink provides help command in form of:
```bash
plink -h
plink <sub-command> -h
# or
plink help <sub-command>
```

Easy source code generating
```bash
# Plink's more sub-commands extensions are available under each worktree space directory, as long as they are installed.
cd cra-space


# Generate "internal" Redux slice for a component
plink cra-gen-slice --internal ../packages/aw-main/containers landing
```

