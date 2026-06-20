# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

abrahan@fedora:~/Documentos/new-portfolio$ pnpm dev
✓ Lockfile passes supply-chain policies (verified 22m ago)
Lockfile is up to date, resolution step is skipped
Already up to date
[ERR_PNPM_IGNORED_BUILDS] Ignored build scripts: @swc/core@1.15.41, esbuild@0.27.7

Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.
[ERROR] Command failed with exit code 1: '/home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/pnpm' install

pnpm: Command failed with exit code 1: '/home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/pnpm' install
at getFinalError (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:34053:14)
at makeError (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:36360:21)
at getSyncResult (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:38204:10)
at spawnSubprocessSync (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:38164:14)
at execaCoreSync (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:38094:23)
at callBoundExeca (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:40622:23)
at boundExeca (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:40599:49)
at sync (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:40758:10)
at runPnpmCli (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:244489:5)
at runDepsStatusCheck (file:///home/abrahan/.local/share/pnpm/store/v11/links/@pnpm/exe/11.6.0/ea313a5bbbb86abbee24bb32f80f2cf948d9710f1b676d3d20718178c25b0deb/node_modules/@pnpm/exe/dist/pnpm.mjs:246225:7)
abrahan@fedora:~/Documentos/new-portfolio$
